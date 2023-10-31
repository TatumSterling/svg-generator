const { isHex, isValidColorKey }= require('./colors');

const questions = 
    [
        {
            type: 'input',
            name: 'letters',
            message: 'please enter up to 3 letters for your logo',
            // checks to see if user input is within acceptable range
            validate: function(input) {
                const trimmedInput = input.trim(); // trim method removes any extra white space from user input

                if (trimmedInput.length === 0) {
                    return 'you must enter at least 1 character'; 
                } else if (trimmedInput.length > 3) {
                    return 'maximum 3 characters allowed';
                }

                return true;
            }
        },
        {
            type: 'input',
            name: 'txtColor',
            message: 'What color would you like the text to be? (if you are using a hex color, please include the `#`)',
            validate: function(input) {
                // Check if the input is a valid color keyword or valid hex color
                if (!isValidColorKey(input) && !isHex(input)) {
                    return 'Invalid color format. Please enter a valid color keyword or a hexadecimal color code.';
                }
            
                return true;
                },
            
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
        {
            type: 'input',
            message: 'what color would you like the shape to be?',
            name: 'shapeColor',
            validate: function(input) {
                // Check if the input is a valid color keyword or valid hex color
                if (!isValidColorKey(input) && !isHex(input)) {
                    return 'Invalid color format. Please enter a valid color keyword or a hexadecimal color code.';
                }
            
                return true;
                },
            

        }

    ]

    module.exports= {questions}