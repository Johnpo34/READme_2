// TODO: Create a function to initialize app
const inquirer = require('inquirer')
const markdown = require('./utils/generateMarkdown')
const fs = require('fs')

function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a detailed description of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Instructions on how to install.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How would you use this?'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Are there any collaborators to your project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How would you test this project'
        },
        {
            type: 'list',
            name: 'license',
            message: 'If any, what license did you use for this project?',
            choices: ['MIT', 'Apache 2.0', 'None']
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'What is your github?'
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'What is your email?'
        }
    ]).then((answers) => {
        console.log(answers);
        fs.writeFile('README.md', markdown(answers), (err) => err ? console.log(err) : console.log('read me file has been created!'))
    })
}

// Function call to initialize app
init();


// entitled Description, Installation, Usage, Contributing, and Tests
