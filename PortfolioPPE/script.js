/* Mode nuit */

const modeNuitToggle = document.getElementById('modeNuitToggle');
const iconeJour = document.getElementById('iconeJour');
const iconeNuit = document.getElementById('iconeNuit');
const body = document.body;

const isModeNuitSaved = localStorage.getItem('modeNuit') === 'true';

// Fonction pour activer le mode sombre
const activerModeNuit = () => {
  body.classList.add('modeNuit');
  localStorage.setItem('modeNuit', 'true');
  iconeJour.style.display = 'none';
  iconeNuit.style.display = 'inline';
  body.style.background = 'url("Images/black-background.jpg")';
};

// Fonction pour désactiver le mode sombre
const desactiverModeNuit = () => {
  body.classList.remove('modeNuit');
  localStorage.setItem('modeNuit', 'false');
  iconeJour.style.display = 'inline';
  iconeNuit.style.display = 'none';
  body.style.background = 'url("Images/background.jpg")';
};

if (isModeNuitSaved) {
  activerModeNuit();
} else {
  desactiverModeNuit();
}

modeNuitToggle.addEventListener('click', () => {
  if (body.classList.contains('modeNuit')) {
    desactiverModeNuit();
  } else {
    activerModeNuit();
  }
});

/* Slider */

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function updateIndicators(index) {
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
  updateIndicators(currentSlide);
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
  updateIndicators(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
  updateIndicators(currentSlide);
}

showSlide(currentSlide);
updateIndicators(currentSlide);

