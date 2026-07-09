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
  },
  {
    category: "Bakeries",
    name: "Cheese pie with honey and sesame",
    price: "2.80",
    description: "Savory cheese pie finished with honey and sesame.",
    ingredients: "Pastry, cheese, honey, sesame.",
    allergens: "Gluten, milk, sesame. May contain egg.",
    sizes: "Single piece.",
    image: "",
    accent: "#b78b55"
  },
  {
    category: "Bakeries",
    name: "Leek pie",
    price: "2.80",
    description: "Freshly baked savory leek pie.",
    ingredients: "Pastry, leek, herbs.",
    allergens: "Gluten. May contain milk or egg.",
    sizes: "Single piece.",
    image: "",
    accent: "#b78b55"
  },
  {
    category: "Bakeries",
    name: "Sausage pie",
    price: "2.80",
    description: "Savory pastry filled with sausage.",
    ingredients: "Pastry, sausage.",
    allergens: "Gluten. May contain milk or egg.",
    sizes: "Single piece.",
    image: "",
    accent: "#b78b55"
  },
  {
    category: "Breakfast",
    name: "Bread with butter and honey",
    price: "3.00",
    description: "Bread served with butter and honey.",
    ingredients: "Bread, butter, honey.",
    allergens: "Gluten, milk.",
    sizes: "Regular serving.",
    image: "",
    accent: "#9aaa7e"
  },
  {
    category: "Breakfast",
    name: "Toast",
    price: "3.00",
    description: "Simple toasted sandwich.",
    ingredients: "Toast bread, cheese and/or cold cuts depending on availability.",
    allergens: "Gluten, milk. May contain egg.",
    sizes: "Single toast.",
    image: "",
    accent: "#9aaa7e"
  },
  {
    category: "Ice Creams",
    name: "Vanilla",
    price: "2.50+",
    description: "Classic vanilla ice cream.",
    ingredients: "Ice cream base, vanilla flavor.",
    allergens: "Milk. May contain egg and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#d8c89b"
  },
  {
    category: "Ice Creams",
    name: "Chocolate",
    price: "2.50+",
    description: "Rich chocolate ice cream.",
    ingredients: "Ice cream base, chocolate.",
    allergens: "Milk. May contain egg, soy, and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#7b4f3b"
  },
  {
    category: "Ice Creams",
    name: "Chocolate with cherry",
    price: "2.50+",
    description: "Chocolate ice cream with cherry flavor.",
    ingredients: "Ice cream base, chocolate, cherry.",
    allergens: "Milk. May contain egg, soy, and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#8b3d48"
  },
  {
    category: "Ice Creams",
    name: "Stracciatella",
    price: "2.50+",
    description: "Creamy stracciatella ice cream with chocolate pieces.",
    ingredients: "Ice cream base, chocolate pieces.",
    allergens: "Milk. May contain egg, soy, and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#d6d0c1"
  },
  {
    category: "Ice Creams",
    name: "Yogurt with honey",
    price: "2.50+",
    description: "Yogurt-style ice cream with honey.",
    ingredients: "Yogurt ice cream, honey.",
    allergens: "Milk. May contain egg and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#d9b35b"
  },
  {
    category: "Ice Creams",
    name: "Yogurt with cherry",
    price: "2.50+",
    description: "Yogurt-style ice cream with cherry.",
    ingredients: "Yogurt ice cream, cherry.",
    allergens: "Milk. May contain egg and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#b85668"
  },
  {
    category: "Ice Creams",
    name: "Yogurt with strawberry",
    price: "2.50+",
    description: "Yogurt-style ice cream with strawberry.",
    ingredients: "Yogurt ice cream, strawberry.",
    allergens: "Milk. May contain egg and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#c75d6e"
  },
  {
    category: "Ice Creams",
    name: "Mastic ice cream",
    price: "2.50+",
    description: "Traditional mastic-flavored ice cream.",
    ingredients: "Ice cream base, mastic flavor.",
    allergens: "Milk. May contain egg and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#c7d1b0"
  },
  {
    category: "Ice Creams",
    name: "Tutti frutti",
    price: "2.50+",
    description: "Fruit-flavored ice cream.",
    ingredients: "Ice cream base, mixed fruit flavor.",
    allergens: "Milk. May contain egg and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#d47d62"
  },
  {
    category: "Ice Creams",
    name: "Cookies",
    price: "2.50+",
    description: "Cookie-flavored ice cream.",
    ingredients: "Ice cream base, cookie pieces.",
    allergens: "Milk, gluten. May contain egg, soy, and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#9f7b59"
  },
  {
    category: "Ice Creams",
    name: "Caramel",
    price: "2.50+",
    description: "Smooth caramel ice cream.",
    ingredients: "Ice cream base, caramel flavor.",
    allergens: "Milk. May contain egg and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#b9864e"
  },
  {
    category: "Ice Creams",
    name: "Strawberry",
    price: "2.50+",
    description: "Strawberry ice cream.",
    ingredients: "Ice cream base, strawberry flavor.",
    allergens: "Milk. May contain egg and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#c95f6f"
  },
  {
    category: "Ice Creams",
    name: "Pistachio",
    price: "2.50+",
    description: "Pistachio ice cream.",
    ingredients: "Ice cream base, pistachio flavor.",
    allergens: "Milk, nuts. May contain egg.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#8aa46d"
  },
  {
    category: "Ice Creams",
    name: "Chocobanana",
    price: "2.50+",
    description: "Chocolate and banana ice cream.",
    ingredients: "Ice cream base, chocolate, banana flavor.",
    allergens: "Milk. May contain egg, soy, and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#b89a4c"
  },
  {
    category: "Ice Creams",
    name: "Bubble gum",
    price: "2.50+",
    description: "Bubble gum flavored ice cream.",
    ingredients: "Ice cream base, bubble gum flavor.",
    allergens: "Milk. May contain egg and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#77a8c9"
  },
  {
    category: "Ice Creams",
    name: "Ferrero",
    price: "2.50+",
    description: "Chocolate-hazelnut style ice cream.",
    ingredients: "Ice cream base, chocolate, hazelnut flavor.",
    allergens: "Milk, nuts. May contain egg and soy.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#8a5b3c"
  },
  {
    category: "Ice Creams",
    name: "Mocha",
    price: "2.50+",
    description: "Coffee-style mocha ice cream.",
    ingredients: "Ice cream base, coffee flavor.",
    allergens: "Milk. May contain egg and nuts.",
    sizes: "1 scoop €2.50, 2 scoops €4.50, 3 scoops €6.00.",
    image: "",
    accent: "#7d6250"
  },
  {
    category: "Cakes",
    name: "Vanilla cake",
    price: "4.00",
    description: "Vanilla pastry cake.",
    ingredients: "Cake sponge, vanilla cream.",
    allergens: "Gluten, milk, egg. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#c9a46c"
  },
  {
    category: "Cakes",
    name: "Serano",
    price: "4.00",
    description: "Serano pastry cake.",
    ingredients: "Cake sponge, cream.",
    allergens: "Gluten, milk, egg. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#9b6a56"
  },
  {
    category: "Cakes",
    name: "Lacta",
    price: "4.00",
    description: "Chocolate-style Lacta cake.",
    ingredients: "Cake sponge, chocolate cream.",
    allergens: "Gluten, milk, egg, soy. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#8f5948"
  },
  {
    category: "Cakes",
    name: "Ferrero cake",
    price: "4.00",
    description: "Chocolate-hazelnut style cake.",
    ingredients: "Cake sponge, chocolate, hazelnut cream.",
    allergens: "Gluten, milk, egg, nuts, soy.",
    sizes: "Single piece.",
    image: "",
    accent: "#8a5b3c"
  },
  {
    category: "Cakes",
    name: "Strawberry cake",
    price: "4.00",
    description: "Strawberry pastry cake.",
    ingredients: "Cake sponge, strawberry cream.",
    allergens: "Gluten, milk, egg. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#c95f6f"
  },
  {
    category: "Cakes",
    name: "Caramel cake",
    price: "4.00",
    description: "Caramel pastry cake.",
    ingredients: "Cake sponge, caramel cream.",
    allergens: "Gluten, milk, egg. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#b9864e"
  },
  {
    category: "Cakes",
    name: "Cheesecake",
    price: "4.00",
    description: "Creamy cheesecake dessert.",
    ingredients: "Cream cheese, biscuit base, topping.",
    allergens: "Gluten, milk, egg. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#c5aa82"
  },
  {
    category: "Cakes",
    name: "Chocolate pie",
    price: "4.00",
    description: "Rich chocolate pie dessert.",
    ingredients: "Chocolate cake, syrup or cream.",
    allergens: "Gluten, milk, egg, soy. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#7b4f3b"
  },
  {
    category: "Cakes",
    name: "Millefeuille",
    price: "4.00",
    description: "Layered pastry with cream.",
    ingredients: "Puff pastry, pastry cream.",
    allergens: "Gluten, milk, egg.",
    sizes: "Single piece.",
    image: "",
    accent: "#d1b98b"
  },
  {
    category: "Cakes",
    name: "Tiramisu",
    price: "4.00",
    description: "Classic tiramisu-style dessert.",
    ingredients: "Cream, coffee-soaked layers, cocoa.",
    allergens: "Gluten, milk, egg. May contain alcohol.",
    sizes: "Single piece.",
    image: "",
    accent: "#9d7b60"
  },
  {
    category: "Cakes",
    name: "Mouse",
    price: "4.00",
    description: "Mouse-shaped pastry cake.",
    ingredients: "Cake sponge, cream, chocolate.",
    allergens: "Gluten, milk, egg, soy. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#8b6f55"
  },
  {
    category: "Cakes",
    name: "Black forest",
    price: "4.00",
    description: "Chocolate and cherry-style Black Forest cake.",
    ingredients: "Chocolate sponge, cream, cherry.",
    allergens: "Gluten, milk, egg. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#6f3d47"
  },
  {
    category: "Cakes",
    name: "Banoffee",
    price: "4.00",
    description: "Banana and caramel dessert.",
    ingredients: "Biscuit base, banana, caramel cream.",
    allergens: "Gluten, milk. May contain egg and nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#b89455"
  },
  {
    category: "Cakes",
    name: "Profiterole",
    price: "4.00",
    description: "Cream puffs with chocolate.",
    ingredients: "Choux pastry, cream, chocolate.",
    allergens: "Gluten, milk, egg, soy. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#7b4f3b"
  },
  {
    category: "Cakes",
    name: "Chocolate mousse",
    price: "4.00",
    description: "Light chocolate mousse dessert.",
    ingredients: "Chocolate mousse, cream.",
    allergens: "Milk, egg, soy. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#75503f"
  },
  {
    category: "Cakes",
    name: "Strawberry mousse",
    price: "4.00",
    description: "Light strawberry mousse dessert.",
    ingredients: "Strawberry mousse, cream.",
    allergens: "Milk, egg. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#c95f6f"
  },
  {
    category: "Cakes",
    name: "Lila Pause",
    price: "4.00",
    description: "Chocolate-style Lila Pause dessert.",
    ingredients: "Cake sponge, chocolate cream.",
    allergens: "Gluten, milk, egg, soy. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#8060a8"
  },
  {
    category: "Cakes",
    name: "Cake with ice cream",
    price: "5.50",
    description: "Cake served with ice cream.",
    ingredients: "Cake, ice cream.",
    allergens: "Gluten, milk, egg. May contain nuts.",
    sizes: "Single serving.",
    image: "",
    accent: "#9f7b59"
  },
  {
    category: "Syrup Cakes",
    name: "Galaktoboureko",
    price: "3.50",
    description: "Traditional syrup dessert with custard.",
    ingredients: "Phyllo pastry, custard, syrup.",
    allergens: "Gluten, milk, egg.",
    sizes: "Single piece.",
    image: "",
    accent: "#c88d4f"
  },
  {
    category: "Syrup Cakes",
    name: "Baklava",
    price: "3.50",
    description: "Layered syrup pastry with nuts.",
    ingredients: "Phyllo pastry, nuts, syrup.",
    allergens: "Gluten, nuts. May contain milk.",
    sizes: "Single piece.",
    image: "",
    accent: "#a87945"
  },
  {
    category: "Syrup Cakes",
    name: "Kataifi",
    price: "3.50",
    description: "Traditional shredded phyllo syrup dessert.",
    ingredients: "Kataifi pastry, syrup, nuts.",
    allergens: "Gluten, nuts. May contain milk.",
    sizes: "Single piece.",
    image: "",
    accent: "#b98852"
  },
  {
    category: "Syrup Cakes",
    name: "Orange pie",
    price: "3.50",
    description: "Orange syrup pie dessert.",
    ingredients: "Orange, pastry or cake base, syrup.",
    allergens: "Gluten, milk, egg. May contain nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#d18a3a"
  },
  {
    category: "Syrup Cakes",
    name: "Walnut pie",
    price: "3.50",
    description: "Walnut syrup cake.",
    ingredients: "Walnuts, cake base, syrup.",
    allergens: "Gluten, nuts, egg. May contain milk.",
    sizes: "Single piece.",
    image: "",
    accent: "#8a5b3c"
  },
  {
    category: "Syrup Cakes",
    name: "Ekmek with kataifi",
    price: "3.50",
    description: "Ekmek dessert with kataifi pastry.",
    ingredients: "Kataifi pastry, cream, syrup.",
    allergens: "Gluten, milk, egg, nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#b9864e"
  },
  {
    category: "Syrup Cakes",
    name: "Ekmek with walnut pie",
    price: "3.50",
    description: "Ekmek dessert with walnut pie.",
    ingredients: "Walnut pie, cream, syrup.",
    allergens: "Gluten, milk, egg, nuts.",
    sizes: "Single piece.",
    image: "",
    accent: "#9d6b50"
  },
  {
    category: "Syrup Cakes",
    name: "Syrup cake with ice cream",
    price: "5.50",
    description: "Syrup dessert served with ice cream.",
    ingredients: "Syrup cake, ice cream.",
    allergens: "Gluten, milk, egg. May contain nuts.",
    sizes: "Single serving.",
    image: "",
    accent: "#a87945"
  },
  {
    category: "Drinks",
    name: "Beer Amstel or Heineken",
    price: "2.50",
    description: "Bottle or can of Amstel or Heineken beer.",
    ingredients: "Beer.",
    allergens: "Gluten.",
    sizes: "Single bottle or can.",
    image: "",
    accent: "#b99a4f"
  },
  {
    category: "Drinks",
    name: "Ouzo",
    price: "3.00",
    description: "Traditional Greek ouzo.",
    ingredients: "Ouzo.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Single serving.",
    image: "",
    accent: "#7e9fb0"
  },
  {
    category: "Drinks",
    name: "Tsipouro",
    price: "3.00",
    description: "Traditional Greek tsipouro.",
    ingredients: "Tsipouro.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Single serving.",
    image: "",
    accent: "#8fa3a7"
  },
  {
    category: "Drinks",
    name: "Cognac 3 stars",
    price: "6.00",
    description: "Cognac 3 stars.",
    ingredients: "Cognac.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Single serving.",
    image: "",
    accent: "#9b6a42"
  },
  {
    category: "Drinks",
    name: "Cognac 5 stars",
    price: "6.00",
    description: "Cognac 5 stars.",
    ingredients: "Cognac.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Single serving.",
    image: "",
    accent: "#9b6a42"
  },
  {
    category: "Drinks",
    name: "Cognac 7 stars",
    price: "6.00",
    description: "Cognac 7 stars.",
    ingredients: "Cognac.",
    allergens: "No common allergens. Ask staff about cross-contact.",
    sizes: "Single serving.",
    image: "",
    accent: "#9b6a42"
  },
  {
    category: "Drinks",
    name: "Whiskey, martini or bacardi",
    price: "7.00",
    description: "Choice of whiskey, martini, or bacardi.",
    ingredients: "Selected alcoholic drink.",
    allergens: "Ask staff for brand-specific allergen information.",
    sizes: "Single serving.",
    image: "",
    accent: "#7b6254"
  },
  {
    category: "Soft Drinks",
    name: "Ikaria's Orangeade",
    price: "2.00",
    description: "Local orangeade from Ikaria.",
    ingredients: "Orangeade.",
    allergens: "Ask staff for brand-specific allergen information.",
    sizes: "Single bottle.",
    image: "",
    accent: "#d18a3a"
  },
  {
    category: "Soft Drinks",
    name: "Ikaria's Lemonade",
    price: "2.00",
    description: "Local lemonade from Ikaria.",
    ingredients: "Lemonade.",
    allergens: "Ask staff for brand-specific allergen information.",
    sizes: "Single bottle.",
    image: "",
    accent: "#c7b94d"
  },
  {
    category: "Soft Drinks",
    name: "Ikaria's Sour cherry juice",
    price: "2.00",
    description: "Local sour cherry juice from Ikaria.",
    ingredients: "Sour cherry juice.",
    allergens: "Ask staff for brand-specific allergen information.",
    sizes: "Single bottle.",
    image: "",
    accent: "#9d2f45"
  },
  {
    category: "Soft Drinks",
    name: "Coca cola",
    price: "2.00",
    description: "Coca cola soft drink.",
    ingredients: "Soft drink.",
    allergens: "Ask staff for brand-specific allergen information.",
    sizes: "Single bottle or can.",
    image: "",
    accent: "#9d2f45"
  },
  {
    category: "Soft Drinks",
    name: "Green cola",
    price: "2.00",
    description: "Green cola soft drink.",
    ingredients: "Soft drink.",
    allergens: "Ask staff for brand-specific allergen information.",
    sizes: "Single bottle or can.",
    image: "",
    accent: "#6f9a81"
  },
  {
    category: "Soft Drinks",
    name: "Sprite",
    price: "2.00",
    description: "Sprite soft drink.",
    ingredients: "Soft drink.",
    allergens: "Ask staff for brand-specific allergen information.",
    sizes: "Single bottle or can.",
    image: "",
    accent: "#6f9a81"
  },
  {
    category: "Soft Drinks",
    name: "Fanta orangeade",
    price: "2.00",
    description: "Fanta orangeade soft drink.",
    ingredients: "Soft drink.",
    allergens: "Ask staff for brand-specific allergen information.",
    sizes: "Single bottle or can.",
    image: "",
    accent: "#d18a3a"
  },
  {
    category: "Soft Drinks",
    name: "Fanta lemonade",
    price: "2.00",
    description: "Fanta lemonade soft drink.",
    ingredients: "Soft drink.",
    allergens: "Ask staff for brand-specific allergen information.",
    sizes: "Single bottle or can.",
    image: "",
    accent: "#c7b94d"
  },
  {
    category: "Soft Drinks",
    name: "Water 0.5 L",
    price: "0.50",
    description: "Small bottled water.",
    ingredients: "Water.",
    allergens: "No common allergens.",
    sizes: "0.5 L bottle.",
    image: "",
    accent: "#7e9fb0"
  },
  {
    category: "Soft Drinks",
    name: "Water 1.5 L",
    price: "1.00",
    description: "Large bottled water.",
    ingredients: "Water.",
    allergens: "No common allergens.",
    sizes: "1.5 L bottle.",
    image: "",
    accent: "#7e9fb0"
  }
];

const categoryOrder = [
  "Hot Coffees",
  "Cold Coffees",
  "Non Caffeine Drinks",
  "Bakeries",
  "Tea",
  "Breakfast",
  "Ice Creams",
  "Cakes",
  "Syrup Cakes",
  "Drinks",
  "Soft Drinks"
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
