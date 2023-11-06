import inquirer from 'inquirer';
import chalk from 'chalk';

// let fName = await inquirer.prompt({
//   type: 'input',
//   name: 'fullName',
//   message: 'What is Your Name ?',
// });

// console.log(chalk.bold.blue(fName.fullName));

const apiUrl: string =
  'https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple';

let fetchData = async (data: string) => {
  let fetchQuiz: any = await fetch(data);
  let res = await fetchQuiz.json();
  return res;
};

let res = await fetchData(apiUrl);

let startQuiz = async () => {
  let score: number = 0;
};
