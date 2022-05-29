// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (!githubInput) {
                console.log('Please enter your GitHub username!');
                return false
            }
            return true;
        }
    },

    // email address
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (!emailInput) {
                console.log('Please enter your email!');
                return false
            }
            return true;
        }
    },

    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
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
        validate: descInput => {
            if (!descInput) {
                console.log('Please enter a description!');
                return false
            }
            return true;
        }
    },

    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for your project.',
        validate: installationInput => {
            if (!installationInput) {
                console.log('Please enter installation instructions!');
                return false
            }
            return true;
        }
    },

    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your project.',
        validate: usageInput => {
            if (!usageInput) {
                console.log('Please enter usage information!');
                return false
            }
            return true;
        }
    },

    // License
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license option for your project.',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'The MIT License', 'The Unlicense'],
        validate: licenseInput => {
            if (!licenseInput) {
                console.log('Please enter license information!');
                return false
            }
            return true;
        }
    },

    // Contribution
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines for your project.',
        validate: contributionInput => {
            if (!contributionInput) {
                console.log('Please enter contribution guidelines!');
                return false
            }
            return true;
        }
    },

    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter instructions for testing for your project.',
        validate: testsInput => {
            if (!testsInput) {
                console.log('Please enter testing instructions!');
                return false
            }
            return true;
        }
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
    var answers = await inquirer.prompt(questions);
    const readmeContent = await generateMarkdown(answers);
    await writeToFile('Readme.md', readmeContent);
}

// Function call to initialize app
init();
