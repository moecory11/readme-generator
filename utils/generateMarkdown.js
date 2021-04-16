// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
        // let badge;
        // if (license === "Apache") {
        //         badge = `[![License](https://img.shields.io/badge/license-Apache-brightgreen)]`
        // }
        // else if (license === "MIT") {
        //         badge = `[![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen)]`
        // }
        // else if (license === "GNU") {
        //         badge = `[![License: IPL 1.0](https://img.shields.io/badge/license-GNU-brightgreen)]`
        // }
        // else if (license === "GPL") {
        //         badge = `[![License: Artistic-2.0](https://img.shields.io/badge/license-GPL-brightgreen)]`
        // } else {
        //         console.log("");
        // }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

//Create a function to generate markdown for README

function generateMarkdown(data) {
        const profile = ("https://github.com/" + data.userName)
        return `
  # ${data.title}
  ![License: BADGE](https://img.shields.io/badge/license-${data.license}-brightgreen)
  ## Description 
       ${data.description}
  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
          ${data.installation}
  ## Usage 
          ${data.usage}
  ## License
          ${data.license}
  ## Contributing
          ${data.contributor}
  ## Tests
          ${data.tests}
  ## Questions
   Any questions regarding this application please feel free to contact me at: 
      - E-mail ${data.email}
      - Github:
      <${profile}>
      `;

};

module.exports = generateMarkdown;