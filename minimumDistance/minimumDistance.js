var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(minimumDistance(line));
   }
});
function minimumDistance(line){
  var nums = line.trim().split(' ');
  var numFriends = nums.shift();
  var mean = Math.round(nums.map(function(a){ return Number(a); }).reduce(function(prevVal, currVal, ind){
    if(ind === nums.length - 1){
      prevVal = prevVal + currVal;
      prevVal = prevVal/(ind + 1);
      return prevVal;
    }
    else {
      prevVal = prevVal + currVal;
      return prevVal;
    }
  }));
  return nums.reduce(function(prevVal, currVal, ind){
    if(ind === 1){
      return Math.abs(prevVal - mean) + Math.abs(currVal - mean);
    }
    else {
      return prevVal + Math.abs(currVal - mean);
    }
  });

}
