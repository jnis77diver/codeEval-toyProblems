var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== "") {
    //do something here
    console.log(multiplesOfNumber(line));
  }
});


function multiplesOfNumber(line){
  var arr = line.trim().split(',');
  //Math.pow(base, exp);
  var exp = Math.log(Number(arr[0]))/Math.log(2);
  return Math.pow(2, Math.ceil(exp));
}