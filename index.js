// packages neccesary for project
const inquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// array of questions 
const questions = [
    {
        type: 'input',
        name: 'github username',
        message: 'What is your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Include a short description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project use?',
        choices: ['Apache-2.0', 'MIT','MPL-2.0'],
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command hsould be run for install dependencies?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'info',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?'
    }

]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log("Scuccessfully wrote to file")
        };
    });
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("READ.md",markdown);
    });
}

// Function call to initialize app
init();
