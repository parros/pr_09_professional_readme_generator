var inquirer = require('inquirer')
const filePath = './readme.md'
const generateContent = ({ title, description, installation, contribution, test, license, github, email}) => `# ${title}

## Description

${description}

## Table of Contents

- <span id=install>Installation</span>
- <span id=usage>Usage</span>
- <span id=credit>Credits</span>
- <span id=license>License</span>
- <span id=badges>Badges</span>
- <span id=feature>Features</span>
- <span id=contributing>Contributing</span>
- <span id=test>Tests</span>
- <span id=question>Questions</span>

## <span id=install>Installation</span>

${installation}

## <span id=usage>Usage</span>



## <span id=credit>Credits</span>



## <span id=license>License</span>

${license}


## <span id=badges>Badges</span>


## <span id=feature>Features</span>


## <span id=contributing>Contributing</span>

${contribution}

## <span id=test>Tests</span>

${test}

## <span id=question>Questions</span>

If you have any questions, you can reach me @ <a href="github.com/${github}" target='_blank'>Github.com/${github}</a> 
${email}
`
const fs = require('fs')
const { default: Choice } = require('inquirer/lib/objects/choice')
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the project description?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines?'
        },
        {
            type: 'input',
            name: 'test',
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
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])
    .then((answers) =>{
        const readmeContent = generateContent(answers)

        fs.writeFileSync('readme.md', readmeContent, (err) => 
            err ? console.log(err) : console.log('Successfully created readme.md!')
    )
})
