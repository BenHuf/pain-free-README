// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },

    // email address
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (!titleInput) {
                console.log('Please enter a title!');
                return false
            }
            return true;
        }
    },

    // Project description
    {
        type: 'input',
        name: 'desc',
        message: 'Please enter a description of your project.', 
    },

    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for your project.',
    },

    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your project.',
    },

    // License
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license option for your project.',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'The Unlicense', 'The MIT License']
    },

    // Contribution
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines for your project.',
    },

    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter instructions for testing for your project.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log('ERROR');
        }

        console.log('Readme generated')
    })
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
    const readmeContent = await generateMarkdown(answers)
    await writeToFile('Readme.md', readmeContent);
}

// Function call to initialize app
init();
