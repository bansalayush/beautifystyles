'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateStyleSheet = generateStyleSheet;
exports.generateStylePropertyWithValue = generateStylePropertyWithValue;
exports.generateStyles = generateStyles;
exports.generateAST = generateAST;
exports.isJSXAttribute = isJSXAttribute;
exports.isStyle = isStyle;

var _babylon = require('babylon');

var babelTypes = require('@babel/types');
var options = {
  sourceType: 'module',
  plugins: [
  // enable jsx syntax
  'jsx', 'classProperties', 'flow', 'doExpressions', 'objectRestSpread']
};
function generateStyleSheet(styleNames, styleProperties, existingStyleObjects) {
  var styleObjects = styleNames.map(function (item, index) {
    return babelTypes.objectProperty(babelTypes.identifier(item), styleProperties[index]);
  });
  styleObjects.push.apply(styleObjects, existingStyleObjects);
  return babelTypes.variableDeclaration('const', [babelTypes.variableDeclarator(babelTypes.identifier('styles'), babelTypes.callExpression(babelTypes.memberExpression(babelTypes.identifier('StyleSheet'), babelTypes.identifier('create')), [babelTypes.objectExpression(styleObjects)]))]);
}

// TODO: check type of propertyvalue to generate corresponding literal
function generateStylePropertyWithValue(propertyName, propertyValue) {
  return babelTypes.objectProperty(babelTypes.identifier(propertyName), babelTypes.numericLiteral(propertyValue));
}

function generateStyles(styleName) {
  return babelTypes.jsxAttribute(babelTypes.jsxIdentifier('style'), babelTypes.jsxExpressionContainer(babelTypes.memberExpression(babelTypes.identifier('styles'), babelTypes.identifier(styleName))));
}
function generateAST(code) {
  var ast = void 0;
  try {
    ast = (0, _babylon.parse)(code, options);
  } catch (error) {
    console.log(error);
    return 'Oops!! error parsing the tree';
  }
  return ast;
}

function isJSXAttribute(type) {
  return type === 'JSXAttribute';
}

function isStyle(name) {
  return name === 'style';
}