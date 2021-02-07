// Read more (show more text) text in About section

let moreText = $("#more-text");
let loadMoreBtn = $("#read-more");

function showMoreText() {
	moreText.show(500);
}

loadMoreBtn.click(showMoreText);

// Contact form

let formFields = document.querySelectorAll('.form-field');
let formLabels = document.querySelectorAll('label');

function inputFieldFocused() {
	let inpName = this.getAttribute('name');

	Array.from(formLabels).find(function(label) {
		if (label.getAttribute('for') == inpName) {
			label.style.bottom = '-1.3rem';
			label.style.fontStyle = 'italic';
			label.style.color = '#000000';
		}
	});
};

formFields.forEach((el) => el.addEventListener('focus', inputFieldFocused));


// Create image card in Gallery section

let gallery = document.querySelector('.gallery-images');
let columnFirst = document.querySelector('.gal-col-1');
let columnSecond = document.querySelector('.gal-col-2');
let columnThird = document.querySelector('.gal-col-3');
let columnForth = document.querySelector('.gal-col-4');

let numArrFirst = [ 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112 ];
let numArrSecond = [ 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212 ];
let numArrThird = [ 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312 ];
let numArrForth = [ 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412 ];

function createImageCard(imgNum) {
	let imageWrapper = document.createElement('div');
	imageWrapper.classList.add('gallery-image-wrapper');
	let image = document.createElement('img');
	image.src = `./assets/images/gallery/${imgNum}.jpg`;
	imageWrapper.appendChild(image);
	let squarePlus = document.createElement('div');
	squarePlus.classList.add('icon-plus-square');
	squarePlus.setAttribute('data-src', `./assets/images/gallery/${imgNum}.jpg`);
	imageWrapper.appendChild(squarePlus);
	let plus = document.createElement('span');
	plus.innerText = '+';
	squarePlus.appendChild(plus);
	return imageWrapper;
}

function renderColumnImages (arrOfNumbers, column) {
    arrOfNumbers.forEach(function(num) {
        let imageRendered = createImageCard(num);
        column.appendChild(imageRendered);
    });
};

renderColumnImages(numArrFirst, columnFirst);
renderColumnImages(numArrSecond, columnSecond);
renderColumnImages(numArrThird, columnThird);
renderColumnImages(numArrForth, columnForth);

// Modal showing enlarged zoomed image

let squarePluses = Array.from(document.querySelectorAll('.icon-plus-square'));
let workImages = Array.from(document.querySelectorAll('.work-img'));
let modal = document.getElementById('modal');
let modalImg = document.getElementById('modalImg');
let closeX = document.querySelector('.close-x');
let isZoomed = false;

function openModalImage () {
	modal.style.display = 'block';
	modalImg.src = this.dataset.src;
	// moze i vaka ili kako podole, isto e
    // modalImg.src = this.getAttribute('data-src'); 
	modalImg.classList.add("modal-img-visible");
};

function closeModalImage () {
	modalImg.classList.remove("modal-img-visible");
	setTimeout(function() {
		modal.style.display = 'none';
	}, 700);
	zoomOutImage();
	isZoomed = false;
}

function zoomInImage () {
	modalImg.style.width = '100%'; // from auto to 100%
	modalImg.style.height = 'auto'; // from 100% to auto
	modal.style.overflowY = 'auto'; // from hidden to auto
	modalImg.style.cursor = "zoom-out"; // from zoom-in to zoom-out
};

function zoomOutImage () {
	modalImg.style.width = 'auto'; // from 100% auto to
	modalImg.style.height = '100%'; // from auto 100% to 
	modal.style.overflowY = 'hidden'; // from auto to hidden 
	modalImg.style.cursor = 'zoom-in'; // from zoom-out to zoom-in
};

function toggleZoomImage() {
	if (!isZoomed) {
		zoomInImage();
		isZoomed = true;
	} else {
		zoomOutImage();
		isZoomed = false;
	};
};

squarePluses.forEach(img => img.addEventListener('click', openModalImage));
closeX.addEventListener('click', closeModalImage);
modalImg.addEventListener('click', toggleZoomImage);

// Gallery 

let galleryWrapper = $('#gallery');
let galleryOpener = $('#gallery-opener');
let galleryCloser = $('#gallery-closer');

function showGallery() {
	galleryWrapper.show(2000);
};

function hideGallery() {
	galleryWrapper.hide(2000);
}

galleryOpener.click(showGallery);
galleryCloser.click(hideGallery);





