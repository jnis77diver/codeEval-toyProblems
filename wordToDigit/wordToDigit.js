var map = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0
};

var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== "") {
    //do something here
    console.log(wordToDigit(line));
  }
});

function wordToDigit(line){
  var words = line.trim().split(';');
  var num = '';
  words.forEach(function(word){
    num += map[word];
  });
  return num;
}