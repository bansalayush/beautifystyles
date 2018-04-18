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

export function convertCode(code) {
  let returnCode = '';
  // console.log('before generating ast');
  let ast = generateAST(code);
  if (ast === 'Oops!! error parsing the tree') {
    // console.log('after generating ast');
    return ast;
  }
  let objectExpressionArray = []; // stores style object to put in stylesheet.create
  let styleNames = []; // style names
  let nodesToReplace = []; // style nodes to replace with styles.something

  let existingStyleSheetNode;
  let existingStyleSheetName = '';
  let existingStyleObjects = [];
  traverse(ast, {
    enter(path) {
      // finding pre-existing stylesheet
      // looking for expressions with stylesheet.create as RHS
      if (babelTypes.isVariableDeclaration(path.node)) {
        console.log('variableDeclaration\n, ');
        if (babelTypes.isVariableDeclarator(path.node.declarations[0])) {
          console.log('variableDeclarator < === >');
          // getting variable name of existing stylesheet
          existingStyleSheetName = path.node.declarations[0].id.name;
          console.log(existingStyleSheetName);
          if (babelTypes.isCallExpression(path.node.declarations[0].init)) {
            console.log('callExpression < == >');
            if (
              babelTypes.isMemberExpression(
                path.node.declarations[0].init.callee
              )
            ) {
              console.log('memberExpression < == >');
              if (
                path.node.declarations[0].init.callee.object.name ===
                  'StyleSheet' &&
                path.node.declarations[0].init.callee.property.name === 'create'
              ) {
                existingStyleSheetNode = path;
                console.log('stylesheet.create < == >');
                //getting existing style objects present in  stylesheet
                existingStyleObjects =
                  path.node.declarations[0].init.arguments[0].properties;
                // console.log(existingStyleObjects);
              }
            }
          }
        }
      }
      if (babelTypes.isJSXAttribute(path.node)) {
        if (isStyle(path.node.name.name)) {
          // path to which changes will be made
          if (babelTypes.isJSXExpressionContainer(path.node.value)) {
            if (babelTypes.isObjectExpression(path.node.value.expression)) {
              console.log('getting style={{}}');
              nodesToReplace.push(path);
              const styleName = 'a' + uuidv1();
              styleName.replace('-', '');
              styleNames.push(styleName);
              objectExpressionArray.push(path.node.value.expression);
            }
          }
        }
      }
    }
  });

  // generating Stylesheet
  ////
  // checking if we have pre-existing stylesheet or not
  if (objectExpressionArray.length > 0) {
    // merging existing stylesheet data with to be converted data
    const generatedStyleSheet = generateStyleSheet(
      styleNames,
      objectExpressionArray,
      existingStyleObjects
    );
    // console.log(generatedStyleSheet);
    console.log('----STYLESHEET-----');

    // replacing old stylesheet with newly generated stylesheet
    if (existingStyleSheetNode) {
      existingStyleSheetNode.replaceWith(generatedStyleSheet);
    } else {
      returnCode = generate(generatedStyleSheet).code;
    }

    // replacing style object
    nodesToReplace.forEach((styleNode, index) => {
      let replaceWithThis = generateStyles(styleNames[index]);
      styleNode.replaceWith(replaceWithThis);
    });
  }
  try {
    const output = generate(ast);
    returnCode = `${returnCode} \n${output.code}`;
  } catch (error) {
    console.log(error);
  }
  // console.log(returnCode);
  return returnCode;

  // console.log('----CODE----');
}

// console.log(convertCode(test4));
