
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(mulitplyLists(line));
   }
});
function mulitplyLists(line){
  var array = line.trim().split('|');
  var arr1 = array[0].trim().split(' ');
  var arr2 = array[1].trim().split(' ');
  var holder = [];
  arr1.forEach(function(num, ind){
    holder.push(Number(num) * Number(arr2[ind]));
  });
  return holder.join(' ');
}
