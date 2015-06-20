var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== "") {
    //do something here
    console.log(ASCIIDescription(line));
  }
});

function ASCIIDescription(line){
  var arr = line.trim().split('|');
  var wordLength = parseInt(arr.shift());
  var char = arr.shift();
  var ascArray = arr[0].trim().split(' ').map(function(num){
    return parseInt(num);
  });
  var charMap = {};
  for(var i = 0; i < ascArray.length; i++){
    if(!charMap[ascArray[i]]) {
      charMap[ascArray[i]] = [i];
    }
    else {
      charMap[ascArray[i]].push(i);
    }
  }
  // assume the most frequent character is a space and find out how many times it occurs
  var spaces = 0;
  var numberToAdd;
  var nums = Object.keys(charMap);
  nums.forEach(function(key){
    if(Math.max(spaces, charMap[key].length) > spaces){
      spaces = Math.max(spaces, charMap[key].length);
      numberToAdd = Number(key);
    }
  });
  // we know that our integer to add is numberToAddAltered - 32 (ASCII character for space)
  numberToAdd = numberToAdd - 32;
  ascArray = ascArray.map(function(num){
    return String.fromCharCode(num - numberToAdd);
  }).join('');
  return ascArray;
}

