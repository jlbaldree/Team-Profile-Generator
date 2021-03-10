const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, photoName, school) {
        super (name, id, email, photoName);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;