import generate from 'babel-generator';
import traverse from 'babel-traverse';
import { test1, test2, test3, test4, test5 } from './test';
var babelTypes = require('@babel/types');
import {
  generateStyleSheet,
  generateStylePropertyWithValue,
  generateAST,
  isJSXAttribute,
  isStyle,
  generateStyles
} from './ASTUtility';

let ast = generateAST(test4);
let styleExpression;
let styleNode;
traverse(ast, {
  VariableDeclaration(path) {
    console.log(JSON.stringify(path.node));
    // if (babelTypes.isJSXAttribute(path.node.type)) {
    //   // if (isStyle(path.node.name.name)) {
    //   // }
    // }
  }
});
// babelTypes.variableDeclarator(;
// babelTypes.callExpression()
// babelTypes.objectExpression();
// generateStyleSheet (['discount','discountParent'],[{'height':40,}])
const generatedStyleSheet = generateStyleSheet(['parent', 'dummyParent']);
console.log(generate(generatedStyleSheet).code);
