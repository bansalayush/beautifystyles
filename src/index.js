import generate from 'babel-generator';
import traverse from 'babel-traverse';
import { test1, test2, test3, test4, test5 } from './test';
var babelTypes = require('@babel/types');
import {
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
const generatedStyleSheet = babelTypes.variableDeclaration(
  // kind:
  'const',
  // declarations:
  [
    babelTypes.variableDeclarator(
      babelTypes.identifier('styles'),
      babelTypes.callExpression(
        babelTypes.memberExpression(
          babelTypes.identifier('StyleSheet'),
          babelTypes.identifier('create')
        ),
        // arguments
        [
          babelTypes.objectExpression([
            // property2
            babelTypes.objectProperty(
              babelTypes.identifier('linecolor'),
              babelTypes.objectExpression([
                // properties
                // property 1
                generateStylePropertyWithValue('height', 40),
                // property 2
                generateStylePropertyWithValue('width', 50)
              ])
            ),

            // discount parent
            babelTypes.objectProperty(
              babelTypes.identifier('discountParent'),
              babelTypes.objectExpression([
                // properties
                // property 1
                generateStylePropertyWithValue('height', 40),
                // property 2
                generateStylePropertyWithValue('width', 50)
              ])
            )
          ])
        ]
      )
    )
  ]
);
console.log(generate(generatedStyleSheet).code);
