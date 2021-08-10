var colors = require("colors");
const employeesQuestions = [
  {
    type: "input",
    message: "Please enter the team member's name:",
    name: "name",
    validate: name => {
      return name.length > 1
        ? true
        : (console.log("   Please provide an employee name!".red), false);
    },
  },
  {
    type: "list",
    message: "Please enter the team member's role:",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role",
  },
  {
    type: "input",
    message: "Please enter the team member's ID:",
    name: "id",
    validate: id => {
      return isNaN(id)
        ? true
        : (console.log("   Please provide an valid employee ID!".red), false);
    },
  },
  {
    type: "input",
    message: "Please enter the team member's email address:",
    name: "email",
    validate: email => {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

      return valid
        ? true
        : (console.log("   Please provide a valid email address!".red), false);
    },
  },
];

const managerQuestion = [
  {
    type: "input",
    message: "Please enter the manager's officeNumber:",
    name: "officeNumber",
    validate: officeNumber => {
        return isNaN(officeNumber)
          ? true
          : (console.log("   Please provide an valid Manager office number!".red), false);
      },
  },
];
const engineerQuestion = [
  {
    type: "input",
    message: "Please enter the engineer's GitHub user name:",
    name: "githubUserName",
    validate: githubUserName => {
        return githubUserName.length > 1
          ? true
          : (console.log("   Please provide a GitHub Username!".red), false);
      },

  },
];
const internQuestion = [
  {
    type: "input",
    message: "Please enter the intern's School's name:",
    name: "school",
    validate: school => {
        return school.length > 1
          ? true
          : (console.log("   Please provide a School name!".red), false);
      },
  },
];
const addAnotherMemberQuestion = [
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Yes", "No"],
    name: "addMoreMembers",
  },
];

module.exports = {
  employeesQuestions,
  managerQuestion,
  engineerQuestion,
  internQuestion,
  addAnotherMemberQuestion,
};
