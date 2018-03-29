// style object property
/*{
    type: 'ObjectProperty',
    start: 189,
    end: 200,
    loc: { start: { line: 8, column: 31 }, end: { line: 8, column: 42 } },
    method: false,
    shorthand: false,
    computed: false,
    key: {
      type: 'Identifier',
      start: 189,
      end: 197,
      loc: {
        start: { line: 8, column: 31 },
        end: { line: 8, column: 39 },
        identifierName: 'textSize'
      },
      name: 'textSize'
    },
    value: {
      type: 'NumericLiteral',
      start: 198,
      end: 200,
      loc: { start: { line: 8, column: 40 }, end: { line: 8, column: 42 } },
      extra: { rawValue: 12, raw: '12' },
      value: 12
    }
  }*/

babeltypes.memberExpression(babelTypes.identifier());
// test3 ast output
// {
//   type: 'JSXAttribute',
//   start: 164,
//   end: 193,
//   loc: { start: { line: 8, column: 22 }, end: { line: 8, column: 51 } },
//   name: {
//     type: 'JSXIdentifier',
//     start: 164,
//     end: 169,
//     loc: { start: { line: 8, column: 22 }, end: { line: 8, column: 27 } },
//     name: 'style'
//   },
//   value: {
//     type: 'JSXExpressionContainer',
//     start: 170,
//     end: 193,
//     loc: { start: { line: 8, column: 28 }, end: { line: 8, column: 51 } },
//     expression: {
//       type: 'MemberExpression',
//       start: 171,
//       end: 192,
//       loc: { start: { line: 8, column: 29 }, end: { line: 8, column: 50 } },
//       object: {
//         type: 'Identifier',
//         start: 171,
//         end: 177,
//         loc: {
//           start: { line: 8, column: 29 },
//           end: { line: 8, column: 35 },
//           identifierName: 'styles'
//         },
//         name: 'styles'
//       },
//       property: {
//         type: 'Identifier',
//         start: 178,
//         end: 192,
//         loc: {
//           start: { line: 8, column: 36 },
//           end: { line: 8, column: 50 },
//           identifierName: 'discountParent'
//         },
//         name: 'discountParent'
//       },
//       computed: false
//     }
//   }
// };

//////////from/////////////
// {
//   type: 'JSXAttribute',
//   start: 164,
//   end: 245,
//   loc: { start: { line: 8, column: 22 }, end: { line: 8, column: 103 } },
//   name: {
//     type: 'JSXIdentifier',
//     start: 164,
//     end: 169,
//     loc: { start: { line: 8, column: 22 }, end: { line: 8, column: 27 } },
//     name: 'style'
//   },
//   value: {
//     type: 'JSXExpressionContainer',
//     start: 170,
//     end: 245,
//     loc: { start: { line: 8, column: 28 }, end: { line: 8, column: 103 } },
//     expression: {
//       type: 'ObjectExpression',
//       start: 171,
//       end: 244,
//       loc: { start: { line: 8, column: 29 }, end: { line: 8, column: 102 } },
//       properties: [
//         {
//           type: 'ObjectProperty',
//           start: 173,
//           end: 184,
//           loc: { start: { line: 8, column: 31 }, end: { line: 8, column: 42 } },
//           method: false,
//           shorthand: false,
//           computed: false,
//           key: {
//             type: 'Identifier',
//             start: 173,
//             end: 181,
//             loc: {
//               start: { line: 8, column: 31 },
//               end: { line: 8, column: 39 },
//               identifierName: 'textSize'
//             },
//             name: 'textSize'
//           },
//           value: {
//             type: 'NumericLiteral',
//             start: 182,
//             end: 184,
//             loc: {
//               start: { line: 8, column: 40 },
//               end: { line: 8, column: 42 }
//             },
//             extra: { rawValue: 12, raw: '12' },
//             value: 12
//           }
//         },
//         {
//           type: 'ObjectProperty',
//           start: 187,
//           end: 212,
//           loc: { start: { line: 8, column: 45 }, end: { line: 8, column: 70 } },
//           method: false,
//           shorthand: false,
//           computed: false,
//           key: {
//             type: 'Identifier',
//             start: 187,
//             end: 197,
//             loc: {
//               start: { line: 8, column: 45 },
//               end: { line: 8, column: 55 },
//               identifierName: 'fontFamily'
//             },
//             name: 'fontFamily'
//           },
//           value: {
//             type: 'StringLiteral',
//             start: 199,
//             end: 212,
//             loc: {
//               start: { line: 8, column: 57 },
//               end: { line: 8, column: 70 }
//             },
//             extra: { rawValue: 'ScalaSansOT', raw: "'ScalaSansOT'" },
//             value: 'ScalaSansOT'
//           }
//         },
//         {
//           type: 'ObjectProperty',
//           start: 213,
//           end: 225,
//           loc: { start: { line: 8, column: 71 }, end: { line: 8, column: 83 } },
//           method: false,
//           shorthand: false,
//           computed: false,
//           key: {
//             type: 'Identifier',
//             start: 213,
//             end: 221,
//             loc: {
//               start: { line: 8, column: 71 },
//               end: { line: 8, column: 79 },
//               identifierName: 'fontSize'
//             },
//             name: 'fontSize'
//           },
//           value: {
//             type: 'NumericLiteral',
//             start: 223,
//             end: 225,
//             loc: {
//               start: { line: 8, column: 81 },
//               end: { line: 8, column: 83 }
//             },
//             extra: { rawValue: 12, raw: '12' },
//             value: 12
//           }
//         },
//         {
//           type: 'ObjectProperty',
//           start: 226,
//           end: 242,
//           loc: {
//             start: { line: 8, column: 84 },
//             end: { line: 8, column: 100 }
//           },
//           method: false,
//           shorthand: false,
//           computed: false,
//           key: {
//             type: 'Identifier',
//             start: 226,
//             end: 239,
//             loc: {
//               start: { line: 8, column: 84 },
//               end: { line: 8, column: 97 },
//               identifierName: 'letterSpacing'
//             },
//             name: 'letterSpacing'
//           },
//           value: {
//             type: 'NumericLiteral',
//             start: 241,
//             end: 242,
//             loc: {
//               start: { line: 8, column: 99 },
//               end: { line: 8, column: 100 }
//             },
//             extra: { rawValue: 2, raw: '2' },
//             value: 2
//           }
//         }
//       ]
//     }
//   }
// };

//////////////////////to/////////////////
// {
//   type: 'JSXAttribute',
//   start: 164,
//   end: 193,
//   loc: { start: { line: 8, column: 22 }, end: { line: 8, column: 51 } },
//   name: {
//     type: 'JSXIdentifier',
//     start: 164,
//     end: 169,
//     loc: { start: { line: 8, column: 22 }, end: { line: 8, column: 27 } },
//     name: 'style'
//   },
//   value: {
//     type: 'JSXExpressionContainer',
//     start: 170,
//     end: 193,
//     loc: { start: { line: 8, column: 28 }, end: { line: 8, column: 51 } },
//     expression: {
//       type: 'MemberExpression',
//       start: 171,
//       end: 192,
//       loc: { start: { line: 8, column: 29 }, end: { line: 8, column: 50 } },
//       object: {
//         type: 'Identifier',
//         start: 171,
//         end: 177,
//         loc: {
//           start: { line: 8, column: 29 },
//           end: { line: 8, column: 35 },
//           identifierName: 'styles'
//         },
//         name: 'styles'
//       },
//       property: {
//         type: 'Identifier',
//         start: 178,
//         end: 192,
//         loc: {
//           start: { line: 8, column: 36 },
//           end: { line: 8, column: 50 },
//           identifierName: 'discountParent'
//         },
//         name: 'discountParent'
//       },
//       computed: false
//     }
//   }
// };
