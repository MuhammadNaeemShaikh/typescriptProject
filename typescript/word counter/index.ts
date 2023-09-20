import inquirer from 'inquirer';

const questions = [
  {
    message: 'Welcome to Word Counter \n Press Enter to Start',
    type: 'input',
    name: 'Greeting',
  },
  {
    message: 'Write paragraph:',
    type: 'input',
    name: 'paragraph',
  },
];

const answers = await inquirer.prompt(questions);

const removedWhitespace = answers.paragraph.trim();

let count = 0;

for (let i = 0; i < removedWhitespace.length; i++) {
  removedWhitespace[i] === ' ' ? 'whitespace' : ++count;
}

console.log('Paragraph Count: ' + count);
console.log('Paragraph: ' + removedWhitespace);
