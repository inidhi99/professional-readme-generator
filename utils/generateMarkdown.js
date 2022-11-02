// function that returns a license badge and link based on which license is passed in and If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = " "
if (license === "Apache 2.0 License"){
licenseLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
} else if (license ===  "The MIT License"){
 licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
} else if  (license ===  "The zlib/libpng License") {
  licenseLink = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
} else {
  licenseLink = " "
}
return licenseLink 
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `
#Table of Content 
[Username](#username) <br>
[Email](#email)  <br>
[Title](#title) <br>
[Description](#description) <br>
[Installation](#installation) <br>
[Usage](#usage) <br>
[Contribution](#contribution) <br>
[Tests](#tests)  <br>
[License](#license)


## Username
<a href="https://github.com/${data.username}"> ${data.username} </a> 

## Email
<a href="mailto:${data.email}?subject=SweetWords"> ${data.email} </a> 

## Title
${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution 
${data.Contribution}

## Tests
${data.tests}

## License
${data.license}

${renderLicenseLink(data.license)}
`;
}

//stored variables and object that been used in index.js (export)
module.exports = generateMarkdown;
