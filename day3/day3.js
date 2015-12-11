"use strict";

const fs = require('fs');

//read the input file into an array
const directions = fs.readFileSync('input.txt').toString();

var c1 = {x:0, y:0},
    c2 = Object.assign({}, c1),
  visited = [Object.assign({}, c1)];

for(let i = 0; i < directions.length; i = i+2){
  c1 = _updatePosition(c1, directions[i]);
  _updateVisited(c1);

  c2 = _updatePosition(c2, directions[i+1]);
  _updateVisited(c2);
}

console.log(visited.length);

function _updatePosition(c, dir){
  if(dir === '<') c.x--;
  else if(dir === '>') c.x++;
  else if(dir === 'v') c.y--;
  else if(dir === '^') c.y++;

  return c
}

function _updateVisited(c){
  if(!visited.find((elem) => elem.x === c.x && elem.y === c.y)){
    visited.unshift(Object.assign({}, c));
  }  
}


