const readline = require("readline");
const chalk = require('chalk');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What\'s your name ? ", function(name) {
    rl.question("What\'s your year of birth? ", function(yob) {
        const age = calculateAge(yob);
        rl.question("What\'s your home town?", function(homeTown) {
            console.log(`Thank you. Hello ${chalk.gray(name)}, so you are ${chalk.magentaBright(age)} year-old from ${chalk.yellow(homeTown)}`);
            rl.close();
        });
    });
});

// rl.on('close',function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });

function calculateAge(yob) {
    if(isNaN(yob)) {
        return chalk.red(`[${yob}] - "is not a number"`);
    }
    let currentYear = new Date().getFullYear();
    return currentYear - yob;
}



