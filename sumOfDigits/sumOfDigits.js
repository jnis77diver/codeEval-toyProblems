var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== "") {
    //do something here
    console.log(sumOfDigits(line));
  }
});

function sumOfDigits(line){
  var sum = 0;
  var arr = line.trim().split('');
  for(var i = 0; i < arr.length; i++){
    sum += parseInt(arr[i]);
  }
  return sum;
}