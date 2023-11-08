import {classPrefix} from './config'


/**
 * 获取样式前缀
 */
export function usePrefixClass(COMPONENT_NAME) {
  return COMPONENT_NAME ? `${classPrefix}-${COMPONENT_NAME}` : classPrefix;
}

/**
 * 获取样式(svelte无法像vue可以直接传递样式数组、对象)
 */
export function getClassString(classObj) {
  let classString = '';
  for (let key in classObj) {
    if (classObj[key]) {
      classString += key + ' ';
    }
  }
  return classString.trim();
}

/***
 * 获取样式 样式对象转为字符串
 */
export function getStyleString(obj) {
  if (Object.keys(obj).length === 0) {
    return '';
  }
  return Object.keys(obj)
    .map(key => `${camelToDash(key)}:${obj[key]}`)
    .join(';');
}

/***
 * 处理驼峰命名 minHeight => min-height
 * @param str
 * @returns {string}
 */
function camelToDash(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * 字符串首字母大小写
 */
export function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (char) => char.toUpperCase());
}

/**
 * 组件样式大小
 */
export const SIZE = {
  default: '',
  small: `${classPrefix}-size-s`,
  medium: `${classPrefix}-size-m`,
  large: `${classPrefix}-size-l`,
  block: `${classPrefix}-size-full-width`,
}

/**
 * 组件样式状态
 */
export const STATUS = {
  loading: `${classPrefix}-is-loading`,
  disabled: `${classPrefix}-is-disabled`,
  focused: `${classPrefix}-is-focused`,
  active: `${classPrefix}-is-active`,
  checked: `${classPrefix}-is-checked`,
}