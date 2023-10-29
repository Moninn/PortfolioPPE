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
  body.style.background = 'url("/PortfolioPPE/Images/black-background.jpg")';
};

// Fonction pour désactiver le mode sombre
const desactiverModeNuit = () => {
  body.classList.remove('modeNuit');
  localStorage.setItem('modeNuit', 'false');
  iconeJour.style.display = 'inline';
  iconeNuit.style.display = 'none';
  body.style.background = 'url("/PortfolioPPE/Images/background.jpg")';
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