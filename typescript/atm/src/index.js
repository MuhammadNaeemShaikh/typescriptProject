import inquirer from "inquirer";
let depositAmount = 0;
console.log("ATM");
async function main() {
    while (true) {
        const mainMenu = await inquirer.prompt([
            {
                "message": "Which Service you want to use!",
                name: "choice",
                type: "list",
                choices: ["Deposit Cash", "Withdraw Cash", "View Balance"]
            }
        ]);
        if (mainMenu.choice === "Deposit Cash") {
            const depositData = await inquirer.prompt([
                {
                    type: "input",
                    name: "amount",
                    message: "Enter Your Deposit Amount"
                }
            ]);
            const deposit = parseFloat(depositData.amount);
            if (isNaN(deposit) || deposit <= 0) {
                console.log("Invalid deposit amount.");
            }
            else {
                depositAmount += deposit;
                console.log("Deposit successful.");
            }
        }
        else if (mainMenu.choice === "Withdraw Cash") {
            const withdrawData = await inquirer.prompt([
                {
                    type: "input",
                    name: "amount",
                    message: "Enter Your Withdraw Cash Amount"
                }
            ]);
            const withdraw = parseFloat(withdrawData.amount);
            if (isNaN(withdraw) || withdraw <= 0) {
                console.log("Invalid withdrawal amount.");
            }
            else if (withdraw < 500) {
                console.log("You can not with Draw less than 500");
            }
            else if (withdraw > depositAmount) {
                console.log("Insufficient balance.");
            }
            else {
                depositAmount -= withdraw;
                console.log("Withdrawal successful.");
            }
        }
        else if (mainMenu.choice === "View Balance") {
            console.log("Current Balance is :", depositAmount);
        }
        const isUseAgain = await inquirer.prompt([
            {
                name: "choice",
                message: "Do You Want to use Again?",
                type: "list",
                choices: ["Yes", "No"]
            }
        ]);
        if (isUseAgain.choice === "No") {
            break;
        }
    }
    console.log("Current Balance", depositAmount);
    console.log("Thank you for using the ATM.");
}
main();
