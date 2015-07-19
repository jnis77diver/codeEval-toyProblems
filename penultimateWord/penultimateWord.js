
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(penultimateWord(line));
   }
});
function penultimateWord(line){
  var arr = line.trim().split(' ');
  var ind = arr.length - 2;
  return arr[ind];
}
