/*
CHALLENGE DESCRIPTION:

  Given a 2D board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cell, where adjacent cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

  INPUT SAMPLE:

  The board to be used may be hard coded as:

  [
    [ABCE],
    [SFCS],
    [ADEE]
  ]
Your program should accept as its first argument a path to a filename. Each line in this file contains a word. E.g.

1 ASADB
2 ABCCED
3 ABCF

OUTPUT SAMPLE:

  Print out True if the word exists in the board, False otherwise. E.g.


1 False
2 True
3 False
*/

var fs = require('fs');
var filename = process.argv[2] || './test.txt';
var board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];
//DFCCBASAD

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    console.log(wordCount(line));
  }
});


function wordCount(string){
  var rows = board.length;
  var cols = board[0].length;
  // split string into array
  var letters = string.split('');
  var inner = function(row, col, strIndex, visited){
    //if off the board
    if( row < 0 || col < 0 || row > rows - 1 || col > cols - 1 ) { return false; }
    // if location has already been visited but not first location, return false
    if( visited.indexOf(row.toString() + col.toString()) >= 0 ){
      return false;
    }
    // if this letter is last letter and matches, return true
    if( board[row][col] === letters[strIndex] && strIndex >= letters.length - 1) {
      return true;
    }
    // if this letter does not match next letter in string, return false
    if( board[row][col] !== letters[strIndex] ) {
      return false;
    }
    // if this letter matches (not last), call inner on top, bottom, right, left and increment strIndex
    if( board[row][col] === letters[strIndex] ) {
      visited.push(row.toString() + col.toString());
      return inner(row + 1, col, strIndex + 1, visited) || inner(row - 1, col, strIndex + 1, visited) || inner(row, col + 1, strIndex + 1, visited) || inner(row, col - 1, strIndex + 1, visited);
    }
  };
  for(var i = 0, len = board.length; i < len; i++){
    var row = board[i];
    for(var j = 0, rowLen = row.length; j < rowLen; j++){
      if( row[j] === string[0] ){
        var firstLoc = i.toString() + j.toString();
        return inner(i, j, 0, []);
      }
    }
  }
}


