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
const answer = []; // Array to contain the input from all user

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
            name: "choice",
            default: "Use arrow keys",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
            message: questions[4]
        }
    ]).then((response) => {
        // Create an object here from class Manager
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        console.log(manager);
        
        // Add response into "answer" array
        answer.push(manager);
        
        // Call memberChoice function
        memberChoice(response.choice, answer);
    })
}

const initEngineer = ( ) => {
    inquirer
    .prompt ([
        {
            type: "Input",
            name: "name",
            message: questionsEngineer[0]
        },
        {
            type: "Input",
            name: "id",
            message: questionsEngineer[1]
        },
        {
            type: "Input",
            name: "email",
            message: questionsEngineer[2]
        },
        {
            type: "Input",
            name: "gitHub",
            message: questionsEngineer[3]
        },
        {
            type: "list",
            name: "choice",
            default: "Use arrow keys",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
            message: questions[4]
        }
    ]).then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.gitHub);
        
        // Add response into "answer" array
        answer.push(engineer);
        
        memberChoice(response.choice, answer);
    })
}

const initIntern = () => {
    inquirer
    .prompt ([
        {
            type: "Input",
            name: "name",
            message: questionsIntern[0]
        },
        {
            type: "Input",
            name: "id",
            message: questionsIntern[1]
        },
        {
            type: "Input",
            name: "email",
            message: questionsIntern[2]
        },
        {
            type: "Input",
            name: "school",
            message: questionsIntern[3]
        },
        {
            type: "list",
            name: "choice",
            default: "Use arrow keys",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
            message: questions[4]
        }
    ]).then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school);

        // Add response into "answer" array
        answer.push(intern)

        // Call memberChoice function
        memberChoice(response.choice, answer);
    })
}

const memberChoice = (choice, answer) => {
    if (choice === "Engineer") {
        initEngineer();
    } else if (choice === "Intern") {
        initIntern();
    } else {return fs.writeFile("./team.html", render(answer), (err) => {
        if (err)
            console.log(err);
        else console.log("Generating team.html file ...");
    })
    };
}


// const writeToFile = (fileName, data) => {
//     fs.writeFile(fileName, render(data), (err) => {
//         if(err) {
//             console.log(err);
//         }
//     })
// }

init();