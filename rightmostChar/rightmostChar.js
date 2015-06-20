
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(rightmostChar(line));
   }
});
function rightmostChar(line){
  var arr = line.trim().split(',');
  var sentence = arr[0];
  var letter = arr[1];
  for(var i = sentence.length - 1; i >= 0; i--){
    if(sentence[i] === letter){
      return i;
    }
  }
  return -1;
}
