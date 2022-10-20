// TODO: Include packages needed for this application
// fs is a Node standard library package for reading and writing files
const fs = require("fs");
// inquirer variable 
const inquirer = require("inquirer");
// connecting it to generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
// validate property checks the user input 
const questions = [
inquirer
    .prompt([
// github usernmae 
{
    type: "input",
    name: "github username", 
    message: "What is your Github Username?",
    validate: githubUsernameInput => {
        if (githubUsernameInput) {
            return true;
        } else {
            console.log('please enter your Github Username to continue');
            return false;
        }
    }
}, 
// email address 
{
    type: "input",
    name: "email address ",
    message: "What is your email address  ?",
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('please enter your email address to continue');
            return false;
        }
    }
}, 
// title 
{
    type: "input",
    name: "title",
    message: "What is your project title?",
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter your project title to continue');
            return false;
        }
    }
}, 
// description 
{
    type: "input",
    name: "description",
    message: "Please write a short description of your project ?",
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('please enter project`s description to continue');
            return false;
        }
    }
}, 
// installation 
{
    type: "input",
    name: "installation",
    message: "what command should be run to install dependencies ?",
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('please enter the install dependencies to continue');
            return false;
        }
    }
}, 
// usage ????
{
    type: "input",
    name: "usage",
    message: "Enter your project description ?",
    validate: usageInput  => {
        if (usageInput) {
            return true;
        } else {
            console.log('please enter project description to continue');
            return false;
        }
    }
}, 
// Contributing ????
{
    type: "input",
    name: "Contributing",
    message: "Enter your project description ?",
    validate: contributingInput => {
        if (contributingInput) {
            return true;
        } else {
            console.log('please enter project description to continue');
            return false;
        }
    }
}, 
// Tests
{
    type: "input",
    name: "tests",
    message: "what command should be run to run the test?",
    validate: testsInput => {
        if (testsInput) {
            return true;
        } else {
            console.log('please enter command to run the test to continue');
            return false;
        }
    }
}, 
// license 
{
    type: "list",
    name: "license",
    message: "Please choose a license for your project ?",
    choices: [ 
        "Apache 2.0 License", 
        "Boost Software License 1.0", 
        "BSD 3-Clause License", 
        "BSD 2-Clause License", 
        "Eclipse Public License 1.0", 
        "GNU GPL v3", 
        "GNU GPL v2", 
        "GNU AGPL v3", 
        "GNU LGPL v3",
        "GNU FDL v1.3",
        "The Hippocratic License 2.1",
        "The Hippocratic License 3.0",
        "IBM Public License Version 1.0",
        "ISC License (ISC)",
        "The MIT License",
        "Mozilla Public License 2.0",
        "Attribution License (BY)", 
        "Open Database License (ODbL)", 
        "Public Domain Dedication and License (PDDL)", 
        "The Perl License",
        "The Artistic License 2.0",
        "SIL Open Font License 1.1",
        "The Unlicense",
        "The zlib/libpng License",
    ],
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        } else {
            console.log('please choose a license to continue');
            return false;
        }
    }
}, 
])

.then((response) => {
    writeToFile('log.md', response );
    
}
)


];

//  /* Legacy way: with this.async */
//  validate: function (input) {
//     // Declare function as asynchronous, and save the done callback
//     const done = this.async();


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data), (err)=>
    err ? console.log(err) : console.log("New README created succesfully"); 
}


// TODO: Create a function to initialize app
function init() {


}

// Function call to initialize app
init();
