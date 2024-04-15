import prompt from "readline-sync";
import wordBank from "./word-bank.js";

// Function to select a random word from the word bank
function getRandomWord() {
  const index = Math.floor(Math.random() * wordBank.length);
  return wordBank[index];
}

// Function to display the current state of the game to the player
function displayGameState(displayString, remainingGuesses, guessedLetters) {
  console.log("\nWord: " + displayString.split("").join(" "));
  console.log("Guesses Left: " + remainingGuesses);
  console.log("Guessed Letters: " + guessedLetters.join(", "));
}

// Main game function
function playHangman() {
  let selectedWord = getRandomWord();
  let guessedLetters = [];
  let remainingGuesses = 6;
  let displayString = "_".repeat(selectedWord.length);

  console.log("\nWelcome to Hangman!\nGuess the word by typing one letter at a time.\nPress ctrl+c at any time to exit.\n");

  // Game loop
  while (remainingGuesses > 0 && displayString.includes("_")) {
    displayGameState(displayString, remainingGuesses, guessedLetters);

    let guess = prompt.question("Please guess a letter: ").toLowerCase();

    if (!guess || guess.length !== 1 || !guess.match(/[a-z]/i)) {
      console.log("Please enter a valid single letter.");
      continue;
    }

    if (guessedLetters.includes(guess)) {
      console.log("You already guessed that letter. Try a different one.");
      continue;
    }

    guessedLetters.push(guess);

    if (selectedWord.includes(guess)) {
      console.log("Correct!");
      // Update displayString to reveal guessed letters
      for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === guess) {
          displayString = displayString.substring(0, i) + guess + displayString.substring(i + 1);
        }
      }
    } else {
      remainingGuesses--;
      console.log("Oops! Wrong guess.");
    }
  }

  // End of game
  if (!displayString.includes("_")) {
    console.log("\nCongratulations! You guessed the word: " + selectedWord);
  } else {
    console.log("\nGame Over. The word was: " + selectedWord);
  }
}

// Function to ask if the player wants to play again
function askPlayAgain() {
  const playAgain = prompt.question("Do you want to play again? (yes/no) ").toLowerCase();
  if (playAgain === "yes") {
    playHangman(); // Restart the game
  } else {
    console.log("Thanks for playing!");
  }
}

// Start the game
playHangman();
askPlayAgain();