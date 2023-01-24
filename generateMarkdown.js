// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }else if (license === 'Apache-2.0'){
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if(license === 'MPL-2.0'){
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  }else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if(license === 'Apache-2.0'){
    return '[Apache](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'MPL-2.0'){
    return '[Mozilla](https://opensource.org/licenses/MPL-2.0)';
  }else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return '';
  }else {
    return `## License this porject is license under the ${renderLicenseLink(license)} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}

  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [License](#license)
  - [Contact](#contact)
  
  ## Installation
  
  To install the dependencies, run the following command:
  
  \`\`\`
  ${data.install}
  \`\`\`
  
  ## Usage
  
  ${data.info}
  
  ## Contribution
  
  ${data.contribution}
  
  ## Test
  
  To run tests, run the following command:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ${renderLicenseSection(data.license)}
  
  ## Contact
  
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
