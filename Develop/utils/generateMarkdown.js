function questionEmail(email) {
  if (email !== ''){
    return `If you have any questions you can email me at ${email}`
  };
  return ''
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none"){
   return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`
  };
  return ""
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//links table of contents 
//"none" must be an option in the choices on the prompt
function renderLicenseLink(license) {
  if (license !== "none"){
    return `- [License](#license)`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## License\n
    This project is licensed with the ${license} license.`
  }
};

// TODO: Create a function to generate markdown for README
//whats a markdown
function generateMarkdown(data) {
  return `# ${data.title}
    ${renderLicenseBadge(data.license)}

    ## Description\n
    ${data.description}

    ## Table of Contents
      
    - [Usage](#usage)
    - [Credits](#credits)
    ${renderLicenseLink(data.license)}
    - [Questions](#questions)

    ## Usage\n
    ${data.usage}

    ## Credits\n
    ${data.credits}

    ${renderLicenseSection(data.license)}

    ## Questions\n
    ${questionEmail(data.email)}\n
    You can check out more of my work at - [www.github/${data.github}](#http://github.com/${data.github})
`
};


module.exports = generateMarkdown;


//questions section asks for email and github username
//"if you have any questions you can email me at ${data.email}"
//check out more of my work at [www.github/${data.github}](#http://github.com/${data.github})