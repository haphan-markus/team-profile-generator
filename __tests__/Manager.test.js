const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
  it("Can set office number via constructor argument", () => {
    const testValue = 100;

    const e = new Manager("Foo", 1, "test@test.com", testValue);

    expect(e.officeNumber).toEqual(testValue);
  });

  it('getRole() should return "Manager"', () => {
      const testValue = "Manager";
      const e = new Manager("Foo", 1, "test@test.com", 100);
      expect(e.getRole()).toEqual(testValue);
  });

  it("Can get office number via getOffice()", () => {
      const testValue = 100;
      const e = new Manager("Foo", 1, "test@test.com", testValue);
      expect(e.getOfficeNumber()).toEqual(testValue);
    });
});