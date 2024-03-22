#!/usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to my number guessing game")

async function guessingGame() {
  while (true) {
    const randomNumber = Math.floor(Math.random() * 6 + 1);

    const answer = await inquirer.prompt([
      {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6: ",
      },
    ]);

    if (answer.userGuessedNumber == randomNumber) {
      console.log("Congratulations! You guessed the right number");
      break; // Exit the loop if the guess is correct
    } else {
      console.log("You guessed the wrong number. Please try again.");
    }
  }
}

guessingGame();
