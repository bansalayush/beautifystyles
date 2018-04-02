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

// [[TEST4_OUTPUT]]
//  {
//   type: 'VariableDeclaration',
//   start: 17,
//   end: 85,
//   loc: { start: { line: 1, column: 17 }, end: { line: 5, column: 2 } },
//   declarations: [
//     {
//       type: 'VariableDeclarator',
//       start: 23,
//       end: 85,
//       loc: { start: { line: 1, column: 23 }, end: { line: 5, column: 2 } },
//       id: {
//         type: 'Identifier',
//         start: 23,
//         end: 29,
//         loc: {
//           start: { line: 1, column: 23 },
//           end: { line: 1, column: 29 },
//           identifierName: 'styles'
//         },
//         name: 'styles'
//       },
//       init: {
//         type: 'CallExpression',
//         start: 32,
//         end: 85,
//         loc: { start: { line: 1, column: 32 }, end: { line: 5, column: 2 } },
//         callee: {
//           type: 'MemberExpression',
//           start: 32,
//           end: 49,
//           loc: { start: { line: 1, column: 32 }, end: { line: 1, column: 49 } },
//           object: {
//             type: 'Identifier',
//             start: 32,
//             end: 42,
//             loc: {
//               start: { line: 1, column: 32 },
//               end: { line: 1, column: 42 },
//               identifierName: 'StyleSheet'
//             },
//             name: 'StyleSheet'
//           },
//           property: {
//             type: 'Identifier',
//             start: 43,
//             end: 49,
//             loc: {
//               start: { line: 1, column: 43 },
//               end: { line: 1, column: 49 },
//               identifierName: 'create'
//             },
//             name: 'create'
//           },
//           computed: false
//         },
//         arguments: [
//           {
//             type: 'ObjectExpression',
//             start: 50,
//             end: 84,
//             loc: {
//               start: { line: 1, column: 50 },
//               end: { line: 5, column: 1 }
//             },
//             properties: [
//               {
//                 type: 'ObjectProperty',
//                 start: 52,
//                 end: 82,
//                 loc: {
//                   start: { line: 2, column: 0 },
//                   end: { line: 4, column: 1 }
//                 },
//                 method: false,
//                 shorthand: false,
//                 computed: false,
//                 key: {
//                   type: 'Identifier',
//                   start: 52,
//                   end: 66,
//                   loc: {
//                     start: { line: 2, column: 0 },
//                     end: { line: 2, column: 14 },
//                     identifierName: 'discountParent'
//                   },
//                   name: 'discountParent'
//                 },
//                 value: {
//                   type: 'ObjectExpression',
//                   start: 68,
//                   end: 82,
//                   loc: {
//                     start: { line: 2, column: 16 },
//                     end: { line: 4, column: 1 }
//                   },
//                   properties: [
//                     {
//                       type: 'ObjectProperty',
//                       start: 70,
//                       end: 80,
//                       loc: {
//                         start: { line: 3, column: 0 },
//                         end: { line: 3, column: 10 }
//                       },
//                       method: false,
//                       shorthand: false,
//                       computed: false,
//                       key: {
//                         type: 'Identifier',
//                         start: 70,
//                         end: 76,
//                         loc: {
//                           start: { line: 3, column: 0 },
//                           end: { line: 3, column: 6 },
//                           identifierName: 'height'
//                         },
//                         name: 'height'
//                       },
//                       value: {
//                         type: 'NumericLiteral',
//                         start: 78,
//                         end: 80,
//                         loc: {
//                           start: { line: 3, column: 8 },
//                           end: { line: 3, column: 10 }
//                         },
//                         extra: { rawValue: 70, raw: '70' },
//                         value: 70
//                       }
//                     }
//                   ]
//                 }
//               }
//             ]
//           }
//         ]
//       }
//     }
//   ],
//   kind: 'const'
// };
