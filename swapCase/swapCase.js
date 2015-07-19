
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(swapCase(line));
   }
});
function swapCase(line){
  //code here
  var word = line.trim().split('');
  for (var i = 0; i < word.length; i++){
    var lowLetter = /[a-z]/;
    var upLetter = /[A-Z]/
    if(word[i].match(upLetter) !== null){
      word[i] = word[i].toLowerCase();
    }
    else if(word[i].match(lowLetter) !== null){
      word[i] = word[i].toUpperCase();
    }

  }
  return word.join('');
}
