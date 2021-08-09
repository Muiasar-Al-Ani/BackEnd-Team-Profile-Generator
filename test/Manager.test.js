// Imports the Manager class
const Manager = require("../lib/Manager");

// Tests the constructor class of Manager
describe("Manager class", () => {
  describe("initialization", () => {
    it("should check if the initialized object is an instance of the Manager class", () => {
      const newManager = new Manager();
      expect(newManager instanceof Manager).toEqual(true);
    });
    it("should check if the given Manager name, ID, email, and the office number gets processed properly through the constructor", () => {
      const name = "Muiasar";
      const newID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const myOfficeNumber = "0987654321";

      const newManager = new Manager(name, newID, myEmail, myOfficeNumber);

      expect(newManager.name).toEqual(name);
      expect(newManager.id).toEqual(newID);
      expect(newManager.email).toEqual(myEmail);
      expect(newManager.officeNumber).toEqual(myOfficeNumber);
    });
  });
  describe("The get functions", () => {
    it("getSchool() should return the School name that the Manager attends", () => {
      const name = "Muiasar";
      const newID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const myOfficeNumber = "0987654321";

      const newManager = new Manager(name, newID, myEmail, myOfficeNumber);

      expect(newManager.getOfficeNumber()).toEqual(myOfficeNumber);
    });
    it("getRole() should return the Role of the Manager", () => {
      const name = "Muiasar";
      const newID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const myOfficeNumber = "0987654321";

      const newManager = new Manager(name, newID, myEmail, myOfficeNumber);

      expect(newManager.getRole()).toEqual("Manager");
    });
  });
});
