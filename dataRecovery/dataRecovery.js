//CHALLENGE DESCRIPTION:
/*
Your friends decided to make fun of you. They have installed a script on your computer which shuffled all words within a text. It is a joke, so they have left hints for each sentence. The hints will allow you to rebuild the data easily, but you need to find out how to use them.

  Your task is to write a program which reconstructs each sentence out of a set of words and prints out the original sentences.

  INPUT SAMPLE:

  Your program should accept a path to a filename as its first argument. Each line is a test case which consists of a set of words and a sequence of numbers separated by a semicolon. The words within a set and the numbers within a sequence are separated by a single space.

  For example:


  1
2
3
2000 and was not However, implemented 1998 it until;9 8 3 4 1 5 7
2
programming first The language;3 2 1
programs Manchester The written ran Mark 1952 1 in Autocode from;6
2 1 7 5 3 11 4 8 9
OUTPUT SAMPLE:

  Print out a reconstructed sentence for each test case, one per line.

  For example:


  1
2
3
However, it was not implemented until 1998 and 2000
The first programming language
The Manchester Mark 1 ran programs written in Autocode from 1952
CONSTRAINTS:

  The number of test cases is in a range from 20 to 40.
The words consist of ASCII uppercase and lowercase letters, digits, and punctuation marks.*/

var fs = require('fs');
//process.argv[2] is for codeeval; test.txt is for local tests
var filename = process.argv[2] || './test.txt'
fs.readFileSync(filename).toString().split('\n').forEach(function(line){
  if( line !== "" ) {
    console.log(sortString(line));
  }
});

function sortString(string) {
  var splitString = string.split(';');
  var arr = splitString[0].split(' ');
  var numArr = splitString[1].split(' ');
  var corrected = [];
  numArr = numArr.map(function(val){
    return Number(val);
  });
  var sortedNumArr = numArr.slice().sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
  });
  //check which number(index + 1) is missing from the numArr
  for(var i = 0; i < sortedNumArr.length; i++){
    if(sortedNumArr[i] !== i + 1) {
      numArr.push(i + 1);
      break;
    } else if ( i === sortedNumArr.length - 1 ) {
      //i + 2 represents the number that is missing at the end of the number sequence
      numArr.push(i + 2);
    }
  }
  //console.log('numArr is ', numArr);
  numArr.forEach(function(val, index){
    val = Number(val);
    corrected[val-1] = arr[index];
  });
  return corrected.join(' ');
}

