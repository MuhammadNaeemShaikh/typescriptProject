#!/usr/bin/env node



import operations from "./operation.js";
import inquirer from "inquirer";


const detail = await inquirer.prompt([
    {
        message: "Enter First Number",
        type: "number",
        name: "num1"
    },
    {
        message: "Enter Second Number",
        type: "number",
        name: "num2"
    },
    {
        message: "Choose Operations",
        type: "list",
        choices: ["ADD", "SUB", "MUL", "DIV", "MOD"],
        name: "operation"
    }

])

const { num1, num2, operation } = detail;
let result;

switch (operation) {
    case "ADD":
        result = operations.add(num1, num2);
        console.log(`ADDITION Of ${num1} and ${num2} is : ${result}`)
        break;
    case "SUB":
        result = operations.subtract(num1, num2);
        console.log(`SUBTRACTION Of ${num1} and ${num2} is : ${result}`)
        break;
    case "MUL":
        result = operations.multiply(num1, num2);
        console.log(`MULTIPLICATION Of ${num1} and ${num2} is : ${result}`)
        break;
    case "DIV":
        result = operations.divide(num1, num2);
        console.log(`Divison Of ${num1} and ${num2} is : ${result}`)
        break;
    case "MOD":
        result = operations.mod(num1, num2);
        console.log(`Divison Of ${num1} and ${num2} is : ${result}`)
        break;

    default:
        break;
}