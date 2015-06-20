
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';
var result = 0;
fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    sumOfIntegers(line);
   }
});
function sumOfIntegers(line){
  result += Number(line);
}
console.log(result);