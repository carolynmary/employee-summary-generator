const inquirer = require("inquirer");

const universalQuestions = require("./universalQuestions");
const Manager = require("../lib/Manager");

async function addManager() {
  try {
    console.log("Enter MANAGER info:")
    const answers = await inquirer.prompt([
      ...universalQuestions,
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ]);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

    return manager

  } catch (err) {
    console.log(err);
  }
};


module.exports = addManager;