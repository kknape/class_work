// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
// Load the NPM Package inquirer
var inquirer = require("inquirer");

inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
        type: "password",
        message: "What is your password?",
        name: "password"
      },
    
    {
      type: "input",
      message: "What do you want for dinner?",
      name: "dinner"
    },

      {
        type: "list",
        message: "Which restaraunt do you choose?",
        choices: ["Maudie's", "Tuk Tuk", "Taco Bell"],
        name: "restaraunt"
      },

      {
        type: "checkbox",
        message: "Who has the best margaritas?",
        choices: ["Maudie's", "El Mercado", "Matt's El Rancho"],
        name: "marg"
      },

      {
        type: "confirm",
        message: "Are you sure?",
        name: "confirm",
        default: true
      }
    ])

    .then(function(inquirerResponse) {
        if (inquirerResponse.password === "password"){
            console.log(inquirerResponse.dinner);
            console.log(inquirerResponse.restaraunt);
            console.log(inquirerResponse.marg);
        }

        else {
            console.log("That password is not correct. Please try again.");
        }

    });