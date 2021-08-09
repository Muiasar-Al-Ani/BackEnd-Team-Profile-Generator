// Imports the required classes and dependencies
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const teamMembers = [];

const employeesQuestions = [
  {
    type: "input",
    message: "Please enter the team member's name:",
    name: "name",
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
  },
  {
    type: "input",
    message: "Please enter the team member's email address:",
    name: "email",
  },
];

const managerQuestion = [
  {
    type: "input",
    message: "Please enter the manager's officeNumber:",
    name: "officeNumber",
  },
];
const engineerQuestion = [
  {
    type: "input",
    message: "Please enter the engineer's GitHub user name:",
    name: "githubUserName",
  },
];
const internQuestion = {
  type: "input",
  message: "Please enter the intern's School's name:",
  name: "school",
};

const addTeamMembers = () => {
  
  inquirer
    .prompt(employeesQuestions)
    .then(({ name, role, id, email }) => {
      if (role === "Manager") {
        inquirer.prompt(managerQuestion).then(({ officeNumber }) => {
          newTeamMember = new Manager(name, id, email, officeNumber);
          console.log(newTeamMember);
        });
      } else if (role === "Engineer") {
        inquirer.prompt(engineerQuestion).then(({ githubUserName }) => {
          newTeamMember = new Engineer(name, id, email, githubUserName);
          console.log(newTeamMember);
        });
      } else {
        inquirer.prompt(internQuestion).then(({ school }) => {
          newTeamMember = new Intern(name, id, email, school);
          
        });
      }
    })
};

addTeamMembers();
