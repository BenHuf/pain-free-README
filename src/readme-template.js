module.exports = templateDate => {
    return `
    # ${templateData.title}

    ## Description
    ${templateData.desc}

    ## Table of Contents

    *[Installation](#Installation)
    
    *[Usage](#Usage)
    
    *[License](#License)
    
    *[Contributing](#Contributing)
    
    *[Tests](#Tests)
    
    *[Questions](#Questions)

    ## Installation
    ${templateData.installation}

    ## Usage
    ${templateData.usage}

    ## License
    ${templateData.license}

    ## Contributing
    ${templateData.contributing}
    
    ## Tests 
    ${templateData.tests}
    
    ## Questions
    
    ${templateData.githubName}
    ${templateData.githubLink}
    ${templateData.email}
    
    `;
};




// title

// description
// table of contents
// Installation
// Usage
// License
// Contributing
// Tests 
// Questions
//  -To be linked to user's github page
