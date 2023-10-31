const { isHex, isValidColorKey } = require('./colors');

const questions =
    [
        {
            type: 'input',
            name: 'letters',
            message: 'please enter up to 3 letters for your logo',
            // checks to see if user input is within acceptable range
            validate: function (input) {
                const trimmedInput = input.trim(); // trim method removes any extra white space from user input

                if (trimmedInput.length === 0) {
                    return 'you must enter at least 1 character';
                } else if (trimmedInput.length > 3) {
                    return 'maximum 3 characters allowed';
                }

                return true;
            }
        },
        // asks user how they would like to choose their color, either a color keyword or hexadecimal
        {
            type: 'list',
            name: 'textColorChoice',
            message: 'Do you want to use a color keyword or a hex color for the text?',
            choices: ['Color Keyword', 'Hex Color'],
        },
        {
            type: 'input',
            name: 'txtColor',
            message: 'Please enter a valid color keyword',
            validate: function (input) {
                if (isValidColorKey(input) === true) {
                    return true;
                } else {
                    return 'Invalid color format. Please enter a valid color keyword';
                }
            },
            when: (answers) => answers.textColorChoice === 'Color Keyword',
        },
        {
            type: 'input',
            name: 'txtColor',
            message: 'Enter a hex color (including #) for the text:',
            validate: function (input) {
                if (isHex(input) === true) {
                    return true;
                } else {
                    return 'Invalid hex color format. Please enter a valid hexadecimal color.';
                }
            },
            when: (answers) => answers.textColorChoice === 'Hex Color',
        },
        {
            type: 'list',
            message: 'please select a shape',
            name: 'shape',
            choices: [
                "Triangle",
                "Square",
                "Circle"
            ],
        },
                // asks user how they would like to choose their color, either a color keyword or hexadecimal
        {
            type: 'list',
            name: 'shapeColorChoice',
            message: 'Do you want to use a color keyword or a hex color for the text?',
            choices: ['Color Keyword', 'Hex Color'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a valid color keyword',
            validate: function (input) {
                if (isValidColorKey(input) === true) {
                    return true;
                } else {
                    return 'Invalid color format. Please enter a valid color keyword.';
                }
            },
            when: (answers) => answers.shapeColorChoice === 'Color Keyword',
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a hex color (including #) for the text:',
            validate: function (input) {
                if (isHex(input)=== true) {
                    return true;
                } else {
                    return 'Invalid hex color format. Please enter a valid hexadecimal color.';
                }
            },
            when: (answers) => answers.shapeColorChoice === 'Hex Color',
        },

    ]

module.exports = { questions }