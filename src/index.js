import "./style.css";

let imagePos = 0;

const showHideMenu = (menu, list) => {
	const menuDom = document.querySelector(menu);
	const listDom = document.querySelector(list);
	const arr = [menuDom, listDom];
	const show = () => {
		listDom.classList.toggle("show");
	};

	arr.forEach((item) => {
		item.addEventListener("mouseover", () => {
			show(item);
		});
		item.addEventListener("mouseout", () => {
			show(item);
		});
	});
};

const images = document.querySelector(".images");
const dots = document.querySelectorAll(".dot");

const activeDot = () => {
	dots.forEach((item) => {
		item.classList.remove("active");
	});
	switch (imagePos) {
		case 0:
			document.querySelector("[data-dot='0']").classList.add("active");
			break;
		case -200:
			document.querySelector("[data-dot='1']").classList.add("active");
			break;
		case -400:
			document.querySelector("[data-dot='2']").classList.add("active");
			break;
		case -600:
			document.querySelector("[data-dot='3']").classList.add("active");
			break;
		case -800:
			document.querySelector("[data-dot='4']").classList.add("active");
			break;
		default:
			break;
	}
};

const moveLeft = () => {
	if (imagePos <= -800) {
		imagePos = 0;
	} else {
		imagePos -= 200;
	}
	images.style.transform = `translate(${imagePos}px)`;
	activeDot();
};
const moveRight = () => {
	if (imagePos <= -200) {
		imagePos += 200;
	} else {
		imagePos = -800;
	}
	images.style.transform = `translate(${imagePos}px)`;
	activeDot();
};

const currentSlide = (i) => {
	switch (i) {
		case 0:
			imagePos = 0;
			break;
		case 1:
			imagePos = -200;
			break;
		case 2:
			imagePos = -400;
			break;
		case 3:
			imagePos = -600;
			break;
		case 4:
			imagePos = -800;
			break;
		default:
			imagePos = 0;
	}
	images.style.transform = `translate(${imagePos}px)`;
};

const addDotsEvent = (() => {
	dots.forEach((item, i) => {
		item.addEventListener("click", (e) => {
			dots.forEach((item) => {
				item.classList.remove("active");
			});
			currentSlide(i);
			e.currentTarget.classList.add("active");
		});
	});
})();

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
nextBtn.addEventListener("click", moveLeft);
prevBtn.addEventListener("click", moveRight);

showHideMenu(".menu", ".dropdown-container");
