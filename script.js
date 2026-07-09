// Edit menu items here. Add, remove, or change objects in this array to update the site.
// Fields: category, name, price, description, ingredients, allergens, sizes, image, accent.
const menuItems = [
  {
    category: "Hot Coffees",
    name: "Greek coffee",
    price: "2.00",
    description: "Traditional Greek coffee served rich, aromatic, and comforting. Available single or double.",
    ingredients: "Greek coffee, water, optional sugar.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Single €2.00, double €3.00.",
    image: "",
    accent: "#8b6f55"
  },
  {
    category: "Hot Coffees",
    name: "Filter coffee",
    price: "3.00",
    description: "Smooth brewed coffee for an easy everyday cup.",
    ingredients: "Brewed filter coffee.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Regular cup.",
    image: "",
    accent: "#8b6f55"
  },
  {
    category: "Hot Coffees",
    name: "Nes café",
    price: "3.00",
    description: "Classic instant coffee served hot.",
    ingredients: "Instant coffee, water, optional milk and sugar.",
    allergens: "Milk if added.",
    sizes: "Regular cup.",
    image: "",
    accent: "#8b6f55"
  },
  {
    category: "Hot Coffees",
    name: "Espresso",
    price: "2.00",
    description: "Short, intense espresso with a clean crema. Available single or double.",
    ingredients: "Espresso coffee.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Single €2.00, double €3.00.",
    image: "",
    accent: "#8b6f55"
  },
  {
    category: "Hot Coffees",
    name: "Espresso macchiato",
    price: "2.00",
    description: "Espresso marked with a small touch of milk foam.",
    ingredients: "Espresso, milk foam.",
    allergens: "Milk.",
    sizes: "Single shot.",
    image: "",
    accent: "#8b6f55"
  },
  {
    category: "Hot Coffees",
    name: "Espresso affogato",
    price: "3.50",
    description: "Espresso poured over a sweet, creamy base.",
    ingredients: "Espresso, vanilla ice cream.",
    allergens: "Milk. May contain egg or nuts depending on ice cream.",
    sizes: "Regular serving.",
    image: "",
    accent: "#8b6f55"
  },
  {
    category: "Hot Coffees",
    name: "Cappuccino",
    price: "3.00",
    description: "Espresso with steamed milk and soft foam.",
    ingredients: "Espresso, steamed milk.",
    allergens: "Milk.",
    sizes: "Regular cup.",
    image: "",
    accent: "#8b6f55"
  },
  {
    category: "Cold Coffees",
    name: "Nes café frappe",
    price: "3.00",
    description: "Chilled whipped instant coffee, a Greek café classic.",
    ingredients: "Instant coffee, water, ice, optional milk and sugar.",
    allergens: "Milk if added.",
    sizes: "Regular glass.",
    image: "",
    accent: "#667f8a"
  },
  {
    category: "Cold Coffees",
    name: "Nes café frappe with ice cream",
    price: "4.50",
    description: "Classic frappe made richer with ice cream.",
    ingredients: "Instant coffee, water, ice, ice cream, optional milk and sugar.",
    allergens: "Milk. May contain egg or nuts depending on ice cream.",
    sizes: "Regular glass.",
    image: "",
    accent: "#667f8a"
  },
  {
    category: "Cold Coffees",
    name: "Espresso freddo",
    price: "3.00",
    description: "Iced espresso shaken until smooth and bright.",
    ingredients: "Espresso, ice, optional sugar.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Regular glass.",
    image: "",
    accent: "#667f8a"
  },
  {
    category: "Cold Coffees",
    name: "Cappuccino freddo",
    price: "3.50",
    description: "Iced espresso topped with cold milk foam.",
    ingredients: "Espresso, ice, milk foam.",
    allergens: "Milk.",
    sizes: "Regular glass.",
    image: "",
    accent: "#667f8a"
  },
  {
    category: "Non Caffeine Drinks",
    name: "Hot/cold chocolate",
    price: "3.50",
    description: "Chocolate drink served warm or chilled.",
    ingredients: "Chocolate mix, milk or water.",
    allergens: "Milk if prepared with milk. May contain soy.",
    sizes: "Hot or cold.",
    image: "",
    accent: "#9d6b50"
  },
  {
    category: "Non Caffeine Drinks",
    name: "Milk shake",
    price: "4.50",
    description: "Creamy blended milk shake.",
    ingredients: "Milk, ice cream, flavor syrup.",
    allergens: "Milk. May contain nuts depending on flavor.",
    sizes: "Regular glass.",
    image: "",
    accent: "#9d6b50"
  },
  {
    category: "Non Caffeine Drinks",
    name: "Milk",
    price: "2.00",
    description: "Simple glass of milk.",
    ingredients: "Milk.",
    allergens: "Milk.",
    sizes: "Regular glass.",
    image: "",
    accent: "#9d6b50"
  },
  {
    category: "Non Caffeine Drinks",
    name: "Tea, chamomile",
    price: "2.00",
    description: "Gentle herbal drink served hot.",
    ingredients: "Chamomile infusion, water.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Regular cup.",
    image: "",
    accent: "#9d6b50"
  },
  {
    category: "Non Caffeine Drinks",
    name: "Fresh orange juice",
    price: "3.00",
    description: "Fresh orange juice, bright and refreshing.",
    ingredients: "Fresh oranges.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Regular glass.",
    image: "",
    accent: "#9d6b50"
  },
  {
    category: "Non Caffeine Drinks",
    name: "Soft drinks",
    price: "2.00",
    description: "Refreshing bottled or canned soft drinks.",
    ingredients: "Varies by drink.",
    allergens: "Ask staff for brand-specific allergen information.",
    sizes: "Single bottle or can.",
    image: "",
    accent: "#9d6b50"
  },
  {
    category: "Bakeries",
    name: "Cheese pie",
    price: "2.00",
    description: "Freshly baked pie with feta cheese.",
    ingredients: "Pastry, feta cheese.",
    allergens: "Gluten, milk. May contain egg.",
    sizes: "Single piece.",
    image: "",
    accent: "#b78b55"
  },
  {
    category: "Bakeries",
    name: "Cheese Ring",
    price: "2.80",
    description: "Ring pastry with low fat cream cheese.",
    ingredients: "Pastry, low fat cream cheese.",
    allergens: "Gluten, milk. May contain sesame or egg.",
    sizes: "Single piece.",
    image: "",
    accent: "#b78b55"
  },
  {
    category: "Bakeries",
    name: "Local cheese pie",
    price: "2.80",
    description: "Local pie with four different kinds of cheese.",
    ingredients: "Pastry, mixed cheeses.",
    allergens: "Gluten, milk. May contain egg.",
    sizes: "Single piece.",
    image: "",
    accent: "#b78b55"
  },
  {
    category: "Bakeries",
    name: "Spinach pie",
    price: "2.80",
    description: "Spinach pie with pieces of feta cheese.",
    ingredients: "Pastry, spinach, feta cheese, herbs.",
    allergens: "Gluten, milk. May contain egg.",
    sizes: "Single piece.",
    image: "",
    accent: "#b78b55"
  },
  {
    category: "Bakeries",
    name: "Chicken pie",
    price: "2.80",
    description: "Chicken pie with heavy cream, mushrooms, and bacon.",
    ingredients: "Pastry, chicken, heavy cream, mushrooms, bacon.",
    allergens: "Gluten, milk. May contain egg.",
    sizes: "Single piece.",
    image: "",
    accent: "#b78b55"
  },
  {
    category: "Bakeries",
    name: "Ham and cheese pie",
    price: "2.80",
    description: "Savory pie with tomato sauce, ham, and cheese.",
    ingredients: "Pastry, ham, cheese, tomato sauce.",
    allergens: "Gluten, milk. May contain egg.",
    sizes: "Single piece.",
    image: "",
    accent: "#b78b55"
  },
  {
    category: "Bakeries",
    name: "Bougatsa",
    price: "2.80",
    description: "Pastry filled with sweet vanilla cream.",
    ingredients: "Pastry, vanilla cream.",
    allergens: "Gluten, milk, egg.",
    sizes: "Single piece.",
    image: "",
    accent: "#b78b55"
  },
  {
    category: "Bakeries",
    name: "Chocolate croissant",
    price: "2.80",
    description: "Flaky croissant with chocolate filling.",
    ingredients: "Croissant pastry, chocolate.",
    allergens: "Gluten, milk. May contain egg and nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#b78b55"
  },
  {
    category: "Bakeries",
    name: "Sandwich",
    price: "3.50",
    description: "Sandwich with turkey, cheese, and mayonnaise.",
    ingredients: "Bread, turkey, cheese, mayonnaise.",
    allergens: "Gluten, milk, egg.",
    sizes: "Single sandwich.",
    image: "",
    accent: "#b78b55"
  },
  {
    category: "Tea",
    name: "Lipton Black Tea",
    price: "",
    description: "Bold and brisk, a timeless classic.",
    ingredients: "Black tea, water.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Regular cup.",
    image: "",
    accent: "#222222"
  },
  {
    category: "Tea",
    name: "Sage (Faskómilo)",
    price: "",
    description: "Aromatic and grounding, this traditional herb is known for its soothing and clarifying qualities.",
    ingredients: "Sage infusion, water.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Regular cup.",
    image: "",
    accent: "#6f8264"
  },
  {
    category: "Tea",
    name: "Chamomile (Chamomíli)",
    price: "",
    description: "A gentle floral infusion that calms the senses and eases you into restfulness.",
    ingredients: "Chamomile infusion, water.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Regular cup.",
    image: "",
    accent: "#d1a742"
  },
  {
    category: "Tea",
    name: "Lemon Verbena (Louíza)",
    price: "",
    description: "Bright and citrusy, this fragrant herb uplifts the mood and refreshes the body.",
    ingredients: "Lemon verbena infusion, water.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Regular cup.",
    image: "",
    accent: "#b7a83d"
  },
  {
    category: "Tea",
    name: "Mountain Tea",
    price: "",
    description: "This mellow, earthy tea is rich in tradition and antioxidants.",
    ingredients: "Mountain tea infusion, water.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Regular cup.",
    image: "",
    accent: "#8c9b78"
  },
  {
    category: "Tea",
    name: "Pennyroyal Mint (Fliskoúni)",
    price: "",
    description: "A bold and minty herb, known for its invigorating aroma and digestive benefits.",
    ingredients: "Pennyroyal mint infusion, water.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Regular cup.",
    image: "",
    accent: "#6f9a81"
  },
  {
    category: "Tea",
    name: "Sarandakládi Blend",
    price: "",
    description: "A unique family blend passed down for generations, with many herbs and roots in one nostalgic cup. Seasonal and limited.",
    ingredients: "House blend of herbs and roots.",
    allergens: "Ask staff for the current seasonal blend.",
    sizes: "Regular cup, seasonal and limited.",
    image: "",
    accent: "#9d2f45"
  },
  {
    category: "Breakfast",
    name: "Boiled eggs",
    price: "3.50",
    description: "Simple boiled eggs for a light breakfast.",
    ingredients: "Eggs.",
    allergens: "Egg.",
    sizes: "Regular serving.",
    image: "",
    accent: "#9aaa7e"
  },
  {
    category: "Breakfast",
    name: "Fried eggs",
    price: "4.50",
    description: "Fried eggs cooked fresh to order.",
    ingredients: "Eggs, cooking oil or butter.",
    allergens: "Egg. Milk if cooked with butter.",
    sizes: "Regular serving.",
    image: "",
    accent: "#9aaa7e"
  },
  {
    category: "Breakfast",
    name: "Omelet",
    price: "5.00",
    description: "Omelet served with tomato and bread. Add cheese or turkey for 0.50 each.",
    ingredients: "Eggs, tomato, bread, optional cheese or turkey.",
    allergens: "Egg, gluten. Milk if cheese is added.",
    sizes: "Add cheese +0.50, add turkey +0.50.",
    image: "",
    accent: "#9aaa7e"
  },
  {
    category: "Breakfast",
    name: "French Toast",
    price: "5.50",
    description: "French toast breakfast plate.",
    ingredients: "Bread, egg, milk, cinnamon or sugar depending on preparation.",
    allergens: "Gluten, egg, milk.",
    sizes: "Regular serving.",
    image: "",
    accent: "#9aaa7e"
  },
  {
    category: "Breakfast",
    name: "Greek Yogurt",
    price: "",
    description: "Greek yogurt breakfast bowl.",
    ingredients: "Greek yogurt. Toppings may vary.",
    allergens: "Milk. Ask staff about toppings.",
    sizes: "Regular bowl.",
    image: "",
    accent: "#9aaa7e"
  }
];

const categoryOrder = [
  "Hot Coffees",
  "Cold Coffees",
  "Non Caffeine Drinks",
  "Bakeries",
  "Tea",
  "Breakfast"
];

const categoryFilters = document.querySelector("#categoryFilters");
const menuContainer = document.querySelector("#menuContainer");
const searchInput = document.querySelector("#searchInput");
const clearSearch = document.querySelector("#clearSearch");
const modal = document.querySelector("#itemModal");
const closeModal = document.querySelector("#closeModal");
const modalBackdrop = document.querySelector(".modal-backdrop");

let activeCategory = "All";
let lastFocusedElement = null;

function formatPrice(price) {
  return price ? `€${price}` : "Ask";
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

function makePlaceholder(item) {
  return `<span>${initials(item.name)}</span>`;
}

function getCategories() {
  const knownCategories = new Set(menuItems.map((item) => item.category));
  return categoryOrder.filter((category) => knownCategories.has(category));
}

function renderFilters() {
  const categories = ["All", ...getCategories()];
  categoryFilters.innerHTML = categories
    .map((category) => {
      const isActive = category === activeCategory ? " active" : "";
      return `<button class="filter-button${isActive}" type="button" data-category="${category}">${category}</button>`;
    })
    .join("");
}

function itemMatchesSearch(item, query) {
  const haystack = `${item.category} ${item.name} ${item.description} ${item.ingredients}`.toLowerCase();
  return haystack.includes(query);
}

function getFilteredItems() {
  const query = searchInput.value.trim().toLowerCase();
  return menuItems.filter((item) => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const searchMatch = !query || itemMatchesSearch(item, query);
    return categoryMatch && searchMatch;
  });
}

function renderMenu() {
  const items = getFilteredItems();
  const categories = getCategories().filter((category) => items.some((item) => item.category === category));

  if (!items.length) {
    menuContainer.innerHTML = `<p class="empty-state">No menu items match your search.</p>`;
    return;
  }

  menuContainer.innerHTML = categories
    .map((category) => {
      const categoryItems = items.filter((item) => item.category === category);
      const cards = categoryItems
        .map((item) => {
          const itemIndex = menuItems.indexOf(item);
          const imageStyle = item.image ? `background-image: url('${item.image}')` : "";
          return `
            <button class="menu-card" type="button" data-index="${itemIndex}" style="--accent: ${item.accent}">
              <span class="thumb" style="${imageStyle}">${item.image ? "" : makePlaceholder(item)}</span>
              <span class="card-copy">
                <span class="card-title">${item.name}</span>
                <span class="card-description">${item.description}</span>
              </span>
              <span class="card-price">${formatPrice(item.price)}</span>
            </button>
          `;
        })
        .join("");

      return `
        <section class="category-section">
          <div class="category-heading">
            <h2>${category}</h2>
            <p class="category-count">${categoryItems.length} items</p>
          </div>
          <div class="items-grid">${cards}</div>
        </section>
      `;
    })
    .join("");
}

function openModal(item) {
  lastFocusedElement = document.activeElement;
  document.querySelector("#modalCategory").textContent = item.category;
  document.querySelector("#modalTitle").textContent = item.name;
  document.querySelector("#modalPrice").textContent = formatPrice(item.price);
  document.querySelector("#modalDescription").textContent = item.description;
  document.querySelector("#modalIngredients").textContent = item.ingredients;
  document.querySelector("#modalAllergens").textContent = item.allergens;
  document.querySelector("#modalSizes").textContent = item.sizes;

  const modalImage = document.querySelector("#modalImage");
  modalImage.style.setProperty("--accent", item.accent);
  modalImage.style.backgroundImage = item.image ? `url('${item.image}')` : "";

  modal.hidden = false;
  document.body.classList.add("modal-open");
  closeModal.focus();
}

function closeItemModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderMenu();
});

menuContainer.addEventListener("click", (event) => {
  const card = event.target.closest(".menu-card");
  if (!card) return;
  openModal(menuItems[Number(card.dataset.index)]);
});

searchInput.addEventListener("input", renderMenu);
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  renderMenu();
});

closeModal.addEventListener("click", closeItemModal);
modalBackdrop.addEventListener("click", closeItemModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeItemModal();
  }
});

renderFilters();
renderMenu();
