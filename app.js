const addManager = require("./utils/addManager");
const addEngineer = require("./utils/addEngineer");
const addIntern = require("./utils/addIntern");
const askRole = require("./utils/askRole");
const generateHTML = require("./utils/generateHTML");

const employeeTeam = [];

async function init() {
    console.log("Welcome to the Employee Summary Generator!")
    try {
        const manager = await addManager();
        employeeTeam.push(manager);
        addEmployee()
    } catch (err) {
        console.log(err);
    };
}

async function addEmployee() {
    let answers = await askRole();
    if (answers.role === "Engineer") {
        const engineer = await addEngineer()
        employeeTeam.push(engineer);
        addEmployee();
    };
    if (answers.role === "Intern") {
        const intern = await addIntern()
        employeeTeam.push(intern);
        addEmployee();
    };
    if (answers.role === "No more employees to add") {
        generateHTML(employeeTeam);
    };
}

init();