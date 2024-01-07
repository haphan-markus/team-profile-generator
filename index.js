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
    "What is the team manager's name?",
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
    "What is your intern's school?"
]

const init = () => {
    inquirer
    .prompt ([
        {
            type: "Input",
            name: "name",
            message: questions[0]
        },
        {
            type: "Input",
            name: "id",
            message: questions[1]
        },
        {
            type: "Input",
            name: "email",
            message: questions[2]
        },
        {
            type: "Input",
            name: "officeNumber",
            message: questions[3]
        },
        {
            type: "list",
            name: "memberChoice",
            default: "Use arrow keys",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
            message: questions[4]
        }
    ]).then((response) => {
        console.log(response);
        // create an object here from class Manager
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        console.log(manager);
    })
}

const initEngineer = ( ) => {
    inquirer
    .prompt ([
        {
            type: "Input",
            name: "Role",
            message: questionsEngineer[0]
        },
        {
            type: "Input",
            name: "Id",
            message: questionsEngineer[1]
        },
        {
            type: "Input",
            name: "Email",
            message: questionsEngineer[2]
        },
        {
            type: "Input",
            name: "GitHub",
            message: questionsEngineer[3]
        },
        {
            type: "list",
            name: "memberChoice",
            default: "Use arrow keys",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
            message: questions[4]
        }
    ]).then((response) => {})
}

const initIntern = () => {
    inquirer
    .prompt ([
        {
            type: "Input",
            name: "Role",
            message: questionsIntern[0]
        },
        {
            type: "Input",
            name: "Id",
            message: questionsIntern[1]
        },
        {
            type: "Input",
            name: "Email",
            message: questionsIntern[2]
        },
        {
            type: "Input",
            name: "GitHub",
            message: questionsIntern[3]
        },
        {
            type: "list",
            name: "memberChoice",
            default: "Use arrow keys",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
            message: questions[4]
        }
    ]).then((response) => {

    })
}
init();



// if ( ) {
//     // choice equal to Engineer, answer the questionsEngineer and then prompt to the final question again
//     // choice equal to Intern, answer the questionsIntern and then prompt to the final question again

// }