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
            type:
            name: 'installation'
            message:
        }
        {
            type: 'input'
            name: 'usage'
            message: ''
        }
        {
            type: 'input'
            name: 'credits'
            message: 'Are there any collaborators to your project?'
        }
        {
            type:
            name: 'test'
            message:
        }
        {
            type: 'list',
            name: 'license',
            message: 'If any, what license did you use for this project?',
            choices: ['MIT', 'Apache 2.0', 'None']
        }
        {
            type: 'list'
            name: 'badges'
            message: 'If any, what badges do you have?'
        }
        {
            type: 'input'
            name: 'Questions'
            message: 'What is your github?'
        }
    ]).then((answers) => {
        console.log(answers);
        fs.writeFile('README.md', markdown(answers), (err) => err ? console.log(err) : console.log('read me file has been created!'))
    })
}

// Function call to initialize app
init();


// installation
// usage
// contributing
// test
// github username
// email address

// sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

