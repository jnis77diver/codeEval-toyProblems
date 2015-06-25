
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(hexToDecimal(line));
   }
});
function hexToDecimal(line){
  return parseInt(line, 16);
}
