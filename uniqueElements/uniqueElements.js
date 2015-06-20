
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(uniqueElements(line));
   }
});
function uniqueElements(line){
  var arr = line.trim().split(',');
  var obj = {};
  var result = [];
  for(var i = 0; i < arr.length; i++){
    if(!obj[arr[i]]){
      obj[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result.join(',');
}
