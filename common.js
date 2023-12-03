export function getClassString(classObj) {
  let classString = '';
  for (let key in classObj) {
    if (classObj[key]) {
      classString += key + ' ';
    }
  }
  return classString.trim();
}

export function getStyleString(obj) {
  if (Object.keys(obj).length === 0) {
    return '';
  }
  return Object.keys(obj)
    .map((key) => {
      if (obj[key] !== undefined && obj[key] !== '') {
        if (key === 'style') {
          return obj[key];
        } else {
          return `${camelToDash(key)}:${obj[key]}`;
        }
      }
      return '';
    })
    .filter(Boolean)
    .join(';');
}

/***
 * number,string distinguish
 */
function processSize(size) {
  if (Number.isNaN(Number(size)) && !(size in SIZE)) {
    return size;
  } else {
    return size + 'px';
  }
}

export const SIZE = {
  default: '',
  small: `${classPrefix}-size-s`,
  medium: `${classPrefix}-size-m`,
  large: `${classPrefix}-size-l`,
  block: `${classPrefix}-size-full-width`,
};
