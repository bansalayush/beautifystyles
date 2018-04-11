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
export function generateStyleSheet(
  styleNames,
  styleProperties,
  existingStyleObjects
) {
  let styleObjects = styleNames.map((item, index) => {
    return babelTypes.objectProperty(
      babelTypes.identifier(item),
      styleProperties[index]
    );
  });
  styleObjects.push.apply(styleObjects, existingStyleObjects);
  return babelTypes.variableDeclaration('const', [
    babelTypes.variableDeclarator(
      babelTypes.identifier('styles'),
      babelTypes.callExpression(
        babelTypes.memberExpression(
          babelTypes.identifier('StyleSheet'),
          babelTypes.identifier('create')
        ),
        [babelTypes.objectExpression(styleObjects)]
      )
    )
  ]);
}

// TODO: check type of propertyvalue to generate corresponding literal
export function generateStylePropertyWithValue(propertyName, propertyValue) {
  return babelTypes.objectProperty(
    babelTypes.identifier(propertyName),
    babelTypes.numericLiteral(propertyValue)
  );
}

export function isStyleSheet(path) {
  if (babelTypes.isVariableDeclaration(path.node)) {
    console.log('variableDeclaration\n, ');
    if (babelTypes.isVariableDeclarator(path.node.declarations[0])) {
      console.log('variableDeclarator < === >');
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
            return true;
            // console.log(existingStyleObjects);
          }
        }
      }
    }
  }
  return false;
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
  let ast;
  try {
    ast = parse(code, options);
  } catch (error) {
    console.log(error);
    return 'Oops!! error parsing the tree';
  }
  return ast;
}

export function isJSXAttribute(type) {
  return type === 'JSXAttribute';
}

export function isStyle(name) {
  return name === 'style';
}
