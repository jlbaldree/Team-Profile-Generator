const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, photoName, officePhone) {
        super (name, id, email, photoName);
        this.officePhone = officePhone;
    }
    getRole() {
        return "Manager";
    }
    getOfficePhone() {
        return this.officePhone;
    }

}

module.exports = Manager;