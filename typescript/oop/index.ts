import inquirer from 'inquirer';

class Student {
  constructor(public name: string) {}
}

class Person {
  student: Student[] = [];
  addStudent(obj: Student) {
    this.student.push(obj);
  }
}

const persons = new Person();
const programStart = async (persons: Person) => {
  console.log('Welcome Guest');

  do {
    const ans = await inquirer.prompt({
      type: 'list',
      message: 'Ap kis se bat karna pasand kare ge!',
      name: 'Select',
      choices: ['self', 'Student'],
    });

    if (ans.Select === 'self') {
      console.log('Hello , I am talking to myself!');
    } else if (ans.Select === 'Student') {
      const ans = await inquirer.prompt({
        type: 'input',
        message: 'Enter the Name of student which you want to talk?',
        name: 'stuName',
      });

      const student = persons.student.find((val) => val.name === ans.stuName);

      if (!student) {
        const name = new Student(ans.stuName);
        persons.addStudent(name);
        console.log(`Hello I am ${name.name}, and i am fine`);
        console.log(persons.student);
      } else if (student) {
        console.log(`Hello bro, I am ${student.name}, and i am good`);
        console.log(persons.student);
      }
    }
  } while (true);
};

programStart(persons);
