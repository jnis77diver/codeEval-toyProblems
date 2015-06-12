var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== "") {
    //do something here
    console.log(prefixExpressions(line));
  }
});

function prefixExpressions(str){
  // find first number and split string on that number
  var total = 0, cycle = 0;
  var indFirstNum = str.match(/[0-9]/i).index;
  var operands = str.substr(indFirstNum).split(' ');
  var operators = str.substr(0, indFirstNum - 1).split(' ');
  while(operators.length){
    var operator = operators.pop();
    var operand1 = cycle === 0? operands.shift(): total;
    total = eval(operand1 + operator + operands.shift());
    cycle++;
  }
  return total;
}


