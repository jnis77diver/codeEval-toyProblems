//https://www.codeeval.com/open_challenges/152/
var fs  = require('fs');
var filename = process.argv[2] || './test.txt';

fs.readFileSync(filename, 'utf8').toString().split('\n').forEach(function (line) {
  if (line !== '') {
    //do something here
    console.log(ageDistribution(line));
   }
});

/*If they're from 0 to 2 the child should be with parents print : 'Still in Mama's arms'
If they're 3 or 4 and should be in preschool print : 'Preschool Maniac'
If they're from 5 to 11 and should be in elementary school print : 'Elementary school'
From 12 to 14: 'Middle school'
From 15 to 18: 'High school'
From 19 to 22: 'College'
From 23 to 65: 'Working for the man'
From 66 to 100: 'The Golden Years'
If the age of the person less than 0 or more than 100 - it might be an alien - print: "This program is for humans"*/
function ageDistribution(line){
  //code here
  var num = Number(line.trim());
  if(num >= 0 && num <= 2) return "Still in Mama's arms";
  if(num >=3 && num <= 4 ) return 'Preschool Maniac';
  if(num >=5 && num <= 11 ) return 'Elementary school';
  if(num >=12 && num <= 14 ) return 'Middle school';
  if(num >=15 && num <= 18 ) return 'High school';
  if(num >=19 && num <= 22 ) return 'College';
  if(num >=23 && num <= 65 ) return 'Working for the man';
  if(num >=66 && num <= 100 ) return 'The Golden Years';
  if(num < 0 && num > 100) return "This program is for humans";


}
