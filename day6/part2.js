"use strict";

/*

*/

const rl = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
});


//initialize the array
let state = [];
for(let i=0; i<1000; i++){
  state[i] = [];
  for(let j=0; j<1000; j++){
    state[i][j] = 0;
  }
};

rl.on('line', function (instruction) {
  _processInstruction(instruction.replace('turn ', '').split(' '));
});

rl.on('close', function(){
  console.log(state.reduce((total, row) => total + row.reduce((p, c)=> p + c, 0), 0));  
});

function _processInstruction(instruction){
  let action = instruction[0], 
    startCoords = instruction[1].split(','),
    endCoords = instruction[3].split(',');

  for(let x = Number(startCoords[0]); x <= Number(endCoords[0]); x++){
    for(let y = Number(startCoords[1]); y <= Number(endCoords[1]); y++){
      
      if(action === 'on') state[x][y]++;
      if(action === 'off') state[x][y] = state[x][y] && state[x][y] - 1;
      if(action === 'toggle') state[x][y] = state[x][y] + 2;
    }
  }
}