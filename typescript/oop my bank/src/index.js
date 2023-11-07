import { faker } from '@faker-js/faker';
import inquirer from 'inquirer';
// Customer class
class Customer {
    constructor(firstName, lastName, age, gender, mobNumber, // Use lowercase 'number' instead of 'Number'
    accNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mobNumber;
        this.accNumber = accNumber;
    }
}
// Bank class
class Bank {
    constructor() {
        this.customers = []; // Use a better variable name, e.g., 'customers'
        this.accounts = []; // Use a better variable name, e.g., 'accounts'
    }
    addCustomer(cus) {
        this.customers.push(cus);
    }
    addAccount(acc) {
        this.accounts.push(acc);
    }
}
const HBL = new Bank();
// Creating multiple customers and accounts
for (let i = 1; i <= 3; i++) {
    let firstName = faker.person.firstName('male');
    let lastName = faker.person.lastName('male');
    let phoneNumber = faker.phone.number('3#########');
    const cus = new Customer(firstName, lastName, 25 + i, 'Male', Number(phoneNumber), 1000 + i);
    HBL.addCustomer(cus);
    HBL.addAccount({ accNumber: cus.accNumber, balance: 1000 * i });
}
// console.log(HBL);
//Bank Functionality
async function bankService(bank) {
    do {
        let service = await inquirer.prompt({
            type: 'list',
            name: 'select',
            message: 'Please Select The Service',
            choices: ['View Balance', 'Cash Withdrawl', 'Cash Deposit'],
        });
        switch (service.select) {
            case 'View Balance': {
                let accNum = await inquirer.prompt({
                    type: 'input',
                    name: 'num',
                    message: 'Please Enter Your Account Number',
                });
                //find account
                const isAccountNumber = HBL.accounts.find((val) => val.accNumber == accNum.num);
                //if account not found
                if (!isAccountNumber) {
                    console.log('Wrong Credientials');
                }
                else {
                    console.log(`Your Account Balance is ${isAccountNumber.balance}`);
                }
                break;
            }
            case 'Cash Withdrawl': {
                let accNum = await inquirer.prompt({
                    type: 'input',
                    name: 'num',
                    message: 'Please Enter Your Account Number',
                });
                //find account
                let isAccountNumber = HBL.accounts.find((val) => val.accNumber == accNum.num);
                if (!isAccountNumber) {
                    console.log('Wrong Credientials');
                }
                else {
                    let cashWithDraw = await inquirer.prompt({
                        type: 'input',
                        name: 'num',
                        message: 'Please Enter Your withdrawl Amount',
                    });
                    if (cashWithDraw.num > 500 &&
                        isAccountNumber.balance > cashWithDraw.num) {
                        isAccountNumber.balance -= cashWithDraw.num;
                        console.log(`Your Remaining Account Balance is ${isAccountNumber.balance}`);
                    }
                    else {
                        console.log('WithDrawl amount should be more than 500 and account should have enough balance');
                    }
                }
                break;
            }
            case 'Cash Deposit': {
                let accNum = await inquirer.prompt({
                    type: 'input',
                    name: 'num',
                    message: 'Please Enter Your Account Number',
                });
                //find account
                let isAccountNumber = HBL.accounts.find((val) => val.accNumber == accNum.num);
                if (!isAccountNumber) {
                    console.log('Wrong Credientials');
                }
                else {
                    let cashWithDraw = await inquirer.prompt({
                        type: 'input',
                        name: 'num',
                        message: 'Please Enter Your withdrawl Amount',
                    });
                    //convert cashwithdraw string to num
                    if (cashWithDraw.num > 500) {
                        isAccountNumber.balance += Number(cashWithDraw.num);
                        console.log(`Your Account Balance is ${isAccountNumber.balance}`);
                    }
                    else {
                        console.log('Deposit Amount Should be greater than 500');
                    }
                }
                break;
            }
            default:
                console.log('Service Does not exist');
                break;
        }
    } while (true);
}
bankService(HBL);
