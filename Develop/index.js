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
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Which license does your project use?',
        choices: ['Apache-2.0', 'MIT', 'none'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please list your collaborators, if any.',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Please enter your email.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please provide clear instructions for use.',
        name: 'usage',
    }
];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        const generatedMD = generateMarkdown(response)
        fs.writeFile('testREADME.md', generatedMD, (err) => err ? console.log(err) : console.log('new README Created'));
    })
};

// Function call to initialize app
init();
