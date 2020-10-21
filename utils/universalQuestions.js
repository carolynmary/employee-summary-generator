const universalQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please enter at least one character.";
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's id #?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email?",
    validate: answer => {
      if (answer.includes("@" && ".")) {
        return true;
      };
      return "Please enter a valid email."
    },
  },
];

module.exports = universalQuestions;