
var fs = require('fs');

//read the input file into an array
const packages = fs.readFileSync('input.txt').toString().split("\n");

console.log("total wrapping paper: " + packages.reduce((acc, val) => acc + _calcWrapping(val), 0));
console.log("total ribbon: " + packages.reduce((acc, val) => acc + _calcRibbon(val), 0));

//internal functions
function _calcWrapping(dimString){
  const dims = _sortedDims(dimString);
  return 3*dims[0]*dims[1] + 2*dims[0]*dims[2] + 2*dims[1]*dims[2];
}

function _calcRibbon(dimString){
  const dims = _sortedDims(dimString);
  return 2*dims[0] + 2*dims[1] + dims.reduce((p,c) => p*c);
}

function _sortedDims(dimString){
  return dimString.split('x')
    .map((val) => Number(val))
    .sort((a, b) => a - b);
}



