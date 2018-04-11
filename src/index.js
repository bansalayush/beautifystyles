import generate from 'babel-generator';
import traverse from 'babel-traverse';
import { test1, test2, test3, test4 } from './test';
import {
  generateStyleSheet,
  generateAST,
  isJSXAttribute,
  isStyle,
  generateStyles,
  isStyleSheet
} from './ASTUtility';
const babelTypes = require('@babel/types');
const uuidv1 = require('uuid/v1');

export function convertCode(code) {
  let codeToReturn = '';
  let ast = generateAST(code);
  if (ast === 'Oops!! error parsing the tree') {
    // return ast;
  }
  let objectExpressionArray = []; // stores style object to put in stylesheet.create
  let styleNames = []; // style names
  let nodesToReplace = []; // nodes to replace

  let existingStyleSheetNode;
  let existingStyleSheetName = '';
  let existingStyleObjects = [];
  traverse(ast, {
    enter(path) {
      // finding pre-existing stylesheet
      // looking for expressions with stylesheet.create as RHS
      if (isStyleSheet(path)) {
        existingStyleSheetNode = path;
        // getting variable name of existing stylesheet
        existingStyleSheetName = path.node.declarations[0].id.name;
        //getting existing style objects present in  stylesheet
        existingStyleObjects =
          path.node.declarations[0].init.arguments[0].properties;
      }

      if (babelTypes.isJSXAttribute(path.node)) {
        if (isStyle(path.node.name.name)) {
          // path to which changes will be made
          if (babelTypes.isJSXExpressionContainer(path.node.value)) {
            if (babelTypes.isObjectExpression(path.node.value.expression)) {
              nodesToReplace.push(path);
              const styleName = uuidv1();
              styleNames.push(styleName);
              objectExpressionArray.push(path.node.value.expression);
            }
          }
        }
      }
    }
  });

  // generating Stylesheet
  // merging existing stylesheet data with to be converted data

  const generatedStyleSheet = generateStyleSheet(
    styleNames,
    objectExpressionArray,
    existingStyleObjects
  );
  console.log('----STYLESHEET-----');

  // replacing old stylesheet with newly generated stylesheet
  if (existingStyleSheetNode) {
    existingStyleSheetNode.replaceWith(generatedStyleSheet);
    // console.log(JSON.stringify(existingStyleSheetNode.node));
    console.log(generate(existingStyleSheetNode).code);
  } else {
    console.log(generate(generatedStyleSheet).code);
  }

  // replacing style object
  nodesToReplace.forEach((styleNode, index) => {
    let replaceWithThis = generateStyles(styleNames[index]);
    styleNode.replaceWith(replaceWithThis);
  });
  const output = generate(ast);
  console.log('----CODE----');
  console.log(output.code);
}
convertCode(test1);
