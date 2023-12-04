const { parse } = require('svg-parser');
const createTransformStream = require('./transform');
const renderChildrenNode = require('./utils/render');

function astToElement(svgElement, file) {
  const fileName = file.basename;
  const attrs = { class: `t-icon t-icon-${fileName.substring(0, fileName.lastIndexOf('.'))}` };
  return { attrs: attrs, content: renderChildrenNode(svgElement) };
}

function svgToElement() {
  return createTransformStream((svgString, file) => {
    const ast = parse(svgString);
    const svgElement = astToElement(ast.children[0], file);

    return JSON.stringify(svgElement);
  });
}

module.exports = svgToElement;
