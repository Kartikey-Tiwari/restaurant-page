import { mainContent } from "./nodes";
import "./style.css";
import Chef from "./chef.svg";

const infoHead = document.createElement("h2");
infoHead.textContent = "About";

const div = document.createElement("div");

const infoImage = new Image();
infoImage.src = Chef;

const infoPara = document.createElement("p");
infoPara.textContent =
  "Best food in the Muzzaffarnagar Railway Station area. Please visit for good food and a good time.";
div.append(infoImage, infoPara);

export default function home() {
  mainContent.innerHTML = "";
  mainContent.append(infoHead, div);
}
