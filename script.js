const wordBank = ["example", "hangman", "test", "javascript"];
let selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let guessedLetters = [];
let remainingGuesses = 6;
let displayString = "_".repeat(selectedWord.length);

function updateDisplay() {
    document.getElementById("wordDisplay").textContent = displayString.split("").join(" ");
    document.getElementById("guessedLetters").textContent = guessedLetters.join(", ");
    document.getElementById("remainingGuesses").textContent = remainingGuesses;
}

function makeGuess() {
    const input = document.getElementById("letterInput");
    const guess = input.value.toLowerCase();
    input.value = ""; // Clear input after guess
    if (guess && !guessedLetters.includes(guess) && guess.match(/[a-z]/i)) {
        guessedLetters.push(guess);
        if (selectedWord.includes(guess)) {
            // Update displayString
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === guess) {
                    displayString = displayString.substring(0, i) + guess + displayString.substring(i + 1);
                }
            }
        } else {
            remainingGuesses--;
        }
    }
    if (!displayString.includes("_") || remainingGuesses === 0) {
        setTimeout(() => alert(`Game Over! The word was "${selectedWord}". You ${remainingGuesses > 0 ? "won!" : "lost!"}`), 1);
    }
    updateDisplay();
}

updateDisplay(); // Initial display update
