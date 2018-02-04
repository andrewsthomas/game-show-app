const overlay = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');
const phrase = document.getElementById('phrase');
const qwerty = document.getElementById('qwerty');
const ul = document.querySelector('#phrase ul');
const phrases = ['Hit the books', 'Go cold turkey', 'Rule of thumb', 'Raining cats and dogs', 'Cut to the chase'];
const phraseArray = getRandomPhraseAsArray(phrases);
let missed = 0;

// Hides the start screen overlay when button is clicked
startButton.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});

// Randomly chooses a phrase from the 'phrases' array
function getRandomPhraseAsArray(arr) {
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
  let match = null;
  for (i = 0; i < letters.length; i += 1) {
    if (letters[i].textContent.toLowerCase() === letter.textContent.toLowerCase()) {
      letters[i].classList.add('show');
      match = letters[i];
    }
  }
  console.log(match);
  return match;
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

    if (missed >= 1 && missed <= 5) {
      const tries = document.querySelectorAll('.tries')[0];
      const heart = tries[tries.length - missed];
      heart.getElementsByTagName('img')[0].src = 'images/lostHeart.png';
      // const tries = document.querySelectorAll('.tries')[0];
      // tries.parentNode.removeChild(tries);
    }
  }
  checkWin();
  console.log(missed);
});

// Checks to see whether game has been won or lost
function checkWin() {
  const letters = document.querySelectorAll('.letter');
  const show = document.querySelectorAll('.show');
  const title = overlay.querySelector('.title');
  if (letters.length === show.length) {
    title.textContent = 'Congratulations, you win!';
    overlay.classList.add('win');
    overlay.style.display = '';
    addResetButton();
  } else if (missed >= 5) {
    title.textContent = 'Sorry, better luck next time!';
    overlay.classList.add('lose');
    overlay.style.display = '';
    addResetButton();
  }
}

// Adds Reset button to "success" and "failure" screens
function addResetButton() {
  const reset = document.createElement('button');
  const buttons = qwerty.querySelectorAll('button');
  const tries = document.querySelectorAll('.tries')[0];
  startButton.style.display = 'none';
  reset.textContent = 'Reset';
  reset.classList.add('.btn_reset');
  overlay.appendChild('reset');
  reset.addEventListener('click', (e) => {
    overlay.style.display = 'none';
    for (i = 0; i < buttons.length; i += 1) {
      buttons[i].classList.remove('chosen');
      buttons[i].disabled = false;
    }
    for (i = 0; i < tries.length; i += 1) {
      const img = tries[i].getElementsByTagName('img')[0];
      img.src = 'images/lostHeart.png';
    }
    addPhraseToDisplay(phraseArray);
    missed = 0;
  });
}
