// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license) {
    const formattedLicense = license.replace(/\s+/g, '');
    return `![GitHub license](https://img.shields.io/badge/license-${formattedLicense}-blue.svg)`;
  }
  // If there is no license, return an empty string
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

`;
}

module.exports = generateMarkdown;

