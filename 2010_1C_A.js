var inputFile = '/Users/mark/Downloads/A-large-practice.in';

fs = require('fs')
fs.readFile(inputFile, 'utf8', function (err,data) {
   if (err) {
      return console.log(err);
   }

   var lines = data.split("\n");
   numCases = lines[0];
   // to keep track of the line on the input file we need
   var ct = 0;
   
   // go through the file, put wires into an array
   for (i = 0; i < numCases; ++i) {
      wires = [];
      numWires = lines[1+i+ct];
      for (c = 0; c < numWires; ++c) {
         line = lines[2+i+ct+c].split(" ");
         wires.push(
            [parseInt(line[0]),parseInt(line[1])]
         );
      }

      ct += c;
      intersections = 0;
      // take a wire, and go through every other wire and see if they "intersect".
      // see previous version of this file to see line 33 rewritten, to understand
      // the definition. this way is more efficient. 
      wires.forEach(function (wireA) {
         wires.forEach(function (wireB) {
            if (wireA == wireB) return;
            if ( ((wireA[0] - wireB[0]) * (wireA[1] - wireB[1])) < 0)
               intersections++;
         });
      });
      console.log("Case #" + (i+1) + ": " + intersections/2);
   }
});
