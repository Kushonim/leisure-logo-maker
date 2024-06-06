async function getUserInput() {
  const inquirer = await import('inquirer');
  
  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo (up to 3 characters):',
      validate: input => input.length <= 3 || 'Text must be 3 characters or less.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal):',
    },
  ];

  return inquirer.default.prompt(questions);
}

module.exports = getUserInput;
