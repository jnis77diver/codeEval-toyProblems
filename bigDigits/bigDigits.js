var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

var numbers =
[
 ['-**----*--***--***---*---****--**--****--**---**--'],
 ['*--*--**-----*----*-*--*-*----*-------*-*--*-*--*-'],
 ['*--*---*---**---**--****-***--***----*---**---***-'],
 ['*--*---*--*-------*----*----*-*--*--*---*--*----*-'],
 ['-**---***-****-***-----*-***---**---*----**---**--'],
 ['--------------------------------------------------']
];

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== "") {
    //do something here
    bigDigits(line);
  }
});


function bigDigits(str){
  // match only digits
  var pattern = /[0-9]/g;
  var numArray = str.match(pattern);
  var result = [[], [], [], [], [], []];
  numArray.forEach(function (num) {
    extractNumber(num, numbers, result);
  });
  result.forEach(function(line){
    console.log(line.join(''));
  });
}


function extractNumber(num, matrix, resultArray){
  var start = 5 * num;
  var end = 5 * num + 4;
  //var start = dict[num][0];
  matrix.forEach(function(line, ind){
    //substring length is always 5 because width is 5 of printed numbers
    resultArray[ind] = resultArray[ind].concat(line.join('').substr(start, 5));
  });
}

