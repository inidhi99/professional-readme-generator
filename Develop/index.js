// TODO: Include packages needed for this application
// fs is a Node standard library package for reading and writing files
const fs = require("fs");
// inquirer variable 
const inquirer = require("inquirer");
// connecting it to generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        validate: validateInput,
    },
    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "description",
        validate: validateInput,
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('It is essential to link to your GitHub repo so users know where to find more of your work');
                return false;
            }
        }
    },
    

];


//  /* Legacy way: with this.async */
//  validate: function (input) {
//     // Declare function as asynchronous, and save the done callback
//     const done = this.async();


// TODO: Create a function to write README file
function writeToFile(fileName, data) {


}

// TODO: Create a function to initialize app
function init() {


}

// Function call to initialize app
init();
