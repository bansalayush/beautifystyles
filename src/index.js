import generate from 'babel-generator';
import traverse from 'babel-traverse';
import { test1, test2, test3 } from './test';
import {
  generateStyleSheet,
  generateAST,
  isJSXAttribute,
  isStyle,
  generateStyles
} from './ASTUtility';
const babelTypes = require('@babel/types');
const uuidv1 = require('uuid/v1');

let ast = generateAST(test1);
let objectExpressionArray = []; // stores style object to put in stylesheet.create
let styleNames = []; // style names
let nodesToReplace = []; // nodes to replace
traverse(ast, {
  enter(path) {
    if (isJSXAttribute(path.node.type)) {
      if (isStyle(path.node.name.name)) {
        // path to which changes will be made
        nodesToReplace.push(path);
        const styleName = uuidv1();
        styleNames.push(styleName);
        objectExpressionArray.push(path.node.value.expression);

        // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@\n');
        // console.log(JSON.stringify(path.node));
        // console.log('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@\n');
        // let styleExpressionArray = styleExpression.properties;
        // const obj = JSON.stringify(styleExpressionArray);
        // let c = JSON.parse(obj); // converting back to object
        // console.log(obj);

        /** attributes to consider
         key.name,value.type,value.value **/
        // c.forEach(styleExpression => {
        //   if (styleExpression.value.type === 'StringLiteral') {
        //     console.log(
        //       styleExpression.key.name +
        //         ' ' +
        //         `'${styleExpression.value.value}'`
        //     );
        //   } else {
        //     console.log(
        //       styleExpression.key.name + ' ' + styleExpression.value.value
        //     );
        //   }
        // });

        //generating styles.
        // const generatedAST = babelTypes.memberExpression(
        //   babelTypes.identifier('styles'),
        //   babelTypes.identifier('discountParent')
        // );
        // console.log('================  before  =================');
        // console.log(JSON.stringify(styleExpression));
        // console.log('====================================\n\n\n\n\n');
        // //replace with styles.
        // styleExpression.properties = generatedAST;
        // path.replaceWith(generatedAST);

        // console.log('=================  after  ===================');
        // console.log(JSON.stringify(styleExpression));
        // console.log('====================================');
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
const generatedStyleSheet = generateStyleSheet(
  styleNames,
  objectExpressionArray
);
console.log('----STYLESHEET-----');
console.log(generate(generatedStyleSheet).code);

// replacing style object
nodesToReplace.forEach((styleNode, index) => {
  let replaceWithThis = generateStyles(styleNames[index]);
  styleNode.replaceWith(replaceWithThis);
});
const output = generate(ast);
console.log('----CODE----');
console.log(output.code);
