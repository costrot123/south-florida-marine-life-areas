
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

// slide show: tutorial from 'Traversy Media' @  https://www.youtube.com/watch?v=4YQ4svkETS0 - code modified to fit project

let i = 0;
let images = [];
let time = 3000;


images[0] = "images/keywest/coralreef.jpg";
images[1] = "images/keywest/sunset.jpg"
images[2] = "images/keywest/turtle.jpg"
images[3] = "images/keywest/fish.jpg"


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



// Modal: Tutorial from 'Web Dev Simplified' @ https://www.youtube.com/watch?v=MBaw_6cPmAw - code modified to fit project

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


const openModalButtons4 = document.querySelectorAll('[data-modal-target4]')


openModalButtons4.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget4)
    openModal(modal4)
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

// dolphin sound

let dolphImage = document.getElementById("pic-dolphin");

dolphImage.onclick = () => {
  let audio = document.getElementById("audio-dolph");
  audio.play();
};

// let video play

let barraImage = document.getElementById("remove-photo");
let video = document.querySelector('#video');
let vidSource = document.querySelector('#video-credits');
let photoCredit = document.querySelector('#barr-credits');

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
