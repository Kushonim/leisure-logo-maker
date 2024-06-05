import fs from 'fs';
import getUserInput from './lib/prompt.js';
import generateSVG from './lib/svg.js';

async function run() {
  try {
    const answers = await getUserInput();
    const svgContent = generateSVG(answers);

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error generating SVG:', error);
  }
}

run();
