var colors = require("colors");
const employeesQuestions = [
  {
    type: "input",
    message: "Please enter the team member's name:",
    name: "name",
    validate: name => {
        valid = /^[a-z]*$/gi.test(name);
        return valid
        ? true
        : console.log("   Please provide an employee name!".red);
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
      valid = /^[0-9]*$/g.test(id);
      return valid
        ? true
        : console.log("   Please provide an valid numerical employee ID!".red);
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
        : console.log("   Please provide a valid email address!".red);
    },
  },
];

const managerQuestion = [
  {
    type: "input",
    message: "Please enter the manager's officeNumber:",
    name: "officeNumber",
    validate: officeNumber => {
        valid = /^[0-9]*$/g.test(officeNumber);
        return valid
        ? true
        : console.log("   Please provide an valid Manager office number!".red);
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
        : console.log("   Please provide a GitHub Username!".red);
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
        : console.log("   Please provide a School name!".red);
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
