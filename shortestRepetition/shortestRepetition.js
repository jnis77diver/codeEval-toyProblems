
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(shortestRepetition(line));
   }
});
function shortestRepetition(line){
  var arr = line.trim().split('');
  var holder = [];

  for (var i = 0; i < arr.length; i++){

  }
}
