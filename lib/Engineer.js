// Imports the Employee class
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHubUserName) {
    super(name, id, email);
    this.gitHubUserName = gitHubUserName;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.gitHubUserName;
  }
}

// Exports the Engineer class
module.exports = Engineer;
