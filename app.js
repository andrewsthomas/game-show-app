const overlay = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');
const phrase = document.getElementById('phrase');
const qwerty = document.getElementById('qwerty');
const ul = document.querySelector('#phrase ul');
const phrases = ['hit the books', 'go cold turkey', 'rule of thumb', 'raining cats and dogs', 'cut to the chase'];
const phraseArray = getRandomPhraseArray(phrases);
const missed = 0;

startButton.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});

function getRandomPhraseArray(arr){
  const randomPhrase = Math.floor(Math.random() * arr.length);
  return arr[randomPhrase].split('');
}

function addPhraseToDisplay(arr){
  for (i = 0; i <= arr.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = arr[i];
    ul.appendChild(li);
    if (arr[i] != ' ') {
      li.className = 'letter';
    } else {
      li.className = 'space';
    }
  }
}

addPhraseToDisplay(phraseArray);

function checkLetter(letter) {
  const letters = document.querySelectorAll('.letter');
  for (i = 0; i <= letters.length; i += 1) {
    if (letters[i].innerHTML === letter.innerHTML) {
      letters[i].classList.add('show');
      const match = letters[i];
      return match;
    } else {
      return null;
    }
  }
}

qwerty.addEventListener('click', (e) => {
  const clickedLetter = event.target;
  if (clickedLetter.tagName === 'BUTTON') {
    clickedLetter.className = 'chosen';
    clickedLetter.disabled = true;
    const letterFound = checkLetter(clickedLetter);
  }
});
