var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

var triangleArray = fs.readFileSync(filename, 'utf8').toString().split('\n').map(function (line, index) {
  if (line !== "") {
    //do something here
    line = line.trim().split(' ');
    return line.map(function(num){
      return Number(num);
    });
  }
});


function passTriangle(arr){
  var total = 0;
  for(var i = 1; i < arr.length; i++){
    var row = arr[i];
    for(var j = 0; j < row.length; j++){
      var par1 = j === 0? 0: arr[i-1][j-1];
      var par2 = j === row.length - 1? 0: arr[i-1][j];
      var maxParent = Math.max(par1, par2);
      arr[i][j] = arr[i][j] + maxParent;
      total = Math.max(total, arr[i][j]);
    }
  }
  return total;
}

console.log(passTriangle(triangleArray));


/*function passTriangle(arr){
 var total = 0;
 arr.forEach(function(line, row){
 line.forEach(function(num, col){
 var len = line.length - 1;
 if(row !== 0){
 //var curValue = arr[row][col];
 var par1 = col === 0? 0: arr[row-1][col-1];
 var par2 = col === len? 0: arr[row-1][col];
 var maxParent = Math.max(par1, par2);
 arr[row][col] = num + maxParent;
 total = Math.max(total, arr[row][col]);
 }
 });
 });
 return total;
 }*/

/*function passTriangle(arr){
  var total = 0;
  var callStack = 0;
  var levels = arr.length;
  function findMax(row, col, sum){
    //console.log(callStack++);
    //if at the end
    if( row === arr.length - 1 && arr[row][col] ){
      total = Math.max(total, sum + arr[row][col]);
      return;
    }
    //return if undefined
    if( !arr[row + 1] || !arr[row][col] ) { return; }
    // if sum + 9999 * rows left < total + 9999 * rows left
    sum = sum + arr[row][col];
    if( sum + (maxNum * (levels - row -1)) < total ) { return; }
    var check = arr[row + 1][col] >= arr[row + 1][col + 1];
    if( check ){
      findMax(row + 1, col, sum);
      findMax(row + 1, col + 1, sum);
    }
    else {
      findMax(row + 1, col + 1, sum);
      findMax(row + 1, col, sum);
    }
  }
  findMax(0, 0, 0);

  return total;
}*/






