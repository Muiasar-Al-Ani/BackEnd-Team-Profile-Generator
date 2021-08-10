// Imports the required classes and dependencies
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateHTML = require("./src/generateHTML");
const {
  employeesQuestions,
  managerQuestion,
  engineerQuestion,
  internQuestion,
  addAnotherMemberQuestion,
} = require("./src/questions");

const managerArr = [];
const engineerArr = [];
const internArr = [];

const addTeamMembers = async () => {
  let employee = await inquirer.prompt(employeesQuestions);
  try {
    switch (employee.role) {
      case "Manager":
        let officeNumberObj = await inquirer.prompt(managerQuestion);
        const manager = new Manager(
          employee.name,
          employee.id,
          employee.email,
          officeNumberObj.officeNumber
        );
        managerArr.push(manager);

        break;
      case "Engineer":
        let gitHubObj = await inquirer.prompt(engineerQuestion);
        const engineer = new Engineer(
          employee.name,
          employee.id,
          employee.email,
          gitHubObj.githubUserName
        );
        engineerArr.push(engineer);
        break;
      case "Intern":
        let schoolObj = await inquirer.prompt(internQuestion);
        const intern = new Intern(
          employee.name,
          employee.id,
          employee.email,
          schoolObj.school
        );
        internArr.push(intern);
        break;
      default:
        "";
    }
  } catch (error) {
    console.error(error);
  }
};

const addMoreTeamMembers = async () => {
  let addMember = "Yes";
  let addMoreMembersObj;
  while (addMember === "Yes") {
    addMoreMembersObj = await inquirer.prompt(addAnotherMemberQuestion);
    addMember = await addMoreMembersObj.addMoreMembers;
    if (addMember === "Yes") {
      await addTeamMembers();
    }
  }
};

const init = async () => {
  try {
    await addTeamMembers();
    await addMoreTeamMembers();
    await writeFileAsync(
      "./dist/index.html",
      generateHTML(managerArr, engineerArr, internArr)
    );
    console.log(
      "Your Team Profile has been generated successfully in the dist directory as index.html"
    );
  } catch (err) {
    console.error(err);
  }
};
init();
