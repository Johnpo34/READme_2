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
            type: 'list',
            name: 'license',
            message: 'If any, what license did you use for this project?',
            choices: ['MIT', 'Apache 2.0', 'None']
        }
    ]).then((answers) => {
        console.log(answers);
        fs.writeFile('README.md', markdown(answers), (err) => err ? console.log(err) : console.log('read me file has been created!'))
    })
}

// Function call to initialize app
init();
