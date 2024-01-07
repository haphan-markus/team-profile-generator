// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, role, id, email, gitHub){
        super(name, role, id, email);
        this.gitHub = gitHub;
    }

    getGithub () {
        return `${this.gitHub}`;
    }
}

module.exports = Engineer;