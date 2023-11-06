import inquirer from 'inquirer';

const apiUrl: string =
  'https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple';

let fetchData = async (data: string) => {
  let fetchQuiz: any = await fetch(data);
  let res = await fetchQuiz.json();
  return res;
};

let data = await fetchData(apiUrl);


let startQuiz = async () => {
  let score: number = 0;

  let fName = await inquirer.prompt({
    type: 'input',
    name: 'fullName',
    message: 'What is Your Name ?',
  });

  for (let i = 0; i < data.results.length; i++) {
    let answer = [
      ...data.results[i].incorrect_answers,
      data.results[i].correct_answer,
    ];

    let ans = await inquirer.prompt({
      type: 'list',
      name: 'quiz',
      message: data.results[i].question,
      choices: answer.map((val: any) => val),
    });

    if (ans.quiz === data.results[i].correct_answer) {
      ++score;
    }
  }

  console.log(`${fName.fullName} your score is ${score}`);
};

startQuiz();
