'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertCode = convertCode;

var _babelGenerator = require('babel-generator');

var _babelGenerator2 = _interopRequireDefault(_babelGenerator);

var _babelTraverse = require('babel-traverse');

var _babelTraverse2 = _interopRequireDefault(_babelTraverse);

var _test = require('./test');

var _ASTUtility = require('./ASTUtility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelTypes = require('@babel/types');
var uuidv1 = require('uuid/v1');

function convertCode(code) {
  var returnCode = '';
  // console.log('before generating ast');
  var ast = (0, _ASTUtility.generateAST)(code);
  if (ast === 'Oops!! error parsing the tree') {
    // console.log('after generating ast');
    return ast;
  }
  var objectExpressionArray = []; // stores style object to put in stylesheet.create
  var styleNames = []; // style names
  var nodesToReplace = []; // style nodes to replace with styles.something

  var existingStyleSheetNode = void 0;
  var existingStyleSheetName = '';
  var existingStyleObjects = [];
  (0, _babelTraverse2.default)(ast, {
    enter: function enter(path) {
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
            if (babelTypes.isMemberExpression(path.node.declarations[0].init.callee)) {
              console.log('memberExpression < == >');
              if (path.node.declarations[0].init.callee.object.name === 'StyleSheet' && path.node.declarations[0].init.callee.property.name === 'create') {
                existingStyleSheetNode = path;
                console.log('stylesheet.create < == >');
                //getting existing style objects present in  stylesheet
                existingStyleObjects = path.node.declarations[0].init.arguments[0].properties;
                // console.log(existingStyleObjects);
              }
            }
          }
        }
      }
      if (babelTypes.isJSXAttribute(path.node)) {
        if ((0, _ASTUtility.isStyle)(path.node.name.name)) {
          // path to which changes will be made
          if (babelTypes.isJSXExpressionContainer(path.node.value)) {
            if (babelTypes.isObjectExpression(path.node.value.expression)) {
              console.log('getting style={{}}');
              nodesToReplace.push(path);
              var styleName = 'a' + uuidv1();
              styleName = styleName.replace('-', '');
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
    var generatedStyleSheet = (0, _ASTUtility.generateStyleSheet)(styleNames, objectExpressionArray, existingStyleObjects);
    // console.log(generatedStyleSheet);
    console.log('----STYLESHEET-----');

    // replacing old stylesheet with newly generated stylesheet
    if (existingStyleSheetNode) {
      existingStyleSheetNode.replaceWith(generatedStyleSheet);
    } else {
      returnCode = (0, _babelGenerator2.default)(generatedStyleSheet).code;
    }

    // replacing style object
    nodesToReplace.forEach(function (styleNode, index) {
      var replaceWithThis = (0, _ASTUtility.generateStyles)(styleNames[index]);
      styleNode.replaceWith(replaceWithThis);
    });
  }
  try {
    var output = (0, _babelGenerator2.default)(ast);
    returnCode = returnCode + ' \n' + output.code;
  } catch (error) {
    console.log(error);
  }
  // console.log(returnCode);
  return returnCode;

  // console.log('----CODE----');
}

// console.log(convertCode(test4));