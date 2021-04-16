//Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

//Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: "list",
        message: "Please select one of the licenses: ",
        name: "license",
        choices: [
            "Apache",
            "MIT",
            "GNU",
            "GPL"
        ]
    },
    {
        type: 'input',
        message: 'What are the instructions for installing your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What are the instructions for usage of your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contributors to this project?',
        name: 'contributor'
    },
    // {
    //     type: "input",
    //     message: "Please provide a description of the license to use:",
    //     name: "badge"
    // },
    {
        type: 'input',
        message: 'What are your projects tests?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Please enter your Github username:',
        name: 'userName'
    },
    {
        type: "input",
        message: "Please provide your e-mail address for users to contact you with any questions they may have: ",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md file has been generated. Enjoy!")
    });
}

// TODO: Create a function to initialize app

function promptUser(){
    return inquirer.prompt(questions)
}

async function init() {
    console.log("Welcome to READme generator. Complete the the follow questions to begin creating your READme.md: ")
    try {
        const answers = await promptUser();
        const readMe = generateMarkdown(answers);
        writeToFile("README.md", readMe);
        console.log("README file created");
    }catch(err){
        console.log(err);
    }
}

// Function call to initialize app
init();
