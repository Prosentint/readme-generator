// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    const formattedLicense = license.replace(/\s+/g, '');
    return `![GitHub license](https://img.shields.io/badge/license-${formattedLicense}-blue.svg)`;
  }
  // If there is no license, return an empty string
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `* [License](#license)`;
  }
  // If there is no license, return an empty string
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    
  This project is licensed with the ${license} license`;
  }
  // If there is no license, return an empty string
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(data.license)}

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install dependencies, run the following command:

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, use the following command:

  ${data.test}

  ## Questions

  If you have any questions you can reach me directly using email: ${data.email}. 
  Also you can find more or my projects on my GitHub page [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;

