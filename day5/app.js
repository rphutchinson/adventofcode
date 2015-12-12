"use strict";

const fs = require('fs');

//read the input file into an array
const strings = fs.readFileSync('input.txt').toString().split('\n'),
  blacklist = ['ab', 'cd', 'pq', 'xy'],
  vowels = ['a', 'e', 'i', 'o', 'u'];

let cnt = 0;
for(let s of strings){
  if(_check(s[0], undefined, s.slice(1), 0, false, false)) cnt++;
}
console.log(cnt);

function _check(ch, prev, tail, vowelCount, doubleLetter, isBlacklist){
  if(vowels.indexOf(ch) !== -1) vowelCount++;
  if(ch === prev) doubleLetter = true;
  if(blacklist.indexOf(prev+ch) !== -1) isBlacklist = true;

  //end of string
  if(tail.length === 0){
    return vowelCount >= 3 && doubleLetter && !isBlacklist;
  
  //more characters
  } else {
    return _check(tail[0], ch, tail.slice(1), vowelCount, doubleLetter, isBlacklist);
  }
}

