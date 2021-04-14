// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const profile=("https://github.com/" + data.userName)
  return `
  # ${data.title}
  ${data.badge}
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
  For questions regarding this application please feel free to contact me at:
      - E-mail ${data.email}
      - Github:
      <${profile}>
      `; 
  };

module.exports = generateMarkdown;