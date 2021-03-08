const fs = require('fs');
const lilPath = `${__dirname}/src/lil-components.css`;

fs.writeFileSync(lilPath, '');

function read (name, index) {
  const path = `${__dirname}/src/${name.toLowerCase()}/style.css`;
  const options = { encoding:'utf8', flag:'r' };
  const content = fs.readFileSync(path, options);
  const comment = index === 0
    ? `/* ${name} -------------------------------- */\r\n`
    : `\r\n/* ${name} -------------------------------- */\r\n`;
  const data = comment + content;
  fs.appendFileSync(lilPath, data);
}

const components = ['Colors', 'Buttons', 'Alert', 'Headline', 'Info', 'Stat', 'Pricing', 'Social'];

for (let i = 0; i < components.length; i++) {
  read(components[i], i)
}
