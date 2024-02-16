const targetWord = "apple";
let guessedWord = "";

function displayWordle() {
  let displayWord = "";
  for (let i = 0; i < targetWord.length; i++) {
    if (guessedWord.includes(targetWord[i])) {
      displayWord += targetWord[i];
    } else {
      displayWord += "_";
    }
  }
  document.getElementById("wordle").textContent = displayWord;
}

function checkGuess() {
  const guess = document.getElementById("guessInput").value.toLowerCase();
  if (guess.length !== targetWord.length || !/^[a-z]+$/.test(guess)) {
    alert("Please enter a valid guess of the same length as the target word.");
    return;
  }
  guessedWord = guess;
  displayWordle();
  if (guess === targetWord) {
    alert("Congratulations! You've guessed the word.");
    document.getElementById("guessInput").disabled = true;
  }
}
