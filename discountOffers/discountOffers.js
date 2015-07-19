
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';


fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(discountOffers(line));
   }
});

function discountOffers(line){
  //code here
  var suitabilityScore = 0;
  var arr = line.trim().split(';');
  var customers = arr[0].trim().split(',');
  var products = arr[1].trim().split(',');
  var customersStorage = {};
  for(var j = 0, length = customers.length; j < length; j++){
    //var letters = customers[j].split(/[a-z]/i).length;
    var letters = customers[j].match(/[a-z]/gi);
    letters = letters? letters.length: 0;
    //var letters = customers[j].split(/[^\s]/i).length-1;
    //var vowels = customers[j].split(/[aeiouy]/i).length;
    var vowels = customers[j].match(/[aeiouy]/gi);
    vowels = vowels? vowels.length: 0;
    var consonants = letters - vowels;
    customersStorage[customers[j]] = {};
    customersStorage[customers[j]].letters = letters;
    customersStorage[customers[j]].vowels = vowels;
    customersStorage[customers[j]].consonants = consonants;
  }

  for(var i = 0, len = products.length; i < len; i++){
    var productSS = 0;
    //var numProdLetters = products[i].split(/[a-z]/i).length;
    var numProdLetters = products[i].match(/a-z/gi);
    numProdLetters = numProdLetters? numProdLetters.length: 0;
    console.log('numProdLetters is ', numProdLetters);
    for(var key in customersStorage){
      var tempSS = 0;
      if(numProdLetters % 2 === 0){
        // numProdLetters is even
        tempSS = customersStorage[key] && customersStorage[key].vowels? customersStorage[key].vowels * 1.5: 0;
        console.log('tempSS is ', tempSS);
      }
      else {
        // numProdLetters is odd
        tempSS = customersStorage[key] && customersStorage[key].consonants? customersStorage[key].consonants: 0;
        console.log('tempSSODD is ', tempSS);
      }
      if(gcd(numProdLetters, customersStorage[key].letters) > 1){
        tempSS = tempSS * 1.5;
      }
      productSS = Math.max(productSS, tempSS);
      console.log('suitabilityScore is ', suitabilityScore);
    }
    suitabilityScore += productSS;
  }
  return suitabilityScore;
}

// Find greatest common factor for two numbers, will return 1 if nothing higher
// from http://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor
function gcd(a,b) {
  if (a < 0) a = -a;
  if (b < 0) b = -b;
  if (b > a) {var temp = a; a = b; b = temp;}
  while (true) {
    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;
  }
}

