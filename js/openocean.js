
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


images[0] = "images/openocean/school.jpg";
images[1] = "images/openocean/grouper.jpg";
images[2] = "images/openocean/bigfish.jpg";
images[3] = "images/openocean/grass.jpg";


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

// make graph appear

let tunaImage = document.getElementById("pic-tuna");
let graph = document.querySelector('#graph');
let graphSource = document.querySelector('#graph-source');
let removeCredit = document.querySelector('#remove-credits');
let scroll = document.querySelector('#modal-par');

graph.style.display = 'none';
graphSource.style.display = 'none';

tunaImage.onclick = () => {
  tunaImage.style.display = 'none';
  graph.style.display = 'block';
  graphSource.style.display = 'block';
  removeCredit.style.display = 'none';
  scroll.style.height = '150px';
}

graph.ondblclick = () => {
  tunaImage.style.display = 'block';
  graph.style.display = 'none';
  graphSource.style.display = 'none';
  removeCredit.style.display = 'block';
  scroll.style.height = 'auto';
}

// highcharts graph


Highcharts.chart('graph', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Global Yellowfin Tuna Catch'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: [
      '2012',
      '2014',
      '2016',
      '2018'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Catch (million metric tons)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} million mt</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Yellowfin Tuna',
    data: [1.3, 1.4, 1.5, 1.5]

  }]
});

// sword fish quiz

let sword = document.querySelector('#sword');
let mainQuiz = document.querySelector('#quiz0');
let openQuiz = document.querySelector('#additional');
let swordCredits = document.querySelector('#sword-credits');


mainQuiz.style.display = 'none';

openQuiz.onclick = () => {
    mainQuiz.style.display = 'block';
    sword.style.display = 'none';
    swordCredits.style.display = 'none';
};

let answer1 = document.querySelector('#answer1');
let answer2 = document.querySelector('#answer2');
let eatY = document.querySelector('#eaty');
let eatN = document.querySelector('#eatn');

let fast1 = document.querySelector('#fast1');
let fast2 = document.querySelector('#fast2');
let fast3 = document.querySelector('#fast3');

answer1.style.display = 'none';
answer2.style.display = 'none';

eatY.onclick = () => {
  eatY.style.background = '#089e00';
  answer1.style.display = 'block'
  if (answer2 === 'block') {
    answer2.style.display = 'none';
  } else { answer2.style.display = 'none';
  }
};

eatN.onclick = () => {
  eatN.style.background = '#cc0634';
};

fast1.onclick = () => {
  fast1.style.background = '#089e00';
  answer2.style.display = 'block'
  if (answer1 === 'block') {
    answer1.style.display = 'none';
  } else { answer1.style.display = 'none';
  }
};

fast2.onclick = () => {
  fast2.style.background = '#cc0634';
};

fast3.onclick = () => {
  fast3.style.background = '#cc0634';
};
