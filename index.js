//node modules

const inquirer = require('inquirer');
const fs = require('fs');

//inquirer to generate questions

inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
            //validate property to check that the user provided a value
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'Describe your app.',
            name: 'description',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'Instructions to be followed.',
            name: 'instructions',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'Who worked on the app?',
            name: 'credits',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'How do you use the app?',
            name: 'usage',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            //list of license types
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices: ['MIT License', 'GPL License', 'Apache License', 'GNU License', "N/A"],
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'Git username?',
            name: 'git',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'E-Mail:',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
    ]
).then(({
    title,
    description,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution
}) => {
    //template to be used
    const template = `# ${title}

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Credits](#credits)
* [License](#license)
# Description
${description}
## Usage
${usage}
## Contribution
${contribution}
### Instructions
${instructions}
## Credits
${credit}
## License
[!${license}

#Contact
* GitHub : ${git}
* E-mail : ${email}`;
//function to create the README using fs
createNewFile(title, template);
}
);
//building the createNewFile function
function createNewFile(fileName, data){
    //fs
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err)=> {
        if(err){
            console.log(err)
        }
        console.log('Your README has been generated');
    })
}