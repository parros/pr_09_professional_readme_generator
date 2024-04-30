var inquirer = require('inquirer')
const filePath = './readme.md'
const content = `# Readme

This is the contents of my readme.
`

const fs = require('fs')
const { default: Choice } = require('inquirer/lib/objects/choice')
inquirer
    .prompt([
        {
            type: 'input',
            name: 'project title',
            message: 'What is the project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the project description?'
        },
        {
            type: 'input',
            name: 'installation instructions',
            message: 'What are the installation instructions?'
        },
        {
            type: 'input',
            name: 'contribution guidelines',
            message: 'What are the contribution guidelines?'
        },
        {
            type: 'input',
            name: 'test instructions',
            message: 'What are the test instructions?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is your license for the project?',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Publeic License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'gitHub username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email address',
            message: 'What is your email address?'
        }
    ])
    .then((response) =>
        fs.writeFile(filePath, content, (err) => {
            err ? console.error(err) 
            : console.log(`File written to ${filePath}`)
    })
    )