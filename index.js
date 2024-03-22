#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to my number guessing game");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answere = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6: ",
    },
]);
if (answere.userGuessedNumber == randomNumber) {
    console.log("Congratulations! you guessed a right number");
}
else {
    console.log("you guessed a wrong number");
}
