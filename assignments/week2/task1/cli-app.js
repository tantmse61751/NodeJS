#!/usr/bin/env node

const readline = require("readline");
const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "name",
      message: "What's your name? ",
    },
    {
      name: "yob",
      message: "What's your year of birth? ",
    },
    {
      name: "homeTown",
      message: "What's your home town?",
    }
  ])
  .then((answers) => {
    console.info(
      `Thank you. Hello ${chalk.gray(
        answers.name
      )}, so you are ${chalk.magentaBright(
        calculateAge(answers.yob)
      )} year-old from ${chalk.yellow(answers.homeTown)}`
    );
  });


// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What\'s your name ? ", function(name) {
//     rl.question("What\'s your year of birth? ", function(yob) {
//         const age = calculateAge(yob);
//         rl.question("What\'s your home town?", function(homeTown) {
//             console.log(`Thank you. Hello ${chalk.gray(name)}, so you are ${chalk.magentaBright(age)} year-old from ${chalk.yellow(homeTown)}`);
//             rl.close();
//         });
//     });
// });

// // rl.on('close',function() {
// //     console.log("\nBYE BYE !!!");
// //     process.exit(0);
// // });

function calculateAge(yob) {
  if (isNaN(yob)) {
    return chalk.red(`[${yob}] - "is not a number"`);
  }
  let currentYear = new Date().getFullYear();
  return currentYear - yob > 0
    ? currentYear - yob
    : chalk.red("[" + yob + "] - yob is Not valid");
}
