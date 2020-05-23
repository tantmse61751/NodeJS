#!/usr/bin/env node

const RL = require("readline");
const CHALK = require("chalk");
const INQUIRER = require("inquirer");

INQUIRER
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
        console.info(`Thank you. Hello ${CHALK.gray(answers.name)}, so you are ${CHALK.magentaBright(calculateAge(answers.yob))} year-old from ${CHALK.yellow(answers.homeTown)}`);
});

function calculateAge(yob) {
    if (isNaN(yob)) {
        return CHALK.red(`[${yob}] - "is not a number"`);
    }
    let currentYear = new Date().getFullYear();
    return currentYear - yob > 0 ? currentYear - yob : CHALK.red("[" + yob + "] - yob is Not valid");
}
