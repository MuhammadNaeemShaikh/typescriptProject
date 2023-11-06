import { differenceInSeconds } from 'date-fns';
import inquirer from 'inquirer';
const res = await inquirer.prompt({
    type: 'number',
    name: 'userInput',
    message: 'Please Enter The Amount Of Second',
    validate: (input) => {
        if (isNaN(input)) {
            return 'Please Enter a Valid Number';
        }
        else if (input > 60) {
            return 'Second must be in 60';
        }
        else {
            return true;
        }
    },
});
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDifferece = differenceInSeconds(intervalTime, currentTime);
        if (timeDifferece <= 0) {
            console.log('time has Expired');
            process.exit();
        }
        const min = Math.floor((timeDifferece % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDifferece % 60);
        console.log(`${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`);
    }, 1000);
}
startTime(res.userInput);
