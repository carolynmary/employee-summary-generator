const inquirer = require("inquirer");

const universalQuestions = require("./universalQuestions");
const Intern = require("../lib/Intern");

async function addIntern() {
    try {
        console.log("Enter INTERN info:")
        const answers = await inquirer.prompt([
            ...universalQuestions,
            {
                type: "input",
                name: "school",
                message: "What school does the intern attend?",
            },
        ]);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        return intern
    } catch (err) {
        console.log(err);
    }
};

module.exports = addIntern;