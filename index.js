const inquirer = require('inquirer');
const fs = require('fs');
const { isHex, isValidColorKey } = require('./lib/colors');
const { createCircle, createTriangle, createSquare } = require('./lib/template');
const { questions } = require('./lib/questions');

inquirer.prompt(questions)
.then((res) => {
  let logo;

  if (res.shape === "Triangle") {
    logo = createTriangle(res);
  } else if (res.shape === "Square") {
    logo = createSquare(res);
  } else {
    logo = createCircle(res);
  }

  fs.writeFile('logo.svg', logo, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
});