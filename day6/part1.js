"use strict";

const rl = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
});


//initialize the array
let state = [];
for(let i=0; i<1000; i++){
  state[i] = [];
  for(let j=0; j<1000; j++){
    state[i][j] = false;
  }
};

rl.on('line', function (instruction) {
  _processInstruction(instruction.replace('turn ', '').split(' '));
});

rl.on('close', function(){
  console.log(_countLightsOn());  
});

function _processInstruction(instruction){
  let action = instruction[0], 
    startCoords = instruction[1].split(','),
    endCoords = instruction[3].split(',');

  for(let x = Number(startCoords[0]); x <= Number(endCoords[0]); x++){
    for(let y = Number(startCoords[1]); y <= Number(endCoords[1]); y++){
      if(action === 'on') state[x][y] = true;
      else if(action === 'off') state[x][y] = false;
      else if(action === 'toggle') state[x][y] = !(state[x][y]);  
    }
  }
}

function _countLightsOn(){
  let cnt = 0;
  for(let i=0; i<state.length; i++){
    for(let j=0; j<state[i].length; j++){
      if(state[i][j]) cnt++;
    }
  }
  return cnt;
}
