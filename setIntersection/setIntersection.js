
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(setIntersection(line));
   }
});
function setIntersection(line){
  var initArr = line.trim().split(';');
  var listOne = initArr[0].split(',');
  var listTwo = initArr[1].split(',');
  var result = [];
  var hash = {};
  listOne.forEach(function(num){
    hash[num] = true;
  });
  listTwo.forEach(function(num){
    if(hash[num]){
      result.push(num);
    }
  });
  return result.join(',');
}
