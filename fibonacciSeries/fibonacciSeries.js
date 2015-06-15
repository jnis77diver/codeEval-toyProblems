var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

var fibonacciSeries = function(n){
  var len = fibonacciSeries.memo.length;
  if( fibonacciSeries.memo[n] ){
    return fibonacciSeries.memo[n];
  }
  else {
    for(var i = len; i <= n; i++){
      fibonacciSeries.memo.push(fibonacciSeries.memo[i-2] + fibonacciSeries.memo[i-1]);
    }
  }
  return fibonacciSeries.memo[n];
};

fibonacciSeries.memo = [0, 1];

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== "") {
    //do something here
    console.log(fibonacciSeries(line));
  }
});

