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
#readme table of content 

1. [Email] (#Email)
2. [title] (#Title)
3. [Description] (#Description)
4. [Installation] (#Installation)
5. [Usage] (#Usage)
6. [Contribution] (#Contribution)
7. [Tests] (#Tests)
8. [License] (#License)

<a name = "Email"></a> 
## 1. Email
${data.email}

<a name = "Title"></a> 
## 2. Title
${data.title}

<a name = "Description"></a> 
## 3. Description
${data.description}

<a name = "Installation"></a> 
## 4. Installation
${data.installation}

<a name = "Usage"></a> 
## 5. Usage
${data.usage}

<a name = "Contribution"></a> 
## 6. Contribution 
${data.Contribution}

<a name = "Tests"></a> 
## 7. Tests
${data.tests}

<a name = "License"></a> 
## 8. License
${data.license}

${renderLicenseLink(data.license)}
`;
}

//stored variables and object that been used in index.js (export)
module.exports = generateMarkdown;
