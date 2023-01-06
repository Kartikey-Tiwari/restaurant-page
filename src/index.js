import "./style.css"
import home from "./home"
import {navBtns, mainContent} from "./nodes"

navBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    navBtns.forEach((Btn) => {
      Btn.classList.remove('active');
    });
    btn.classList.add('active');
  });
});
