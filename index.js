const inquirer = require('inquirer');
const fs = require('fs');

inquirer 
    .prompt([
        {
            type: 'input',
            name: 'letters',
            message: 'please enter up to 3 letters for your logo',
            validate: function(input) {
                const trimmedInput = input.trim();

                if (trimmedInput.length === 0) {
                    return 'you must enter at least 1 character';
                } else if (trimmedInput.length > 3) {
                    return 'maximum 3 characters allowed';
                }

                return true;
            }
        },

    ]).then((res)=> 
    console.log(`your logo will say ${res.letters}`)
    );