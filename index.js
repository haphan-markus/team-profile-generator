const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, render(data), (err) => {
        if(err) {
            console.log(err);
        }
    })
}

const questions = [
    "What is the team manager's role?",
    "What is the team manager's id?",
    "What is the team manager's email?",
    "What is the team manager's office number?",
    "Which type of team member would you like to add?"
]

const questionsEngineer = [
    "What is your engineer's name?",
    "What is your engineer's id?",
    "What is your engineer's email?",
    "What is your engineer's GitHub username?"
]

const questionsIntern = [
    "What is your intern's name?",
    "What is your intern's id?",
    "What is your intern's email?",
    "What is your intern's GitHub username?"
]

const init = () => {
    inquirer
    .prompt ([
        {
            type: "Input",
            name: "managerRole",
            message: questions[0]
        },
        {
            type: "Input",
            name: "managerId",
            message: questions[1]
        },
        {
            type: "Input",
            name: "managerEmail",
            message: questions[2]
        },
        {
            type: "Input",
            name: "managerOfficeNumber",
            message: questions[3]
        },
        {
            type: "List",
            name: "memberChoice",
            default: "Use arrow keys",
            message: questions[4],
            choice: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ]

    ).then((response) => {

    })
}