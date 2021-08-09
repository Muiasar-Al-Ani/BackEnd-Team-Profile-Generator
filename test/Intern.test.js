// Imports the Intern class
const Intern = require("../lib/Intern");

// Tests the constructor class of Intern
describe("Intern class", () => {
  describe("initialization", () => {
    it("should check if the initialized object is an instance of the Intern class", () => {
      const newIntern = new Intern();
      expect(newIntern instanceof Intern).toEqual(true);
    });
    it("should check if the given Intern name, ID, email, and the school name gets processed properly through the constructor", () => {
      const name = "Muiasar";
      const newID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const schoolName = "UNC";

      const newIntern = new Intern(name, newID, myEmail, schoolName);

      expect(newIntern.name).toEqual(name);
      expect(newIntern.id).toEqual(newID);
      expect(newIntern.email).toEqual(myEmail);
      expect(newIntern.school).toEqual(schoolName);
    });
  });
  describe("The get functions", () => {
    it("getSchool() should return the School name that the Intern attends", () => {
      const name = "Muiasar";
      const newID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const schoolName = "UNC";

      const newIntern = new Intern(name, newID, myEmail, schoolName);

      expect(newIntern.getSchool()).toEqual(schoolName);
    });
    it("getRole() should return the Role of the Intern", () => {
      const name = "Muiasar";
      const newID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const schoolName = "UNC";

      const newIntern = new Intern(name, newID, myEmail, schoolName);

      expect(newIntern.getRole()).toEqual("Intern");
    });
  });
});
