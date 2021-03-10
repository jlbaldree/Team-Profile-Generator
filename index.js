const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/HTMLtemplate");
const writeFile = require("./src/generatesite")

let manager = [];
let engineer = [];
let intern = [];
let employeeArray = {manager, engineer, intern};

function Questionaire() {
    
    return inquirer
        .prompt([
        {
            type: "list",
            name: "position",
            message: "What is the employee's position?",
            choices:["Manager", "Engineer", "Intern"]
        },
        {
            type: "text",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "text",
            name: "id",
            message: "What is the employee's ID number?"
        },
        {
            type: "text",
            name: "email",
            message: "What is the employee's email?"
        },
        {
            type: "confirm",
            name: "profilePhoto",
            message: "Will the profile include a photo? If so, the file needs to be saved in an assets folder in your project directory before proceeding.",
            default: false
        },
        {
            when: function (response) {
                return response.profilePhoto;
        },
            type: "text",
            name: "photoName",
            message: "Please provide the name, including the extension, of the file:",
        }
        

        ])
        .then(({name, id, email, photoName, position,}) => {
            if (position === "Manager") {
                return inquirer
                    .prompt([{
                        type: "text",
                        name: "officePhone",
                        message:"What is the Manager's office phone number?"
                    },
                    {
                        type: "confirm",
                        name: "addEmployee",
                        message: "Would you like to add another employee?",
                        default: false
                    }])
                    .then(({officePhone, addEmployee}) => {
                        manager.push(new Manager(name, id, email, photoName, officePhone ))
                        console.log(employeeArray)
                        if (addEmployee) {
                            return Questionaire();
                        }
                    })
            } else if (position === "Engineer") {
                return inquirer
                    .prompt([{
                        type: "text",
                        name: "github",
                        message: "What is the engineer's Github username?"
                    },
                    {
                        type: "confirm",
                        name: "addEmployee",
                        message: "Would you like to add another employee?",
                        default: false
                    }])
                    .then(({github, addEmployee}) => {
                        engineer.push(new Engineer(name, id, email, photoName, github))
                        console.log(employeeArray)
                        if (addEmployee) {
                            return Questionaire();
                        }
                    })
            } else if (position === "Intern") {
                 return inquirer
                    .prompt([{
                        type: "text",
                        name: "school",
                        message: "What school does the intern attend?"
                    },
                    {
                        type: "confirm",
                        name: "addEmployee",
                        message: "Would you like to add another employee?",
                        default: false
                    }])
                    .then(({school, addEmployee}) => {
                        intern.push(new Intern(name, id, email, photoName, school))
                        console.log(employeeArray)
                        if (addEmployee) {
                            return Questionaire();
                        }
                    })
            }
        })
};



Questionaire()
    .then(teamData => {
        return generateHTML(employeeArray)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })