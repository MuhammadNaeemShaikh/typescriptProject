import inquirer from "inquirer";
const heading = " Welcome to Number Guessing Game ";
const paddingLength = (process.stdout.columns - heading.length) / 2;
const padding = "=".repeat(Math.max(0, paddingLength));
const centeredHeading = `${padding}${heading}${padding}`;
const data = await inquirer.prompt([
    {
        type: "input",
        name: "start",
        message: centeredHeading + "\n\nPress Enter to Start"
    },
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
]);
let generateRandoNum = Math.round(Math.random());
switch (data.guessNumber) {
    case generateRandoNum:
        console.log("Yippppeee You guessed right");
        break;
    default:
        console.log("You loose");
        break;
}
