// TODO: Include packages needed for this application
//cant remember why i need the const { error }
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//inquirer.prompt(questions)
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {},{},{},
];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        const generatedMD = generateMarkdown(response)
        fs.writeFile('README.md', generatedMD, (err) => err ? console.log(err) : console.log('README Created'));
    })
};

// Function call to initialize app
init();
