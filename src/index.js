const fs = require('fs');
const path = require('path');

const componentsDir = 'lib';

const exportStatements = fs.readdirSync(componentsDir)
  .filter(file => file.endsWith('.svelte'))
  .map(file => {
    const componentName = path.parse(file).name;
    return `export { default as ${componentName} } from "./${componentName}.svelte";`;
  });

const indexPath = path.join(componentsDir, 'index.js');

fs.writeFileSync(indexPath, exportStatements.join('\n'));
