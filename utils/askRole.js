const inquirer = require("inquirer");

function askRole() {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What type of employee do you want to add?",
            choices: ["Engineer", "Intern", "No more employees to add"]
        },
    ])
};

module.exports = askRole;