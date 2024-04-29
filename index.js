#!/usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red.bold("============ Welcome to Ameer Saria's Countdown_Timer ============"));
const tim = await inquirer.prompt([{
        name: "userInput",
        type: "number",
        message: "Please enter the amount of second",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter valid number";
            }
            else if (input > 60) {
                return "Second must be below 60";
            }
            else {
                return true;
            }
        }
    }]);
let input = tim.userInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Time has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);
