
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(happyNumbers(line));
   }
});
function happyNumbers(line){
  var count = 0;
  var result = 0;
  function recurse(line){
    var numArray = line.split('').map(function(num){
      return parseInt(num);
    });
    var newNum = 0;
    numArray.forEach(function(num){
      newNum += Math.pow(num, 2);
    });
    if(newNum === 1){
      result = 1;
      return;
    }
    else {
      if(newNum === 4){
        count = 0;
        result = 0;
        return;
      }
      else {
        count += 1;
        recurse(newNum.toString());
      }

    }
  }
  recurse(line);
  return result;
}
