const VimChar = require('../index.js');
const fs = require('fs');

function main() {
  fs.readFile('example/louise.txt', 'utf8', function (err, text) {
    if (err) {
      console.error(err);
      return;
    }
    VimChar.splitSegmentsByClass(text).forEach(seg => console.log(seg));
  });
}

main();
