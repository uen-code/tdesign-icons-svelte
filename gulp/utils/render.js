function renderChildrenNode(svgElement) {
  const contentArray = [];

  if (svgElement.children && svgElement.children.length > 0) {
    svgElement.children.forEach((childNode) => {
      contentArray.push(generatePathCode(childNode));
    });
  }

  return contentArray;
}

function generatePathCode(pathObject) {
  let pathCode = `<${pathObject.tagName}`;

  if (pathObject.properties) {
    Object.keys(pathObject.properties).forEach((key) => {
      if (key === 'fill') {
        pathCode += ` ${key}="currentColor"`;
      } else {
        pathCode += ` ${key}="${pathObject.properties[key]}"`;
      }
    });
  }

  if (pathObject.children && pathObject.children.length > 0) {
    pathCode += '>';

    pathObject.children.forEach((child) => {
      pathCode += generatePathCode(child);
    });

    pathCode += `</${pathObject.tagName}>`;
  } else {
    pathCode += ' />';
  }

  return pathCode;
}

module.exports = renderChildrenNode;
