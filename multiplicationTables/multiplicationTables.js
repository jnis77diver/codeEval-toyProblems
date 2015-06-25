
//var fs  = require('fs');
//var filename = process.argv[2] || './test.txt';
//
//fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
//  if (line !== '') {
//    //do something here
//    console.log(multiplicationTables(line));
//   }
//});
function multiplicationTables(num) {
  // num is highest number for mult table, so 12 woould mean 12 x 12
  var start = 1;
  while(start <= num){
    var innerStart = 1;
    var result = [];
    while(innerStart <= num){
      result.push(addSpace(innerStart * start));
      innerStart++;
    }
    console.log(result.join('').trim());
    start++;

  }

  function addSpace(digits){
    var len = digits.toString().length;
    var holder = [];
    for(var i = len; i < 4; i++){
      holder.push(' ');
    }
    holder.push(digits);
    return holder.join('');
  }
}
multiplicationTables(12);