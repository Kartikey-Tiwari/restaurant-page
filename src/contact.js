import { mainContent } from "./nodes";

const div = document.createElement("div");
div.classList.add("contact");

const hours = document.createElement("div");
hours.classList.add("contact-card");

const hoursHead = document.createElement("h2");
hoursHead.textContent = "Hours";
const daysSpan = document.createElement("span");
daysSpan.textContent = "Mon-Sun";
const hoursSpan = document.createElement("span");
hoursSpan.textContent = "06:00 - 21:00";

hours.append(hoursHead, daysSpan, hoursSpan);

const phone = document.createElement("div");
phone.classList.add("contact-card");

const phoneHead = document.createElement("h2");
phoneHead.textContent = "Reach Us At";
const phoneNum = document.createElement("span");
phoneNum.textContent = "xxxxxxxxxx";
const email = document.createElement("span");
email.textContent = "mail@flavors.restaurant";

phone.append(phoneHead, phoneNum, email);

const location = document.createElement("div");
location.innerHTML =
  '<iframe width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Muzzaffarnagar%20Railway%20Station+(Restaurant%20location)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>';
div.append(hours, phone, location);

export default function contact() {
  mainContent.innerHTML = "";
  mainContent.appendChild(div);
}
