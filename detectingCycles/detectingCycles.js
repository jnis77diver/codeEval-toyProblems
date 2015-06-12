var fs = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    console.log(detectingCycles(line));
  }
});

function detectingCycles(line){
  var arr = line.split(' ');
  var map = {};
  arr = arr.map(function(val){
    return Number(val);
  });
  var longPossLength = Math.floor(arr.length / 2);
  for(var i = 0, len = arr.length; i < len; i++){
    var long = longPossLength;
    if( i < arr.length - 1){
      if( arr[i] === arr[i+1]){
        return arr[i];
      }
    }
    // there are only so many possibilities for each index position
    if( i < longPossLength){
      var possForPos = Math.floor((arr.length - i)/2);
        while( possForPos  >= 2 ) {
          var option = arr.slice(i, i + possForPos).join('');
          //console.log('option is ', option);
          //console.log('map[option] is ', map[option]);
          if(map[option] !== undefined){
            //console.log('++++++++++++++')
            if( map[option] + option.length - 1 < i ){
              return option;
            }
          } else {
            map[option] = i;
            possForPos--;
          }
        }
    } else {
      possForPos = Math.min(arr.length - i, longPossLength);
      while( possForPos  >= 2 ) {
        option = arr.slice(i, i + possForPos).join('');
        if(map[option] !== undefined){
          if( map[option] + option.length - 1 < i ){
            return option;
          } else {
            possForPos--;
          }
        } else {
          map[option] = i;
          possForPos--;
        }
      }
    }
  }
}