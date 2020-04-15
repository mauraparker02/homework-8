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

const writeFileAsync = util.promisify(fs.writeFile);

//user input inquier 
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "Title of application?"
        },
        {
            type: "input",
            name: "Description",
            message: "What does your application do?"
        },
        {
            type: "input",
            name: "Table of Contents",
            message: "What are all the sections of your application?"
        },
        {
            type: "input",
            name: "Installation",
            message: "Installation information?"
        },
        {
            type: "input",
            name: "Usage",
            message: "How do you use the application"
        },
        {
            type: "input",
            name: "License",
            message: "License for application."
        },
        {
            type: "input",
            name: "Contributing",
            message: "Who is contributing"
        },
        {
            type: "input",
            name: "Tests",
            message: "What are tests you've run on your application"
        },
        {
            type: "input",
            name: "Questions",
            message: "?"
        },
    ]);
}

// this function will generate the Readme insert template here and template literal to return a readme template filled in 

function generateREADME(answers) {
    return `
    ```
    "GIVEN the developer has a GitHub profile and a repository"
    
    "WHEN prompted for the developer's GitHub username and repo specific information"
    
    "THEN a README for the repo is generated"
    ```
    - - -`;
}

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

