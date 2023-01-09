import { mainContent } from "./nodes";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

const cards = document.createElement("div");
cards.classList.add("cards");

const dishes = [
  { name: "Samosa", price: "Rs. 5", quantity: "1 piece(60g)" },
  { name: "Momo", price: "Rs. 40", quantity: "6 pieces(180g)" },
  { name: "Patties", price: "Rs. 20", quantity: "1 piece(60g)" },
  { name: "Chowmein", price: "Rs. 40", quantity: "250g" },
  { name: "Spring Rolls", price: "Rs. 40", quantity: "200g" },
  { name: "Burgir", price: "Rs. 50", quantity: "1 piece(150g)" },
];

let alt = false;
for (let i = 0; i < dishes.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  const div = document.createElement("div");

  const dishName = document.createElement("h3");
  dishName.textContent = dishes[i].name;

  const dishImage = new Image();
  dishImage.src = images[`${dishes[i].name}.png`];

  const dishPrice = document.createElement("span");
  dishPrice.textContent = dishes[i].price;

  const quantity = document.createElement("span");
  quantity.textContent = dishes[i].quantity;

  div.append(dishName, dishPrice, quantity);
  card.append(dishImage, div);
  if (alt === true) {
    card.style.flexDirection = "row-reverse";
  }
  alt = !alt;
  cards.append(card);
}

export default function menu() {
  mainContent.innerHTML = "";
  mainContent.append(cards);
}
