// File Util function for reading and writing files
import { test1 } from './test/test';
const fs = require('fs');
export function readFile(filePath, changeCode) {
  let content;
  changeCode(test1);
  //   fs.readFile('../package.json', 'utf-8', (error, data) => {
  //     if (error) {
  //       console.log(error);
  //     }
  //     if (data) {
  //       //   content = ;
  //     }
  //   });
}
