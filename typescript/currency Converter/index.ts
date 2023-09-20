import inquirer from 'inquirer';
import axios from 'axios';

const questions = [
  {
    message: 'Welcome To Currency Converter\nPress Enter To Start',
    name: 'Greeting',
    type: 'input',
  },
  {
    message: 'Enter Conversion Amount',
    name: 'amount',
    type: 'input',
  },
  {
    message: 'Choose Currency',
    name: 'currencyChoice',
    type: 'list',
    choices: ['PK', 'EUR', 'GBP', 'CAD', 'PLN'],
  },
];

const answers = await inquirer.prompt(questions);

const apiUrl = 'http://apilayer.net/api/live';
const accessKey = '82d60f79f1149da1af46d61dc9fb627d';

try {
  const response = await axios.get(apiUrl, {
    params: {
      access_key: accessKey,
      currencies: 'EUR,GBP,CAD,PLN,PKR',
      source: 'USD',
      format: 1,
    },
  });

  const data = response.data;
  let convertedAmount = 0;

  switch (answers.currencyChoice) {
    case 'PK':
      console.log(`Exchange rate for PKR: ${data.quotes.USDPKR}`);
      convertedAmount = answers.amount * data.quotes.USDPKR;
      console.log(`Converted Amount: $${convertedAmount.toFixed(2)} PKR`);
      break;
    case 'EUR':
      console.log(`Exchange rate for EUR: ${data.quotes.USDEUR}`);
      convertedAmount = answers.amount * data.quotes.USDEUR;
      console.log(`Converted Amount: $${convertedAmount.toFixed(2)} EUR`);
      break;
    case 'GBP':
      console.log(`Exchange rate for GBP: ${data.quotes.USDGBP}`);
      convertedAmount = answers.amount * data.quotes.USDGBP;
      console.log(`Converted Amount: $${convertedAmount.toFixed(2)} GBP`);
      break;
    case 'CAD':
      console.log(`Exchange rate for CAD: ${data.quotes.USDCAD}`);
      convertedAmount = answers.amount * data.quotes.USDCAD;
      console.log(`Converted Amount: $${convertedAmount.toFixed(2)} CAD`);
      break;

    case 'PLN':
      console.log(`Exchange rate for PLN: ${data.quotes.USDPLN}`);
      convertedAmount = answers.amount * data.quotes.USDPLN;
      console.log(`Converted Amount: $${convertedAmount.toFixed(2)} PLN`);
      break;
    default:
      console.log('Invalid currency choice.');
      break;
  }
} catch (error) {
  console.error('Error fetching data from the API:', error);
}
