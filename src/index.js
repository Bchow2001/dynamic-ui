import "./style.css";
import { showHideMenu } from "menu-package";
import { format } from "date-fns";

const closeMenu = document.querySelector(".close-dd");

closeMenu.addEventListener("click", () => {
	const ddContainer = document.querySelector(".dropdown-container");
	ddContainer.style.display = "none";
});
showHideMenu(".menu", ".dropdown-container");
