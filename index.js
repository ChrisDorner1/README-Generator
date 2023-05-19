// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
        },{
            type: 'input',
            name: 'description',
            message: 'Please describe the functionality of your App'
        },{
            type: 'input',
            name: 'credits',
            message: "Please paste the links to used API's and list any contributers, if none are used, and this is a solo project, leave blank",
        }
        ,{
            type: 'list',
            name: 'license',
            message: 'does this project have a liscense?',
            choices: ["MIT", "ISC", "MPL_2.0", "Zlib", "Boost_1.0", "Apache_2.0", "EPL_1.0", "OFL_1.1", "BSD 3-Clause License", "None", "GNU GPL v3", "Hippocratic 2.1", "IBM Public License Version 1.0", "The Perl License", "The Unlicense", "The Do What the Fuck you want to Public License"],
        },{
            type: 'input',
            name: 'usage',
            message: 'Please describe how to use your App',
        },{
            type:  'input',
            name: 'installation',
            message: 'Please tell eveyone how to install your App including the npm command, if there is one'
        },{
            type: 'input',
            name: 'tests',
            message: 'What are the test commands for your App?'
        },{
            type: 'input',
            name: 'email',
            message: 'Please enter your email so you may be contacted for any questions'
        },{
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub link so you may be contacted for any questions'
        }
    ]).then(answers => {
        console.log(answers)
        const readMeContent = generateMarkdown(answers)
        fs.writeFile("README.md", readMeContent, err => err ? console.log(err): console.log("File Created"))
    })
}

// Function call to initialize app
init();
