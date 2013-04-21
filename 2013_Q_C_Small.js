// https://code.google.com/codejam/contest/2270488/dashboard#s=p2
// 2013_Q_C_Small.js

// Note - this is a bad way of doing it,
// i would assume the "efficient" way 
// would be to build the roots through 
// nested loops or something....
var inputFile = '/Users/mark/Downloads/C-small-attempt3.in';

var isPalindrome = function(num) {
   str = String(num);
   reverseStr = str.split('').reverse().join('');
   return (reverseStr == str);
}

fs = require('fs')
fs.readFile(inputFile, 'utf8', function (err,data) {
   if (err) {
      return console.log(err);
   }

   numCases = data.split("\n")[0];
   for (i = 0; i < numCases; ++i) {
      (function() {
         total = 0;
         // boardify
         line = data.split("\n")[i+1];
         lower = parseInt(line.split(" ")[0]);
         upper = parseInt(line.split(" ")[1]);
         for (j = lower; j <= upper; ++j) {
            if (isPalindrome(j)) {
               if (((Math.sqrt(j) % 1) == 0) || (j==1)) {
                  if (isPalindrome(Math.sqrt(j))) ++total;
               }
            }
         }
         console.log("Case #" + (i+1) + ": " + total);
      })()
   }

});
