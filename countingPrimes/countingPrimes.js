// INSTRUCTIONS
/*Given two integers N and M, count the number of prime numbers between N and M (both inclusive)

INPUT SAMPLE:

  Your program should accept as its first argument a path to a filename. Each line in this file contains two comma separated positive integers. E.g.


1   2,10
2   20,30

OUTPUT SAMPLE:

  Print out the number of primes between N and M (both inclusive)


1   4
2   2*/

var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== "") {
    //do something here
    console.log(countingPrimes(line));
  }
});

function countingPrimes(line){
  var nums = line.split(',').map(function(num){
    return Number(num);
  });
  var start = nums[0];
  var end = nums[1];
  var numberPrimes = primeSieve(start, end).length;
  return numberPrimes;
}

function primeTester(n){
  // 1 is not prime
  if( typeof n !== 'number' || n < 1 || n % 1 !== 0 || n === 1 ) {
    return false;
  }
  var upperLim = Math.sqrt(Math.abs(n));
  for( var i = 2; i <= upperLim; i++ ){
    if( n % i === 0 ){
      return false;
    }
  }
  return true;
}

function primeSieve(start, end){
  var primesArray = [];
  for( var i = start; i <= end; i++ ){
    if( primeTester(i) ){
      primesArray.push(i);
    }
  }
  return primesArray;
}