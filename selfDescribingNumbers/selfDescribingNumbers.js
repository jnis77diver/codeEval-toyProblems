
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(selfDescribingNumbers(line));
  }
});
function selfDescribingNumbers(line){
  var hash = {};
  for(var i = 0; i < line.length; i++){
    if(!hash[(line[i])]){
      hash[(line[i])] = 1;
    }
    else {
      hash[(line[i])] += 1;
    }
  }
  for(var j = 0; j < line.length; j++){
    if(hash[j]){
      if(Number(line[j]) !== hash[j]){ return 0; }
    }
    else {
      if(line[j] !== '0'){ return 0;}
    }
  }
  return 1;
}
