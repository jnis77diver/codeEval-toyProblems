
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(evenNumbers(line));
   }
});
function evenNumbers(line){
  var num = Number(line.trim());
  return num % 2;
}
