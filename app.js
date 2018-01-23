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

// Randomly chooses a phrase from the 'phrases' array
function getRandomPhraseArray(arr) {
  const randomPhrase = Math.floor(Math.random() * arr.length);
  return arr[randomPhrase].split('');
}

// Adds the selected phrase to the display
function addPhraseToDisplay(arr) {
  for (i = 0; i < arr.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = arr[i];
    ul.appendChild(li);
    if (arr[i] != ' ') {
      li.classList.add('letter');
    } else {
      li.classList.add('space');
    }
  }
}

addPhraseToDisplay(phraseArray);

// Checks a letter to see if it matches a letter in the phrase
function checkLetter(letter) {
  const letters = document.querySelectorAll('.letter');
  for (i = 0; i < letters.length; i += 1) {
    if (letters[i].innerHTML === letter.innerHTML) {
      letters[i].classList.add('show');
      // const match = letters[i];
      // return match;
    }
    // else {
    //   return null;
    // }
  }
}

// Checks to see if the clicked letter matches a letter in the phrase
qwerty.addEventListener('click', (e) => {
  const clickedLetter = e.target;
  if (clickedLetter.tagName === 'BUTTON') {
    clickedLetter.classList.add('chosen');
    clickedLetter.disabled = true;
    const letterFound = checkLetter(clickedLetter);
    if (letterFound === null) {
      missed += 1;
    }
  }
  console.log(missed);
});
