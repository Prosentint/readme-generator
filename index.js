// Required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions to ask user to fill README
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is you GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Write a short description of your project?",
    },
    {
        type: 'list',
        name: 'license',
        message: "What license does your project have?",
        choices: ['MIT', 'APACHE 2.0', 'GPLL 3.0', 'BSD 3', 'none'],
    },
    {
        type: 'input',
        name: 'installation',
        message: "What command is run to install dependencies?",
        default: "npm i",
    },
    {
        type: 'input',
        name: 'test',
        message: "What command is run to run tests?",
        default: "npm test",
    },
    {
        type: 'input',
        name: 'usage',
        message: "What does the user need to know to use the repo?",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "What does the user need to know to contribute to the repo?",
    },

];

// Function that write input data for README to file 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initialize function
function init() {
    inquirer.prompt(questions).then((inqurierResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inqurierResponses }));
    })
}

// Function call to initialize app
init();
