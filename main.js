import inquirer from 'inquirer';
import { differenceInSeconds } from 'date-fns';
const res = await inquirer.prompt({
    name: "userinput",
    type: "number",
    message: "please enter the amount of second",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter a valid number";
        }
        else if (input > 60) {
            return "second must be in 60 ";
        }
        else {
            return true;
        }
    }
});
let input = res.userinput;
function starttime(val) {
    const intime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervaltime = new Date(intime);
    setInterval((() => {
        const currtime = new Date();
        const timediff = differenceInSeconds(intervaltime, currtime);
        if (timediff <= 0) {
            console.log("time has expired");
            process.exit();
        }
        const min = Math.floor((timediff % (3600 * 24)) / 3600);
        const sec = Math.floor(timediff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
starttime(input);
