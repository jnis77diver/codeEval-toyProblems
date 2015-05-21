var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

var matrix = [];

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== "") {
    //do something here
    matrix.push(line.split(''));
    //console.log();
  }
});

function labrynth(board) {
  var rows = board.length;
  var cols = board[0].length;
  var boardOptions = {};
  var colStart = board[0].indexOf(' ');
  var minMoves = 0;
  var recurse = function(m, n, matrix, counter){
    //trail of m,n tuples
    var trail = [];
    var ways = directions(matrix, m, n);
    //if single road
    if( ways.length === 1) {
      //while loop
        //if at end, pop back to fork, then recurse
        //if at wall, pop back to fork, then recurse
    }
    if( ways.length >= 2 ) {
      //if at fork, recurse over possible paths
    }
  };

}
function directions(matrix, m, n){
  var roads = [];
  //return the direction to go
  //if more than one way to go, return false
  if( matrix[m-1][n] === ' ') {
    results.push('up');
  }
  if( matrix[m+1][n] === ' ') {
    results.push('down');
  }
  if( matrix[m][n+1] === ' ') {
    results.push('right');
  }
  if( matrix[m-1][n] === ' ') {
    results.push('left');
  }
  return roads;
};
