
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(lowestUniqueNumber(line));
   }
});
function lowestUniqueNumber(line){
  var arr = line.trim().split(' ');
  var hash = {};
  var lowestNum = 0;
  arr.forEach(function(num){
    if(hash[num]){
      hash[num] += 1;
    }
    else {
      hash[num] = 1;
    }
  });
  for(var key in hash){
    if(hash[key] === 1){
      if(lowestNum === 0) { lowestNum = Number(key); }
      if( Number(key) < Number(lowestNum)){
        lowestNum = key;
      }
    }
  }
  return lowestNum;
}
