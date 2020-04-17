// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util"); 

const writeFileAsync = util.promisify(fs.writeFile); //ES6 for .this so that 

//user input inquier 
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What's the title of the application?"
        },
        {
            type: "input",
            name: "description",
            message: "What does the application do?"
        },
        {
            type: "input",
            name: "tableOfContents",
            message: "What are all the sections of the application?"
        },
        {
            type: "input",
            name: "installation",
            message: "How do you install this application?"
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use the application"
        },
        {
            type: "input",
            name: "license",
            message: "What is the copyright information for your application?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Who needs contributing credit?"
        },
        {
            type: "input",
            name: "tests",
            message: "what are tests you've run on your application"
        },
        {
            type: "input",
            name: "questions",
            message: "?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your Github email:"
        },
        {
            type: "input",
            name: "username",
            message: "What's your Github username:"
        },
    ]);
}

//then you want to define writefileASync then use template literal 
// this function will generate the Readme insert template here and template literal to return a readme template filled in 

//Generate the README by creating a template and filling it in with user answers//
function generateReadMe(answer) {
    return `
# ${answer.title}
## Project Description:
### ${answer.description}
## Table of Contents:
* [Github Project] (#github-project)
* [link] (#live-link)
* [email] (#githum-email)
* [Installation](#installation)
* [Usage](#usage)
* [contributing] (#credits)
* [License](#license)
* [Test] (#test)
## Github Project: 
### https://github.com/${answer.username}/${answer.title.toLowerCase().split(" ").join("-")}
## Live Link: 
### https://${answer.username}.github.io/${answer.title.toLowerCase().split(" ").join("-")}/
## Github Email: 
### ${answer.email}
## Installation:
### ${answer.installation}
## Usage:
### ${answer.usage}
## Credits:
### ${answer.contributing}
## License:
### ${answer.license}
## Test:
### ${answer.test}
`;
  }

  promptUser()
  .then(function (answers) {
    const readMe = generateReadMe(answers); 
    console.log(readMe);
    return writeFileAsync("README.md", readMe);
  })
  .then(function () {
    console.log("Successful");
  })
  .catch(function (err) { 
    console.log(err);
  });

  //getting application to run Async

// async function init() {
//     console.log("hi")
//     try {
//         const answers = await promptUser();

//         const html = generateREADME(answers);

//         await writeFileAsync("index.html", html);

//         console.log("Successfully wrote to index.html");
//     } catch (err) {
//         console.log(err);
//     }
// }

// init();










//Pseduo Code: 
//For the Readme 

// Create a command-line application that dynamically generates a README.md from a user's input.

//You'll need to add fs, and an inquier to grab the user data
//Then You'll need to create a template for the reame 
//You'll need to use template literal to store the data retreived from the Inquier 
//

//  The application will be invoked with the following command:


//``` is README syntax meaning you are about to present a command 
    //shell is the terminal with different versions of the command line prompt 

//a markdown file is like an HTML file 

// ```sh 
// node index.js
// ```

//^^ confused a bit about what it means by invoking it? Will there be a function possibly used to create that specific call? 


// The user will be prompted for their GitHub username and other information pertaining to the project the README is for.

// The README will be populated with the following:

// * At least one badge //what is a badge? 
// * Project title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture
//   * User GitHub email

// Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

// ```
// AS A developer

// I WANT a README generator

// SO THAT I can easily put together a good README for a new project
// ```

// Refer to the [Good README guide](../../01-HTML-Git-CSS/04-Supplemental/Good-README-Guide/README.md).

