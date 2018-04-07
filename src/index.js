import generate from 'babel-generator';
import traverse from 'babel-traverse';
import { test1, test2, test3, test4 } from './test';
import {
  generateStyleSheet,
  generateAST,
  isJSXAttribute,
  isStyle,
  generateStyles
} from './ASTUtility';
const babelTypes = require('@babel/types');
const uuidv1 = require('uuid/v1');

let ast = generateAST(test4);
let objectExpressionArray = []; // stores style object to put in stylesheet.create
let styleNames = []; // style names
let nodesToReplace = []; // nodes to replace
traverse(ast, {
  enter(path) {
    // finding pre-existing stylesheet
    if (babelTypes.isVariableDeclaration(path.node)) {
      console.log('variableDeclaration\n, ');
      console.log(JSON.stringify(path.node));
      console.log('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@\n');
      if (babelTypes.isVariableDeclarator(path.node.declarations[0])) {
        console.log('variableDeclarations < === >');
        if (babelTypes.isCallExpression(path.node.declarations[0].init)) {
          console.log('callExpression < == >');
          if (
            babelTypes.isMemberExpression(path.node.declarations[0].init.callee)
          ) {
            console.log('memberExpression < == >');
            if (
              path.node.declarations[0].init.callee.object.name ===
                'StyleSheet' &&
              path.node.declarations[0].init.callee.property.name === 'create'
            ) {
              console.log('stylesheet.create < == >');
              // stylesheetNode = path.node;
            }
          }
        }
      }
    }
    if (babelTypes.isJSXAttribute(path.node)) {
      if (isStyle(path.node.name.name)) {
        // path to which changes will be made
        nodesToReplace.push(path);
        const styleName = uuidv1();
        styleNames.push(styleName);
        objectExpressionArray.push(path.node.value.expression);

        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@\n');
        console.log(JSON.stringify(path.node));
        console.log('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@\n');
      }
    }
  }
});
// This should be inside loop
// replacing inline styles
// const replaceWithThis = generateStyles('dummy');
// styleNode.replaceWith(replaceWithThis);
// const output = generate(ast);
// console.log(output.code);

// generating Stylesheet
////
// const generatedStyleSheet = generateStyleSheet(
//   styleNames,
//   objectExpressionArray
// );
// console.log('----STYLESHEET-----');
// console.log(generate(generatedStyleSheet).code);

// // replacing style object
// nodesToReplace.forEach((styleNode, index) => {
//   let replaceWithThis = generateStyles(styleNames[index]);
//   styleNode.replaceWith(replaceWithThis);
// });
// const output = generate(ast);
// console.log('----CODE----');
// console.log(output.code);
