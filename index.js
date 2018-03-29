import generate from 'babel-generator';
import traverse from 'babel-traverse';
import { test1, test2, test3 } from './test';
var babelTypes = require('@babel/types');
import { generateAST, isJSXAttribute, isStyle } from './ASTUtility';

let ast = generateAST(test1);
let styleExpression;
let i = 0;
let styleNode;
traverse(ast, {
  enter(path) {
    i++;

    if (isJSXAttribute(path.node.type)) {
      if (isStyle(path.node.name.name)) {
        styleNode = path;
        console.log(JSON.stringify(path.node));
        /** styleExpression contains an array of object mentioned in stylesExpressionObject.js  **/
        // styleExpression = path.node.value.expression;
        // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@\n');
        // console.log(JSON.stringify(styleExpression));
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
const replaceWithThis = babelTypes.jsxAttribute(
  babelTypes.jsxIdentifier('style'),
  babelTypes.jsxExpressionContainer(
    babelTypes.memberExpression(
      babelTypes.identifier('styles'),
      babelTypes.identifier('discountParent')
    )
  )
);
styleNode.replaceWith(replaceWithThis);
const output = generate(ast);
console.log(output.code);
// console.log(i);

// style.root

//  get MemberExpression
//   const ast =  babelTypes.memberExpression(babelTypes.identifier("styles"),babelTypes.identifier(""))
//     set(path.node,"value.expression",ast);
