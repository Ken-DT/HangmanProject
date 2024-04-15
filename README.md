##Hangman Game

Welcome to the Hangman game, implemented in Node.js! This version of the classic word-guessing game is designed to be played in the command-line interface. Players try to guess a word by suggesting letters within a limited number of guesses.

## Features

- **Random Word Selection**: A predefined list of words is used to randomly select the challenge word.
- **Guess Tracking**: The game tracks and displays guessed letters, the number of guesses left, and the current state of the word.
- **Multiple Game Support**: Players can continue playing multiple games in a single session, with the game tracking their wins and losses.
- **Win/Loss Statistics**: After each game, and at the end of the session, the game reports the total number of wins and losses.

## Getting Started

### Prerequisites

- You must have [Node.js](https://nodejs.org/en/download/) installed on your computer to run this game.
- The `readline-sync` package is required for input handling.

### Installation

1. **Clone the Repository**:

    Clone this repository to your local machine using the following command:
    ```bash
    git clone https://github.com/your-username/hangman-nodejs.git
    cd hangman-nodejs
    ```

2. **Install Dependencies**:

    Install the necessary package using npm:
    ```bash
    npm install
    ```

### Running the Game

To start the game, navigate to the project directory in your terminal and run:

```bash
node index.js

Follow the on-screen instructions to play. You will be prompted to guess letters. The game will track your guesses and update you on your progress after each guess. You can continue playing multiple rounds, and the game will track your overall performance.

How to Play

    Start the Game: Run the game using the command mentioned above.
    Guess Letters: Input a single letter to guess parts of the word.
    Track Progress: The game will show which letters have been correctly guessed, and how many parts of the word remain hidden.
    View Statistics: After each game, view the number of wins and losses.
    Continue Playing: After each round, choose whether to play another round or end the session.
    End Session: To exit the game, respond with 'no' when asked if you want to continue.

Contributing

Contributions are welcome! If you have ideas for improvements or have found a bug, please follow these steps:

    Fork the repository.
    Create a new branch (git checkout -b improve-feature).
    Make the appropriate changes in the files.
    Commit your changes (git commit -am 'Add some improvements').
    Push to the branch (git push origin improve-feature).
    Create a Pull Request.

License

This project is open source and available under the MIT License.

Acknowledgments

    Thanks to Node.js for the runtime environment.
    Thanks to readline-sync for making command-line input handling easier.
    CanCode  Communities Class for the knowledge.

Enjoy playing the Hangman game, and feel free to fork or contribute to the project!


### Key Enhancements in the README:

1. **Expanded Features Section**: Includes details about the new functionality for tracking wins and losses.
2. **Updated How to Play Section**: Now reflects the process of playing multiple rounds and viewing statistics.
3. **Game End Details**: Explains how the game session can be concluded with the display of total wins and losses.

This updated README provides a complete guide to the enhanced version of your Hangman game, ensuring users understand how to install, play, and interact with the new features effectively.

