const createTransformStream = require("./transform");
const svelteTemplate = require("./svelte-template");

function useTemplate() {
  return createTransformStream((svelteElementString) => {
    const parsedSvelteElement = JSON.parse(svelteElementString);
    return svelteTemplate(parsedSvelteElement.attrs, parsedSvelteElement.content);
  });
}

module.exports = useTemplate