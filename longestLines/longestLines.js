//LONGEST LINES
//CHALLENGE DESCRIPTION:


/*
  Write a program which reads a file and prints to stdout the specified number of the longest lines that are sorted based on their length in descending order.

  INPUT SAMPLE:

  Your program should accept a path to a file as its first argument. The file contains multiple lines. The first line indicates the number of lines you should output, the other lines are of different length and are presented randomly. You may assume that the input file is formatted correctly and the number in the first line is a valid positive integer.

  For example:


  1
2
3
4
5
6
2
Hello World
CodeEval
Quick Fox
A
San Francisco
OUTPUT SAMPLE:

  Print out the longest lines limited by specified number and sorted by their length in descending order.

  For example:


1 San Francisco
2 Hello World


*/


var fs = require('fs');
var filename = process.argv[2] || './test.txt';

var holder = [];

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    holder.push(line);
  }
});

longestLines(holder);

function longestLines(array){
  var lines = Number(array.shift());
  array.sort(function(a,b){
    if(a.length > b.length){ return -1; }
    if(a.length < b.length){ return 1 }
    else { return 0; }
  });
  for(var i = 0; i < lines; i++){
    console.log(array[i]);
  }
}
