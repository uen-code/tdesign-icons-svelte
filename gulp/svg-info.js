const { parse } = require('svg-parser');
const createTransformStream = require('./transform');
const renderChildrenNode = require('./utils/render');

function astToElement(svgElement) {
  return { attrs: svgElement.properties, content: renderChildrenNode(svgElement) };
}

function svgToElement() {
  return createTransformStream((svgString) => {
    const ast = parse(svgString);
    const svgElement = astToElement(ast.children[0]);

    return JSON.stringify(svgElement);
  });
}

module.exports = svgToElement
