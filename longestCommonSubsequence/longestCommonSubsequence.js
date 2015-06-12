/**
 * CHALLENGE DESCRIPTION:

 You are given two sequences. Write a program to determine the longest common subsequence between the two strings (each string can have a maximum length of 50 characters). NOTE: This subsequence need not be contiguous. The input file may contain empty lines, these need to be ignored.

 INPUT SAMPLE:

 The first argument will be a path to a filename that contains two strings per line, semicolon delimited. You can assume that there is only one unique subsequence per test case. E.g.

 XMJYAUZ;MZJAWXU
 OUTPUT SAMPLE:

 The longest common subsequence. Ensure that there are no trailing empty spaces on each line you print. E.g.

 MJAU
 */

var fs = require('fs');
var filename = process.argv[2] || './test.txt';
fs.readFileSync(filename).toString().split('\n').forEach(function(line){
  if( line !== "" ) {
    longestCommonSubsequence(line);
  }
});

function longestCommonSubsequence(str){
  var arr = str.split(';');
  var left = arr[0].split('');
  var right = arr[1].split('');
  var storageL = {};
  var storageR = {};
  var newLeft = [];
  var longest = '';
  left.forEach(function(letter, index){
    if( storageL[letter] ) {
      storageL[letter].index.push(index);
    } else {
      storageL[letter] = { index: [index] };
    }
  });
  right.forEach(function(letter, index){
    if( storageL[letter] ){
      if( storageR[letter] ) {
        storageR[letter].index.push(index);
      } else {
        storageR[letter] = { index: [index] };
      }
    }
  });
  for(var key in storageL) {
    if (!storageR[key]) {
      delete storageL[key];
      continue;
    } else {
      //build new left array
      storageL[key].index.forEach(function(idx){
        newLeft[idx] = key;
      });
    }
  }
  //remove undefined values
  newLeft = newLeft.filter(function(val){
      return !!val;
  });
  //console.log('storageL is ', storageL);
  //console.log('storageR is ', storageR);
  //console.log('newLeft is ', newLeft);

  function possibleLongest(string){
    var flag = false;
    var index = -1;
    var tempString = '';
    //test if the string sequence on left exists in right
    string.split('').forEach(function(letter){
      //get array that stores index position of letter in original string on right side
      var indexArray = storageR[letter].index;
      indexArray.forEach(function(ind){
        if( ind > index ){
          tempString += letter;
          index = ind;
        } else {
          flag = true;
          return;
        }
      });
    });
    if( flag ) { return false; }
    if( tempString.length > longest.length) { longest = tempString; }
    return true;
  }

  function getPossibilities(string, newString){
    var temp = '';
    //iterate through string and get all possibilities
    for(var i = 0; i < string.length; i++){
      var char = string[i];
      temp = newString + char;
      if( string === '' || string === 'undefined' ) { return; }
      possibleLongest(temp);
      var remaining = string.slice(i + 1);
      getPossibilities(remaining, temp);
    }
  }
  getPossibilities(newLeft.join(''), '');

  console.log(longest);
}
