// Imports the Employee class
const Employee = require("../lib/Employee");

// Tests the constructor class of Employee
describe("Employee class", () => {
  describe("initialization", () => {
    it("should check if the initialized object is an instance of the Employee class", () => {
      const newEmployee = new Employee();
      expect(newEmployee instanceof Employee).toEqual(true);
    });

    it("should check if the given employee name gets processed properly through the constructor", () => {
      const name = "Muiasar";
      const newEmployee = new Employee(name);
      expect(newEmployee.name).toEqual(name);
    });
    it("should check if the given employee Id gets processed properly through the constructor", () => {
      const name = "Muiasar";
      const newID = "12345";
      const newEmployee = new Employee(name, newID);
      expect(newEmployee.id).toEqual(newID);
    });
    it("should check if the given employee email gets processed properly through the constructor", () => {
      const name = "Muiasar";
      const newID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const newEmployee = new Employee(name, newID, myEmail);
      expect(newEmployee.email).toEqual(myEmail);
    });
  });
  describe("The get functions", () => {
    it("getName() should return the name of the employee", () => {
      const name = "Muiasar";
      const newEmployee = new Employee(name);
      expect(newEmployee.getName()).toEqual(name);
    });
    it("getId() should return the ID of the employee", () => {
      const name = "Muiasar";
      const newID = "12345";
      const newEmployee = new Employee(name, newID);
      expect(newEmployee.getId()).toEqual(newID);
    });
    it("getEmail() should return the email of the employee", () => {
      const name = "Muiasar";
      const newID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const newEmployee = new Employee(name, newID, myEmail);
      expect(newEmployee.getEmail()).toEqual(myEmail);
    });
    it("getRole() should return the Role of the employee", () => {
      const name = "Muiasar";
      const newID = "12345";
      const myEmail = "muiasar2012@gmail.com";
      const newEmployee = new Employee(name, newID, myEmail);
      expect(newEmployee.getRole()).toEqual("Employee");
    });
  });
});
