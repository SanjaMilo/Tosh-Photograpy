// Change bar-menu design on click and open and close Menu navbar

let barMenu = document.querySelector('.nav-bar-icon');
let leftFixed = document.querySelector('.left-fixed');
let rightFixed = document.querySelector('.right-fixed');

let isOpened = false;

function openMenu() {
	barMenu.classList.toggle('active');
	if(!isOpened) {
		leftFixed.style.opacity = "1";
		leftFixed.style.left = "0";
		rightFixed.style.opacity = "1";
		rightFixed.style.right = "0";
		isOpened = true;
	} else {
		leftFixed.style.opacity = "0";
		leftFixed.style.left = "-100%";
		rightFixed.style.opacity = "0";
		rightFixed.style.right = "-100%";
		isOpened = false;
	};
};

barMenu.addEventListener('click', openMenu);

// Menu background image change

let leftPanel = document.querySelector('.left-panel');
let links = Array.from(document.querySelectorAll('.menu-link'));
let active = document.getElementsByClassName('active-link');
let bgImages = document.querySelectorAll('.left-panel-bg-image');

function changeBackgroundImage() {
	active[0].classList.remove('active-link');
	this.classList.add('active-link');
	bgImages.forEach(elem => {
		elem.style.transform = "scale(1.1)";
		elem.style.visibility = "hidden";
		elem.style.opacity = "0";
	});
	let thisElem = this;
	Array.from(bgImages).find(function(elem) {
		if (elem.dataset.ref == thisElem.innerText.toLowerCase()) {
			elem.style.visibility = 'visible';
			elem.style.transform = "scale(1)";
			elem.style.opacity = "1";
		};		
	});
};

links.forEach(link => link.addEventListener('mouseover', changeBackgroundImage));
