// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: 'Input your email',
    name: 'name',
},
{
    type:'input',
    message:'title of project',
    name: 'name',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('READ.me', JSON.stringify(data, null, "\t"), (err)=>{
        if(err)
        console.log("error try again");})
}

// TODO: Create a function to initialize app
function init() {
    console.log(inquire.prompt([questions]));
}

// Function call to initialize app
init();
console.log("hello");