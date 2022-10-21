// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
// if (data.license)
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
## Email
${data.email}

# title
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



`;
}



//storeed variables and object that been used in index.js
module.exports = generateMarkdown;
