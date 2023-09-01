#!/usr/bin/env node


import inquirer from "inquirer";

const heading = " Welcome to Number Guessing Game ";
const paddingLength = (50 - 5) / 2;
const padding = "=".repeat(Math.max(0, paddingLength));
const centeredHeading = `${padding}${heading}${padding}`;

let generateRandoNum = Math.round(Math.random()*10)

await inquirer.prompt(
    {
        type: "input",
        name: "start",
        message: centeredHeading + "\n\nPress Enter to Start"
    },
)


for (let index = 0; index < 3; index++) {

    const data = await inquirer.prompt([
        {
            type: "number",
            name: "guessNumber",
            message: "Enter A Number",
            validate: (input) => {
                const num = parseFloat(input);
                if (isNaN(num)) {
                    return "Please enter a valid number.";
                }
                return true;
            }
        }
    ])

    if (data.guessNumber === generateRandoNum) {
        console.log("Yippppeee You guessed right");
        break;

    }
    else {
        console.log("try again!")
    }
}


