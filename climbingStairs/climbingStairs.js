//CHALLENGE DESCRIPTION:
/*


  You are climbing a stair case. It takes n steps to reach to the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

  INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line in this file contains a positive integer which is the total number of stairs.
  Ignore all empty lines. E.g.

1
2
10
20
OUTPUT SAMPLE:

  Print out the number of ways to climb to the top of the staircase. E.g.

1
2
89
10946
Constraints:
  The total number of stairs is <= 1000*/

var fs  = require("fs");
//process.argv[2] is for codeeval; test.txt is for local tests
var filename = process.argv[2] || './test.txt';
fs.readFileSync(filename, "utf8").toString().split('\n').forEach(function (line) {
  if (line !== "") { // ignore empty lines
    console.log(climbingStairs(line));
  }
});

//Fibonacci solution. Note that going 1 or 2 steps is just Fibonacci
function climbingStairs(input) {
  input = Number(input);
  var fibs = [0, 1];
  //no initial va
  for(var n = input; n > 1; n--) {
    fibs.push(fibs.shift() + fibs[0]);
  }
  //n will always be 1 after for loop
  return toFixed(fibs[n]);
}

//found on internet
function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
      x *= Math.pow(10,e-1);
      x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10,e);
      x += (new Array(e+1)).join('0');
    }
  }
  return x;
}

/////////////////////////////////

/*//Solution that is naive and doesn't see that it's a fibonacci sequence
function climbingStairs(input) {
  'use strict';
  var d = Number(input), counter = 0;
  var recurse = function(num) {
    if( num === d ) { counter++; }
    if( num > d ) { return; }
    recurse(num + 1);
    recurse(num + 2);
  };
  recurse(0);
  return counter;
}*/


