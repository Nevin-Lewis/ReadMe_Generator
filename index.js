const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown} = require(`./Develop/utils/generateMarkdown`);

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
          },
          {
            type: 'input',
            name: 'Title',
            message: "What is your project's title",
          },
          {
            type: 'input',
            name: 'Contact',
            message: 'What is your git hub username',
          },
          {
            type: 'input',
            name: 'Description',
            message: 'Tell us about your REPO?',
          },
          {
            type: 'input',
            name: 'Commands',
            message: 'What commands are needed for your repo?' },
          {
            type: 'input',
            name: 'Usage',
            message: 'What are the usage restriction for your repo?',
          },
          {
            type: 'input',
            name: 'Contributing',
            message: 'What info on contributing is needed',
          },
          {
            type: 'input',
            name: 'Tests',
            message: 'What commands are needed to test your repo',
          },
          {
            type: 'list',
            name: 'License',
            message: 'What license is being chosen',
            choices: ["MIT License", "Apache License 2.0", "GNU General Public License v3.0","BSD 3-Clause 'New' or 'Revised' License", "BSD 2-Clause 'Simplified' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal License", "GNU Affero General Public License v3.0", "The Unlicense", "None" ]
          },
        ])
        .then((answers) => {
        const pagecontent = generateMarkdown(answers);
      
        
        fs.writeFile('./Develop/ReadMeFolder/README.md', pagecontent, (err) =>
        err ? console.log(err) : console.log('created readme')
        );
        });



