
// Hide and View Sources (paragraph)

let button = document.querySelector('#source1');
let paraSource = document.querySelector('#source-text');

paraSource.style.display = 'none';

button.onclick = () => {
  if (paraSource.style.display === 'none') {
    paraSource.style.display = 'block';
  } else {
    paraSource.style.display = 'none';
  }
};

// hide and view picture sources

let button2 = document.querySelector('#att');
let picSource = document.querySelector('#attribution');

attribution.style.display = 'none';

button2.onclick = () => {
  if (attribution.style.display === 'none') {
    attribution.style.display = 'block';
  } else {
    attribution.style.display = 'none';
  }
};

// slide show: tutorial from 'Traversy Media' @  https://www.youtube.com/watch?v=4YQ4svkETS0 | code modified to fit project

let i = 0;
let images = [];
let time = 3000;


images[0] = "images/bay/bigbay.jpg";
images[1] = "images/bay/crocodile.jpg";
images[2] = "images/bay/mangroves.jpg";
images[3] = "images/bay/underwater.jpg";


function changeImg(){
	document.getElementById("coral").src = images[i];

	if(i < images.length - 1){
	  i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload=changeImg;

// end of slideshow



// Modal: Tutorial from 'Web Dev Simplified' @ https://www.youtube.com/watch?v=MBaw_6cPmAw | code modified to fit project

const openModalButtons = document.querySelectorAll('[data-modal-target1]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.querySelector('.overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget1)
    openModal(modal1)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


const openModalButtons2 = document.querySelectorAll('[data-modal-target2]')


openModalButtons2.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget2)
    openModal(modal2)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


const openModalButtons3 = document.querySelectorAll('[data-modal-target3]')


openModalButtons3.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget3)
    openModal(modal3)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


// end of modal

// play manatee video

let barraImage = document.getElementById("pic-manatee");
let video = document.querySelector('#video');
let vidSource = document.querySelector('#video-credits');
let photoCredit = document.querySelector('#manatee-credits');

video.style.display = 'none';
vidSource.style.display = 'none';


barraImage.onclick = () => {
  barraImage.style.display = 'none';
  video.style.display = 'block';
  vidSource.style.display = 'block';
  photoCredit.style.display = 'none';
  video.play();
};

video.onclick = () => {
  barraImage.style.display = 'block';
  video.style.display = 'none';
  vidSource.style.display = 'none';
  photoCredit.style.display = 'block';
};

// cycle through star fish

let star1 = document.getElementById("star1");
let star2 = document.getElementById("star2");
let star3 = document.getElementById("star3");
let credit1 = document.getElementById("credit-star1");
let credit2 = document.getElementById("credit-star2");
let credit3 = document.getElementById("credit-star3");

star2.style.display = 'none';
star3.style.display = 'none';
credit2.style.display = 'none';
credit3.style.display = 'none';

star1.onclick = () => {
  star1.style.display = 'none';
  credit1.style.display = 'none';
  star2.style.display = 'block';
  credit2.style.display = 'block';
}

star2.onclick = () => {
  star2.style.display = 'none';
  credit2.style.display = 'none';
  star3.style.display = 'block';
  credit3.style.display = 'block';
}

star3.onclick = () => {
  star3.style.display = 'none';
  credit3.style.display = 'none';
  star1.style.display = 'block';
  credit1.style.display = 'block';
}
