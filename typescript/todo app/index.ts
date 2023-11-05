import inquirer from 'inquirer';

let todos: string[] = [];

let createTodo: (arr: string[]) => void = async (arr: string[]) => {
  do {
    let ans = await inquirer.prompt({
      type: 'list',
      message: 'Select An Operation',
      name: 'Select',
      choices: ['add', 'update', 'view', 'delete'],
    });

    if (ans.Select === 'add') {
      let addTodo = await inquirer.prompt({
        type: 'input',
        message: 'add Item in Todos!',
        name: 'addTodo',
      });
      arr.push(addTodo.addTodo);
      console.log(arr);
    } else if (ans.Select === 'update') {
      let updateTodo = await inquirer.prompt({
        type: 'list',
        message: 'select Item For Update',
        choices: arr.map((item) => item),
        name: 'todo',
      });
      let addTodo = await inquirer.prompt({
        type: 'input',
        message: 'add Item in Todos!',
        name: 'addTodo',
      });

      let newTodo: string[];
      newTodo = arr.filter((val) => val !== updateTodo.todo);
      arr = [...newTodo, addTodo.addTodo];
    } else if (ans.Select === 'view') {
      console.log(arr);
    } else if (ans.Select === 'delete') {
      let deleteTodo = await inquirer.prompt({
        type: 'list',
        message: 'select Item For Update',
        choices: arr.map((item) => item),
        name: 'todo',
      });
      let newTodo: string[];
      newTodo = arr.filter((val) => val !== deleteTodo.todo);
      arr = [...newTodo];

      console.log(arr);
    }
  } while (true);
};

createTodo(todos);
