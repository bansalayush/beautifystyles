import { parse } from 'babylon';

const options = {
  sourceType: 'module',
  plugins: [
    // enable jsx syntax
    'jsx',
    'classProperties'
  ]
};
export function generateAST(code) {
  const ast = parse(code, options);
  return ast;
}

export function isJSXAttribute(type) {
  return type === 'JSXAttribute';
}

export function isStyle(name) {
  return name === 'style';
}
