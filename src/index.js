import "./style.css";
import home from "./home";
import menu from "./menu";
import { navBtns } from "./nodes";

navBtns[0].classList.add("active");
navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    navBtns.forEach((Btn) => {
      Btn.classList.remove("active");
    });
    btn.classList.add("active");

    if (btn.textContent === "Home") {
      home();
    } else if (btn.textContent === "Menu") {
      menu();
    } else {
      contact();
    }
  });
});

home();
