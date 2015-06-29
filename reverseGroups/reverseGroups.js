
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(reverseGroups(line));
   }
});
function reverseGroups(line){
  var colonSplit = line.trim().split(';');
  var nums = colonSplit[0].split(',').map(function(num){
    return parseInt(num);
  });
  var result = [];
  var groupLength = Number(colonSplit[1]);
  for(var i = 0; i < nums.length; i++){
    if(i % groupLength === 0 && nums[i + groupLength - 1] ){
      var temp = nums.splice(i,  groupLength).reverse();
      var args = [i, 0].concat(temp);
      Array.prototype.splice.apply(nums, args);
    }
  }
  return nums.join(',');
}
