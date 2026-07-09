import html
import re
import zipfile
from pathlib import Path


ROOT = Path(__file__).resolve().parent
SCRIPT = ROOT / "script.js"
OUTPUT = ROOT / "Tsantiris_Menu.docx"


def extract_array(source, name):
    start = source.index(f"const {name} = [")
    bracket = source.index("[", start)
    depth = 0
    for index in range(bracket, len(source)):
        char = source[index]
        if char == "[":
            depth += 1
        elif char == "]":
            depth -= 1
            if depth == 0:
                return source[bracket + 1:index]
    raise ValueError(f"Could not find array {name}")


def extract_string(block, key):
    match = re.search(rf'{key}:\s*"([^"]*)"', block)
    return match.group(1) if match else ""


def parse_menu(source):
    items_source = extract_array(source, "menuItems")
    item_blocks = re.findall(r"\{\s*category:.*?\n\s*\}", items_source, flags=re.S)
    items = []
    for block in item_blocks:
        items.append(
            {
                "category": extract_string(block, "category"),
                "name": extract_string(block, "name"),
                "price": extract_string(block, "price"),
                "sizes": extract_string(block, "sizes"),
            }
        )

    order_source = extract_array(source, "categoryOrder")
    order = re.findall(r'"([^"]+)"', order_source)
    return items, order


def price_text(price):
    return f"€{price}" if price else "Ask"


def text_run(text, bold=False, size=22):
    escaped = html.escape(text)
    props = []
    if bold:
        props.append("<w:b/>")
    props.append(f'<w:sz w:val="{size}"/>')
    return f"<w:r><w:rPr>{''.join(props)}</w:rPr><w:t>{escaped}</w:t></w:r>"


def paragraph(runs, style=None, spacing_after=80):
    style_xml = f'<w:pStyle w:val="{style}"/>' if style else ""
    return (
        "<w:p>"
        f'<w:pPr>{style_xml}<w:spacing w:after="{spacing_after}"/></w:pPr>'
        f"{''.join(runs)}"
        "</w:p>"
    )


def item_paragraph(name, price):
    return (
        "<w:p>"
        '<w:pPr><w:tabs><w:tab w:val="right" w:leader="dot" w:pos="9000"/>'
        '</w:tabs><w:spacing w:after="40"/></w:pPr>'
        f"{text_run(name, size=22)}"
        '<w:r><w:tab/></w:r>'
        f"{text_run(price, size=22)}"
        "</w:p>"
    )


def build_document(items, order):
    body = [
        paragraph([text_run("Tsantiris Menu", bold=True, size=40)], spacing_after=120),
        paragraph([text_run("Current full menu", size=22)], spacing_after=220),
    ]

    for category in order:
        category_items = [item for item in items if item["category"] == category]
        if not category_items:
            continue

        body.append(paragraph([text_run(category, bold=True, size=30)], spacing_after=100))
        if "Coffee" in category:
            body.append(paragraph([text_run("Option: with ice cream +€1.50", size=20)], spacing_after=80))

        for item in category_items:
            body.append(item_paragraph(item["name"], price_text(item["price"])))

        if category == "Ice Creams":
            body.append(paragraph([text_run("1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00", size=20)], spacing_after=140))
        else:
            body.append(paragraph([text_run("", size=20)], spacing_after=80))

    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
        "<w:body>"
        f"{''.join(body)}"
        '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="900" w:right="900" '
        'w:bottom="900" w:left="900" w:header="708" w:footer="708" w:gutter="0"/></w:sectPr>'
        "</w:body></w:document>"
    )


def write_docx(document_xml):
    content_types = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>"""

    rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>"""

    with zipfile.ZipFile(OUTPUT, "w", zipfile.ZIP_DEFLATED) as docx:
        docx.writestr("[Content_Types].xml", content_types)
        docx.writestr("_rels/.rels", rels)
        docx.writestr("word/document.xml", document_xml)


def main():
    source = SCRIPT.read_text(encoding="utf-8")
    items, order = parse_menu(source)
    write_docx(build_document(items, order))
    print(f"Wrote {OUTPUT} with {len(items)} menu items.")


if __name__ == "__main__":
    main()
