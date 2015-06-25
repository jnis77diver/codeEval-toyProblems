
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(nModM(line));
   }
});
function nModM(line){
  var nums = line.trim().split(',').map(function(a){
    return Number(a);
  });
  var numerator = nums[0];
  var denominator = nums[1];
  var remainder = numerator;
  while(remainder >= denominator){
    numerator = numerator - denominator;
    remainder = numerator;
  }
  return remainder;

}
