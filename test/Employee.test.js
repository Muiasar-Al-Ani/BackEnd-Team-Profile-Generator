// Imports the Employee class
const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("initialization", () => {
    it("should check if the initialized object is an instance of the Employee class", () => {
      const newEmployee = new Employee();
      expect(newEmployee instanceof Employee).toEqual(true);
    });

    it("should check if the given employee name gets processed properly through the constructor", () => {
      const name = "Muiasar";
      const fakeEmployee = new Employee(name);
      expect(fakeEmployee.name).toEqual(name);
    });
    it("should check if the given employee Id gets processed properly through the constructor", () => {
      const name = "Muiasar";
      const fakeID = "12345";
      const fakeEmployee = new Employee(name, fakeID);
      expect(fakeEmployee.id).toEqual(fakeID);
    });
    it("should check if the given employee email gets processed properly through the constructor", () => {
      const name = "Muiasar";
      const fakeID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const fakeEmployee = new Employee(name, fakeID, myEmail);
      expect(fakeEmployee.email).toEqual(myEmail);
    });
  });
  describe("get functions", () => {
    it("getName() should return the name of the employee", () => {
      const name = "Muiasar";
      const fakeEmployee = new Employee(name);
      expect(fakeEmployee.getName()).toEqual(name);
    });
    it("getId() should return the ID of the employee", () => {
      const name = "Muiasar";
      const fakeID = "12345";
      const fakeEmployee = new Employee(name, fakeID);
      expect(fakeEmployee.getId()).toEqual(fakeID);
    });
    it("getEmail() should return the email of the employee", () => {
      const name = "Muiasar";
      const fakeID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const fakeEmployee = new Employee(name, fakeID, myEmail);
      expect(fakeEmployee.getEmail()).toEqual(myEmail);
    });
    it("getRole() should return the Role of the employee", () => {
      const name = "Muiasar";
      const fakeID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const fakeEmployee = new Employee(name, fakeID, myEmail);
      expect(fakeEmployee.getRole()).toEqual("Employee");
    });
  });
});
