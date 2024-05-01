var inquirer = require('inquirer')
const fs = require('fs')

// Array of license option in Github
const licenseOptions = ['N/A', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Publeic License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']

// Generates content for readme
const generateContent = ({ title, description, installation, contribution, test, license, github, email, badge }) => `${badge}
# ${title}


## Description

${description}

## Table of Contents

- <a href=#install>Installation</a>
- <a href=#usage>Usage</a>
- <a href=#credit>Credits</a>
- <a href=#license>License</a>
- <a href=#badges>Badges</a>
- <a href=#feature>Features</a>
- <a href=#contributing>Contributing</a>
- <a href=#test>Tests</a>
- <a href=#question>Questions</a>

## <span id=install>Installation</span>

${installation}

## <span id=usage>Usage</span>



## <span id=credit>Credits</span>



## <span id=license>License</span>

${license}


## <span id=badges>Badges</span>



## <span id=feature>Features</span>



## <span id=contributing>How to Contribute</span>

${contribution}

## <span id=test>Tests</span>

${test}

## <span id=question>Questions</span>

If you have any questions, you can reach me @ <a href="github.com/${github}" target='_blank'>Github.com/${github}</a> 
${email}
`

// Prompts user for information to put in readme
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
            message: 'What are the installation instructions?',
            default: 'N/A'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines?',
            default: 'N/A'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions?',
            default: 'N/A'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is your license for the project?',
            choices: licenseOptions
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
    .then((answers) => {

        // Gets badge icon based on license picked
        const badgeIcon = licenseType => {
            if (licenseType === licenseOptions[0]) {
                return ''
            } else if (licenseType === licenseOptions[1]) {
                return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            } else if (licenseType === licenseOptions[2]) {
                return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            } else if (licenseType === licenseOptions[3]) {
                return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            } else if (licenseType === licenseOptions[4]) {
                return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
            } else if (licenseType === licenseOptions[5]) {
                return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            } else if (licenseType === licenseOptions[6]) {
                return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
            } else if (licenseType === licenseOptions[7]) {
                return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
            } else if (licenseType === licenseOptions[8]) {
                return '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)'
            } else if (licenseType === licenseOptions[9]) {
                return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
            } else if (licenseType === licenseOptions[10]) {
                return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
            } else if (licenseType === licenseOptions[11]) {
                return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)'
            } else if (licenseType === licenseOptions[12]) {
                return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            } else {
                return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
            }
        }

        const licenseBadge = badgeIcon(answers.license)

        // Adds key:value for badge icons to answers object
        answers['badge'] = licenseBadge

        // Puts in answers from inquirer into readme text
        const readmeContent = generateContent(answers)

        // Creates readme.md
        fs.writeFileSync('readme.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created readme.md!')
        )
    })
