//INTERRUPTED BUBBLE SORT
//CHALLENGE DESCRIPTION:
/*


Bubble sort is the simplest algorithm for elements sorting. At each iteration we sequentially compare values of subsequent elements and swap them if necessary.

Your job is to write a program which finds a state of a given list of positive integer numbers after applying a given count of bubble sort iterations.

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line in this file contains a space-separated list of positive integers and ends with a number of iterations, separated by vertical line ‘|’. E.g.:


1
2
3
4
5
36 47 78 28 20 79 87 16 8 45 72 69 81 66 60 8 3 86 90 90 | 1
40 69 52 42 24 16 66 | 2
54 46 0 34 15 48 47 53 25 18 50 5 21 76 62 48 74 1 43 74 78 29 | 6
48 51 5 61 18 | 2
59 68 55 31 73 4 1 25 26 19 60 0 | 2
OUTPUT SAMPLE:

  Print to stdout the state of given lists after applying a given count of bubble sort iterations. E.g.:


1
2
3
4
5
36 47 28 20 78 79 16 8 45 72 69 81 66 60 8 3 86 87 90 90
40 42 24 16 52 66 69
0 15 25 18 34 5 21 46 47 48 48 1 43 50 53 29 54 62 74 74 76 78
5 48 18 51 61
55 31 59 4 1 25 26 19 60 0 68 73


*/

var fs  = require("fs");
var filename = process.argv[2] || "./test.txt";
fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    bubbleSort(line);
  }
});

function bubbleSort(line){
  var arr = line.split(" ");
  var iterations = arr.pop();
  var bar = arr.pop();
  arr = arr.map(function(num){
    return Number(num);
  });
  iterations = Math.min(iterations, line.length);
  while(iterations){
    sort();
    iterations--;
  }
  function sort(){
    for(var i = 0, len = arr.length; i < len - 1; i++){
      if( arr[i] > arr[i+1] ){
        swap(i, i + 1, arr);
      }
    }
  }
  function swap(ind, nextInd, array){
    var temp = array[ind];
    array[ind] = array[nextInd];
    array[nextInd] = temp;
  }
  console.log(arr.join(" "));
}

