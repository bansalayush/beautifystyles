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
/**
 *
 *
 * @export
 * @param {string[]} styleNames
 * @param {any} styleProperties
 */
export function generateStyleSheet(styleNames /*styleProperties*/) {
  return babelTypes.variableDeclaration('const', [
    babelTypes.variableDeclarator(
      babelTypes.identifier('styles'),
      babelTypes.callExpression(
        babelTypes.memberExpression(
          babelTypes.identifier('StyleSheet'),
          babelTypes.identifier('create')
        ),
        [
          babelTypes.objectExpression(
            styleNames.map((item, index) => {
              return babelTypes.objectProperty(
                babelTypes.identifier(item),
                babelTypes.objectExpression([
                  generateStylePropertyWithValue('height', 40),
                  generateStylePropertyWithValue('width', 50)
                ])
              );
            })
          )
        ]
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
  // console.log('[ASTUtility]', code);
  const ast = parse(code, options);
  return ast;
}

export function isJSXAttribute(type) {
  return type === 'JSXAttribute';
}

export function isStyle(name) {
  return name === 'style';
}
