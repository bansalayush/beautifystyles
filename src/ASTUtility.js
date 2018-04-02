import { parse } from 'babylon';
const babelTypes = require('@babel/types');
const options = {
  sourceType: 'module',
  plugins: [
    // enable jsx syntax
    'jsx',
    'classProperties',
    'flow',
    'doExpressions',
    'objectRestSpread'
  ]
};

// TODO: check type of propertyvalue to generate corresponding literal
export function generateStylePropertyWithValue(propertyName, propertyValue) {
  return babelTypes.objectProperty(
    babelTypes.identifier(propertyName),
    babelTypes.numericLiteral(propertyValue)
  );
}

export function generateStyles(styleName) {
  return babelTypes.jsxAttribute(
    babelTypes.jsxIdentifier('style'),
    babelTypes.jsxExpressionContainer(
      babelTypes.memberExpression(
        babelTypes.identifier('styles'),
        babelTypes.identifier(styleName)
      )
    )
  );
}
export function generateAST(code) {
  // console.log('[ASTUtility]', code);
  const ast = parse(code, options);
  return ast;
}

export function isJSXAttribute(type) {
  return type === 'JSXAttribute';
}

export function isStyle(name) {
  return name === 'style';
}
