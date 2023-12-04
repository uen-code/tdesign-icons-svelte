export const classPrefix = 't';

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

export function camelToDash(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function processSize(size) {
  if (size in SIZE) {
    return '';
  }

  const parsedSize = Number(size);
  if (Number.isNaN(parsedSize)) {
    return size;
  }

  return parsedSize + 'px';
}

export const SIZE = {
  default: '',
  small: `${classPrefix}-size-s`,
  medium: `${classPrefix}-size-m`,
  large: `${classPrefix}-size-l`,
  block: `${classPrefix}-size-full-width`,
};
