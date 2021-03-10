const Employee = require ("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, photoName, github) {
        super (name, id, email, photoName);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;