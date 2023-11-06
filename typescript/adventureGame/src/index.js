import chalk from 'chalk';
import inquirer from 'inquirer';
//player and opponent classes
class Player {
    constructor(name) {
        this.name = name;
        this.fuel = 100;
    }
    decrease() {
        this.fuel = this.fuel - 25;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.name = name;
        this.fuel = 100;
    }
    decrease() {
        this.fuel = this.fuel - 25;
    }
}
//getting user data using inquirer
let player = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Please Enter Your Name:',
});
let opponent = await inquirer.prompt({
    type: 'list',
    name: 'select',
    message: 'Select Your Opponent',
    choices: ['Assasin', 'Skeleton', 'Zombie'],
});
// creating object
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    switch (opponent.select) {
        case 'Assasin':
            let ask = await inquirer.prompt({
                type: 'list',
                name: 'option',
                message: 'Select Option',
                choices: ['attack', 'drink Portion', 'Run for your life..'],
            });
            switch (ask.option) {
                case 'attack':
                    let num = Math.round(Math.random() * 1);
                    if (num > 0) {
                        p1.decrease();
                        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                        if (p1.fuel <= 0) {
                            console.log(chalk.bold.italic.red('You Loose Better Luck next time'));
                            process.exit();
                        }
                    }
                    else if (num <= 0) {
                        o1.decrease();
                        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                        if (o1.fuel <= 0) {
                            console.log(chalk.bold.italic.green('You Win'));
                            process.exit();
                        }
                    }
                    break;
                case 'drink Portion':
                    p1.fuelIncrease();
                    console.log(chalk.bold.italic(`After Drink Your health is now ${p1.fuel}`));
                    break;
                case 'Run for your life..':
                    console.log(chalk.bold.red.italic('You Loose Better Luck next time'));
                    break;
            }
            break;
        case 'Skeleton': {
            let ask = await inquirer.prompt({
                type: 'list',
                name: 'option',
                message: 'Select Option',
                choices: ['attack', 'drink Portion', 'Run for your life..'],
            });
            switch (ask.option) {
                case 'attack':
                    let num = Math.round(Math.random() * 1);
                    if (num > 0) {
                        p1.decrease();
                        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                        if (p1.fuel <= 0) {
                            console.log(chalk.bold.italic.red('You Loose Better Luck next time'));
                            process.exit();
                        }
                    }
                    else if (num <= 0) {
                        o1.decrease();
                        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                        if (o1.fuel <= 0) {
                            console.log(chalk.bold.italic.green('You Win'));
                            process.exit();
                        }
                    }
                    break;
                case 'drink Portion':
                    p1.fuelIncrease();
                    console.log(chalk.bold.italic(`After Drink Your health is now ${p1.fuel}`));
                    break;
                case 'Run for your life..':
                    console.log(chalk.bold.red.italic('You Loose Better Luck next time'));
                    break;
            }
            break;
        }
        case 'Zombie': {
            let ask = await inquirer.prompt({
                type: 'list',
                name: 'option',
                message: 'Select Option',
                choices: ['attack', 'drink Portion', 'Run for your life..'],
            });
            switch (ask.option) {
                case 'attack':
                    let num = Math.round(Math.random() * 1);
                    if (num > 0) {
                        p1.decrease();
                        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                        if (p1.fuel <= 0) {
                            console.log(chalk.bold.italic.red('You Loose Better Luck next time'));
                            process.exit();
                        }
                    }
                    else if (num <= 0) {
                        o1.decrease();
                        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                        if (o1.fuel <= 0) {
                            console.log(chalk.bold.italic.green('You Win'));
                            process.exit();
                        }
                    }
                    break;
                case 'drink Portion':
                    p1.fuelIncrease();
                    console.log(chalk.bold.italic(`After Drink Your health is now ${p1.fuel}`));
                    break;
                case 'Run for your life..':
                    console.log(chalk.bold.red.italic('You Loose Better Luck next time'));
                    break;
            }
            break;
        }
    }
} while (true);
