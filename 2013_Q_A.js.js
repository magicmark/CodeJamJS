// https://code.google.com/codejam/contest/2270488/dashboard
// 2013_Q_A.js
var inputFile = '/Users/mark/Downloads/A-large.in';

var testLine = function(line) {
   moveType = {
      'X' : 0,
      'O' : 0,
      'T' : 0,
      '.' : 0
   }

   line.forEach(function (move) {
      ++moveType[move];
   });

   if (moveType['X'] == 4) return 'X';
   if ((moveType['T'] == 1) && (moveType['X'] == 3)) return 'X';
   
   if (moveType['O'] == 4) return 'O';
   if ((moveType['T'] == 1) && (moveType['O'] == 3)) return 'O';
}

fs = require('fs')
fs.readFile(inputFile, 'utf8', function (err,data) {
   if (err) {
      return console.log(err);
   }

   numCases = data.split("\n")[0];
   for (i = 0; i < numCases; ++i) {
      (function() {
         // boardify
         board = data.split("\n").slice(5*i+1, 5*i+5);

         // take horizontals
         for (j = 0; j < 4; ++j) {
            line = board[j].split('');
            result = testLine(line);
            if (result) {
               console.log("Case #" + (i+1) + ": " + result + " won");
               return;
            }
         }

         // take verticals
         for (j = 0; j < 4; ++j) {
            line = [board[0][j], board[1][j], board[2][j], board[3][j]];
            result = testLine(line);
            if (result) {
               console.log("Case #" + (i+1) + ": " + result + " won");
               return;
            }
         }

         // take diagonal 1
         line = [board[0][0], board[1][1], board[2][2], board[3][3]];
         result = testLine(line);
         if (result) {
            console.log("Case #" + (i+1) + ": " + result + " won");
            return;
         }

         // take diagonal 2
         line = [board[0][3], board[1][2], board[2][1], board[3][0]];
         result = testLine(line);
         if (result) {
            console.log("Case #" + (i+1) + ": " + result + " won");
            return;
         }
         
         // test for dots. if there is one, game isn't yet over.
         board = board.join('');
         if (board.indexOf('.') !== -1)
            console.log("Case #" + (i+1) + ": Game has not completed");
          else
            console.log("Case #" + (i+1) + ": Draw");
      })();
   }

});
