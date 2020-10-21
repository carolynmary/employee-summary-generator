const inquirer = require("inquirer");

const universalQuestions = require("./universalQuestions");
const Engineer = require("../lib/Engineer");

async function addEngineer() {
    try {
        console.log("Enter ENGINEER info:")
        const answers = await inquirer.prompt([
            ...universalQuestions,
            {
                type: "input",
                name: "github",
                message: "What is the engineer's GitHub Username?",
            },
        ]);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        return engineer
    } catch (err) {
        console.log(err);
    }
};

module.exports = addEngineer;