// Imports the Engineer class
const Engineer = require("../lib/Engineer");

// Tests the constructor class of Engineer
describe("Engineer class", () => {
  describe("initialization", () => {
    it("should check if the initialized object is an instance of the Engineer class", () => {
      const newEngineer = new Engineer();
      expect(newEngineer instanceof Engineer).toEqual(true);
    });
    it("should check if the given employee name, ID, email, and the GitHub user name gets processed properly through the constructor", () => {
      const name = "Muiasar";
      const newID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const gitHubUserName = "Muiasar-Al-Ani";

      const newEngineer = new Engineer(name, newID, myEmail, gitHubUserName);

      expect(newEngineer.name).toEqual(name);
      expect(newEngineer.id).toEqual(newID);
      expect(newEngineer.email).toEqual(myEmail);
      expect(newEngineer.gitHubUserName).toEqual(gitHubUserName);
    });
  });
  describe("The get functions", () => {
    it("getRole() should return the Role of the Engineer", () => {
      const name = "Muiasar";
      const newID = "12345";
      const myEmail = "muiasar2012@gmail.com";

      const newEngineer = new Engineer(name, newID, myEmail);

      expect(newEngineer.getRole()).toEqual("Engineer");
    });
    it("getGitHub() should return the GitHub user name of the Engineer", () => {
      const name = "Muiasar";
      const newID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const gitHubUserName = "Muiasar-Al-Ani";

      const newEngineer = new Engineer(name, newID, myEmail, gitHubUserName);

      expect(newEngineer.getGithub()).toEqual(gitHubUserName);
    });
  });
});
