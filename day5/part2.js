"use strict";

const fs = require('fs');

//read the input file into an array
const strings = fs.readFileSync('input.txt')
  .toString()
  .split('\n');

let cnt = 0;
for(let s of strings){
  if(_checkPairs(s, 0) && _checkTriples(s, 0)) cnt++;
}

console.log(cnt);

function _checkPairs(s, sliceStart){
  let pair = s.slice(sliceStart, sliceStart+2),
    rest = s.slice(sliceStart+2); 
  return rest.includes(pair) || (sliceStart < s.length-1 && _checkPairs(s, sliceStart+1));
}

function _checkTriples(s, sliceStart){
  let triple = s.slice(sliceStart, sliceStart+3);
  return s[sliceStart] === s[sliceStart+2] || (sliceStart < s.length-3 && _checkTriples(s, sliceStart+1));
}