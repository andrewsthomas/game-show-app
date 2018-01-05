const overlay = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');
const phrase = document.getElementById('phrase');
const qwerty = document.getElementById('qwerty');
const ul = document.querySelector('#phrase ul');
const phrases = ['Hit the books', 'Go cold turkey', 'Rule of thumb', 'Raining cats and dogs', 'Cut to the chase'];
const missed = 0;

startButton.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});

function getRandomPhraseArray(arr){
  const randomPhrase = Math.floor(Math.random() * arr.length);
  return arr[randomPhrase].split('');
}

function addPhraseToDisplay(arr){
  for (i = 0; i <= arr.length; i += 0) {
    const li = document.createElement('arr[i]');
    ul.appendChild(li);
  }
}
