const menu = [
  {
    id: 1,
    title: "Latte",
    category: "Coffee-Espresso",
    price: 5.25,
    img: "images/menu-item1.jpg",
    desc: "Latte mixes rich espresso with creamy milk for a smooth taste. It’s topped with foam and is great any time. Enjoy it plain or with flavors like vanilla or caramel",
  },
  {
    id: 2,
    title: "Caramel Machiato",
    category: "Coffee-Espresso",
    price: 5.45,
    img: "images/menu-item2.jpg",
    desc: "Caramel macchiato features rich espresso layered with creamy milk and sweet caramel. It's topped with a drizzle of caramel sauce for an extra treat. Enjoy it hot or iced for a delicious pick-me-up!",
  },

  {
    id: 3,
    title: "Americano",
    category: "Coffee-Espresso",
    price: 4.15,
    img: "images/menu-item3.jpg",
    desc: "Americano: A bold blend of rich espresso diluted with hot water, creating a smooth and full-bodied flavor. Enjoy it black or customize it with cream and sugar.",
  },

  {
    id: 4,
    title: "Frapp",
    category: "Coffee-Espresso",
    price: 5.35,
    img: "images/menu-item4.jpg",
    desc: "Topped with whipped cream and drizzled with syrup, they come in various flavors like mocha, caramel, and vanilla. Perfect for cooling down on warm days, each sip is a delicious pick-me-up!",
  },

  {
    id: 5,
    title: "Mocha",
    category: "Coffee-Espresso",
    price: 5.65,
    img: "images/menu-item5.jpg",
    desc: "Mocha is a rich blend of espresso, steamed milk, and chocolate syrup, topped with whipped cream. It’s a deliciously sweet and creamy coffee treat, perfect for chocolate lovers.",
  },

  {
    id: 6,
    title: "Espresso",
    category: "Coffee-Espresso",
    price: 2.75,
    img: "images/menu-item6.jpg",
    desc: "Bold and concentrated coffee made by brewing finely-ground beans with hot water, delivering a rich flavor and smooth texture perfect for a quick pick-me-up.",
  },
  {
    id: 7,
    title: "Pour Over Coffee",
    category: "Coffee-Espresso",
    price: 2.90,
    img: "images/menu-item7.jpg",
    desc: "Hot water is carefully poured over the grounds, allowing for precise extraction and a clean, smooth cup. Enjoy its bright and aromatic profile, perfect for coffee enthusiasts!",
  },
  {
    id: 8,
    title: "Purple Rain Latte",
    category: "Coffee-Espresso",
    price: 5.45,
    img: "images/menu-item8.jpg",
    desc: "The Purple Rain Latte is a vibrant blend of creamy steamed milk and rich espresso, infused with butterfly pea flower for a beautiful purple hue. Topped with a hint of vanilla and a sprinkle of edible flowers, it offers a unique and delightful taste experience.",
  },
  {
    id: 9,
    title: "Impact Cold Brew Draft Coffee",
    category: "Coffee-Espresso",
    price: 5.50,
    img: "images/menu-item9.jpg",
    desc: "Impact Cold Brew is a smooth and refreshing coffee made by steeping coarsely ground beans in cold water for an extended period. This method creates a low-acidity brew with rich, bold flavors.",
  },
  {
    id: 10,
    title: "Non Dairy Alternatives",
    category: "Coffee-Espresso",
    price: 0.95,
    img: "images/menu-item10.jpg",
    desc: "You can choose one of these dairy alternatives with extra charge: Oat milk, Soy milk, or Coconut.",
  },
  {
    id: 11,
    title: "Flavor Shot",
    category: "Coffee-Espresso",
    price: 0.65,
    img: "images/menu-item11.jpg",
    desc: "Add flavor options for a freshing experience: Vanilla, Caramel, Irish Cream, Hazelnut, Lavender, Raspberry & Sugar Free Vanilla.",
  },
  {
    id: 12,
    title: "Moscow Fog",
    category: "Tea-Specialties",
    price: 5.45,
    img: "images/menu-item12.jpg",
    desc: "Earl Grey Tea with steamed milk, honey, and vanilla.",
  },
  {
    id: 13,
    title: "Chai",
    category: "Tea-Specialties",
    price: 5.25,
    img: "images/menu-item13.jpg",
    desc: "Our own special blend of tea and spice, preparing for a delightful experience.",
  },
  {
    id: 14,
    title: "Purple Fog",
    category: "Tea-Specialties",
    price: 5.45,
    img: "images/menu-item14.jpg",
    desc: "This calming tea offers a gentle aroma and a refreshing taste, making it the perfect companion for your favorite baked goods. Enjoy it hot or iced for a delightful experience!",
  },
  {
    id: 15,
    title: "Chaider",
    category: "Tea-Specialties",
    price: 5.15,
    img: "images/menu-item15.jpg",
    desc: "Our own special Chai Tea blended with Apple Cider.",
  },
  {
    id: 16,
    title: "Hot Chocolate",
    category: "Tea-Specialties",
    price: 4.95,
    img: "images/menu-item16.jpg",
    desc: "A rich and creamy beverage made from melted chocolate or cocoa powder, blended with warm milk and often topped with whipped cream or marshmallows for a delightful treat.",
  },
  {
    id: 17,
    title: "Local Ice Cream",
    category: "Frozen-Delights",
    price: 3.95,
    img: "images/menu-item17.jpg",
    desc: "Our ice cream is creamy and rich, available in classic flavors like vanilla and chocolate. Each scoop is smooth and refreshing, perfect on its own or as a topping for baked treats. Enjoy a sweet, cool delight any time!",
  },
  {
    id: 18,
    title: "Shakes",
    category: "Frozen-Delights",
    price: 4.95,
    img: "images/menu-item18.jpg",
    desc: "Our shakes are thick and creamy, made with premium ice cream and blended to perfection in delicious flavors like chocolate, vanilla, and strawberry.",
  },
  {
    id: 19,
    title: "Smoothie",
    category: "Frozen-Delights",
    price: 4.35,
    img: "images/menu-item19.jpg",
    desc: "Local yogurt blended with your choice of: Strawberries, Mango, Blueberries, Banana or Spinach.",
  },
  {
    id: 20,
    title: "Flavored Croissant",
    category: "Bakery",
    price: 4.50,
    img: "images/menu-item20.jpg",
    desc: "Flavored croissants are flaky, buttery pastries filled with delightful options like almond, chocolate, or raspberry. Each bite is a perfect blend of rich flavor and soft texture, making them a delicious treat for any time of day!",
  },
  {
    id: 21,
    title: "Bagel w/Cream cheese",
    category: "Bakery",
    price: 4.05,
    img: "images/menu-item21.jpg",
    desc: "Featuring a freshly baked, chewy bagel spread generously with smooth, creamy cheese. Enjoy it plain or choose from a variety of flavors like chive, strawberry, or everything for an added twist!",
  },
  {
    id: 22,
    title: "Sunnyside Cinnamon Roll",
    category: "Bakery",
    price: 6.05,
    img: "images/menu-item22.jpg",
    desc: "A warm, fluffy pastry swirled with aromatic cinnamon and brown sugar, then topped with a sweet cream cheese glaze. Each bite offers a delightful mix of soft dough and rich flavor, perfect for a cozy treat any time of day.",
  },
  {
    id: 23,
    title: "Nordic Muffin",
    category: "Bakery",
    price: 4.35,
    img: "images/menu-item23.jpg",
    desc: "Our muffins are freshly baked and bursting with flavor, featuring options like blueberry, chocolate chip, and banana nut. Each muffin is soft and moist, making it a perfect snack or breakfast treat.",
  },
  {
    id: 24,
    title: "Scone",
    category: "Bakery",
    price: 3.95,
    img: "images/menu-item24.jpg",
    desc: "Our scones are tender, flaky pastries, perfect for pairing with tea or coffee. Available in flavors like cranberry-orange, blueberry, and classic buttermilk, each scone is lightly sweetened and can be enjoyed plain or with a spread of clotted cream or jam. ",
  },
  {
    id: 25,
    title: "Sweet Crepe",
    category: "Bakery",
    price: 7.15,
    img: "images/menu-item25.jpg",
    desc: "Sweet crepes are perfect for a sweet treat any time of day, they’re light, fluffy, and utterly delightful. Enjoy them folded or rolled for a tasty experience!",
  },
  {
    id: 26,
    title: "Matcha Latte",
    category: "Coffee-Espresso",
    price: 5.45,
    img: "images/menu-item26.jpg",
    desc: "Our matcha latte combines smooth, earthy matcha green tea with frothy steamed milk for a creamy and vibrant beverage. Enjoy it hot or iced for a refreshing boost!",
  },
]

const menuContainer = document.querySelector(".menu-container");
const buttonContainer = document.querySelector(".btn-container");

//load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article>
      <img src=${item.img} class="photo" alt="menu item">
      <div class="item-info">
        <header class="item-name-price">
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="description">
          ${item.desc}
        </p>
      </div>
    </article>`;
  });
  displayMenu = displayMenu.join('');
  menuContainer.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values
  },
    ['All']
  );
  const categoryBtns = categories.map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join("");
  buttonContainer.innerHTML = categoryBtns;


  const filterBtns = document.querySelectorAll(".filter-btn");
  //filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category)
          return menuItem;
      });
      if (category === "All") displayMenuItems(menu);
      else displayMenuItems(menuCategory);
    });
  });
};
