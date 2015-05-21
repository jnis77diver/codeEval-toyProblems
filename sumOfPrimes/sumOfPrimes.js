function sumOfPrimes(highNumber) {
  if(typeof highNumber !== 'number' || highNumber < 1 || highNumber % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  var counter = 0;
  var results = primeSieve(0, highNumber);
  //console.log('results is ', results);
  results.forEach(function(num){
    counter += num;
  });
  console.log(counter);
  return counter;
}

sumOfPrimes(7919);

function primeTester(n) {
  if(typeof n !== 'number' || n < 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  //check if n is 2
  if( n === 1 ) { return false; } //1 is not a prime
  var upperLim = Math.sqrt(Math.abs(n));
  //only test by numbers between 2 and sqrt of n
  for( var i = 2; i <= upperLim; i++ ){
    if( n % i === 0 ) {
      return false;
    }
  }
  return true;
}

function primeSieve(start, end) {
  var arrayOfPrimes = [];
  for (var i = start; i <= end; i++) {
    if( primeTester(i) ) {
      arrayOfPrimes.push(i);
    }
  }
  //console.log('arrayOfPrimes.length is ', arrayOfPrimes.length);
  return arrayOfPrimes;
}

