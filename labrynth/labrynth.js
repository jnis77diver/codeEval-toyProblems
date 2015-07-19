//https://www.codeeval.com/open_challenges/157/

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
//console.log(matrix);
function labrynth(board){
  var rows = board.length;
  var cols = board[0].length;
  var boardOptions = {};
  var colStart = board[0].indexOf(' ');
  var minMoves = 0;
  var recurse = function(m, n, matrix, counter, fromM, fromN) {
    //logMatrix(matrix);
    var up = matrix[m-1] && matrix[m-1][n];
    var down = matrix[m+1]&& matrix[m+1][n];
    var right = matrix[m] && matrix[m][n+1];
    var left = matrix[m]&& matrix[m][n-1];
    //base cases
    //at the start going up
    if( m < 0 || n < 0 || n > cols - 1 || m > rows - 1 ) { return; }
    //if at a wall, return
    if( matrix[m][n] === '*' ) {
      //matrix[fromM][fromN] = ' ';
      return;
    }
    //if at last row and empty space, add + and add to counter, store matrix in boardOptions;
    if( m === rows - 1 && matrix[m][n] === ' ' ) {
      matrix[m][n] = '+';
      boardOptions[counter] = matrix.slice();
      logMatrix(boardOptions[counter]);
      matrix[m][n] = ' ';
      if( counter < minMoves || minMoves === 0 ) {
        minMoves = counter;
      }
      return;
    }
    else if ( matrix[m][n] === "+" ) {
      matrix[m][n] === " ";
      return;
    }
    else if ( matrix[m][n] === " " ) {
      counter+=1;
      matrix[m][n] = '+';
      //recurse if not a wall
      if( m >= 0 && m < rows && down !== '*' && down !== '+'  ) {
        //console.log('recurse down... row: ', m, ' is', matrix[m]);
        recurse(m+1, n, matrix.slice(), counter, m, n);
      }
      if( m >= 0 && m < rows && up !== '*' && up !== '+' ){
        //console.log('recurse up... row: ', m, ' is', matrix[m]);
        recurse(m-1, n, matrix.slice(), counter, m, n);
      }
      if( right !== '*' && right !== '+' && n >= 0 && n < cols ) {
        //console.log('recurse right... row: ', m, ' is', matrix[m]);
        recurse(m, n+1, matrix.slice(), counter, m, n);
      }
      if( left !== '*' || left !== '+' && n >= 0 && n < cols ) {
        //console.log('recurse left... row: ', m, ' is', matrix[m]);
        recurse(m, n-1, matrix.slice(), counter, m, n);
      }
    }
  };
  recurse(0, colStart, board, 0);
  var possibleKeys = Object.keys(boardOptions);
  console.log('Object.keys(boardOptions); is ', Object.keys(boardOptions));
  var solutionKey = possibleKeys.reduce(function(a, b) {
    return Math.max(a, b);
  }, 0);
  console.log('solutionKey is ', solutionKey);
  var path = boardOptions[solutionKey];
  path.forEach(function(row) {
    console.log('ENDGAME: ', row.join(''));
  });
}

labrynth(matrix);

function logMatrix(array) {
  array.forEach(function(row) {
    console.log(row.join(''));
  });
  console.log('__________________________________');
}



//if( m >= 0 && m < rows && down !== '*' && down !== '+'  ) {
//  console.log('recurse down... row: ', m, ' is', matrix[m]);
//  recurse(m+1, n, matrix.slice(), counter);
//}
//if( m >= 0 && m < rows && up !== '*' && up !== '+' ){
//  console.log('recurse up... row: ', m, ' is', matrix[m]);
//  recurse(m-1, n, matrix.slice(), counter);
//}
//if( right !== '*' && right !== '+' && n >= 0 && n < cols ) {
//  console.log('recurse right... row: ', m, ' is', matrix[m]);
//  recurse(m, n+1, matrix.slice(), counter);
//}
//if( left !== '*' || left !== '+' && n >= 0 && n < cols ) {
//  console.log('recurse left... row: ', m, ' is', matrix[m]);
//  recurse(m, n-1, matrix.slice(), counter);
//}



/*if ( matrix[m][n] === " " ) {
  counter+=1;
  matrix[m][n] = '+';
  //recurse if not a wall
  recurse(m+1, n, matrix.slice(), counter);
  recurse(m-1, n, matrix.slice(), counter);
  recurse(m, n+1, matrix.slice(), counter);
  recurse(m, n-1, matrix.slice(), counter);
  //matrix[m][n] = ' ';
}*/
