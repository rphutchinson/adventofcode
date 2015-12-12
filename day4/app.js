"use strict";

var crypto = require('crypto');

var key = 'yzbqklnj',
  found = false, 
  start = 0;

for(let i = 0; !found; i++){
  let result = crypto.createHash('md5').update(key + i).digest('hex');
  if(result.startsWith('000000')){
    console.log(i);
    found = true;
  }
}