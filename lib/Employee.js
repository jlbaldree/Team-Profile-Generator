class Employee {
    constructor (name, id, email, photoName) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.photoName = photoName;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getPhotoName() {
    return this.photoName;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;