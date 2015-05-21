
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';
fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== "") {
    //do something here
    var nums = line.split(' ');
    console.log(fizzBuzz(nums[0], nums[1], nums[2]));
  }
});

function fizzBuzz(div1, div2, num) {
  num = Number(num);
  div1 = Number(div1);
  div2 = Number(div2);
  var string = '';
  var counter = 0;
  while(++counter <= num ){
    if( counter !== 0 ) { string += ' '; }
    if (counter % div1 === 0 && counter % div2 === 0 ) { string += 'FB' }
    else if (counter % div1 === 0 ) { string += 'F' }
    else if (counter % div2 === 0 ) { string += 'B' }
    else {
      string += counter;
    }
  }
  return string;
}