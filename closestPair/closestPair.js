var fs  = require('fs');
var filename = process.argv[2] || './test.txt';
var coordsHolder = [];
var i = -1;

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line, index, array) {
  if (line !== '') {
    // no need to keep the first line or last line since they are really doing nothing for us
      // convert the coordinate pair into a tuple and push to coordsHolder
    var tuple = line.trim().split(' ').map(function(num){
      return parseInt(num);
    });
    if(tuple.length === 1 && tuple[0] > 0){
      i++;
      coordsHolder[i] = [];
    }
    if(tuple.length > 1){
        coordsHolder[i].push(tuple);
    }
    }
});

// find the pair with the shortest distance using Pythagorean theorem
function closestPair(coordsArray){
  var shortestDistance = 10001;
  var minDistance = 10000;
  for(var i = 0, len = coordsArray.length - 1; i < len; i++){
    var point1 = coordsArray[i];
    for(var j = i + 1; j < len; j++) {
      var point2 = coordsArray[j];
      var xDist = Math.abs(point1[0] - point2[0]);
      var yDist = Math.abs(point1[1] - point2[1]);
      if(xDist < minDistance || yDist < minDistance){
        minXDistance = xDist;
        minYDistance = yDist;
        var distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)).toFixed(4);
        shortestDistance = Math.min(shortestDistance, distance);
      }
    }
  }

  var result = shortestDistance < 10000? shortestDistance: 'INFINITY';
  console.log(result);
}

coordsHolder.forEach(function(dataSet){
  closestPair(dataSet);
});
