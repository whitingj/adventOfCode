/* jshint node:true */

'use strict';
var secret  = 'iwrupvqb';
var crypto = require('crypto');

var i = 0;
var hash;
var prefix = '00000'; //346386
//var prefix = '000000'; //9958218

while(true) {
  hash = crypto.createHash('md5')
  	.update(secret+i)
  	.digest('hex');
  if (hash.startsWith(prefix)) {
  	break;
  }
  if (i % 1000 === 0) {
	  process.stdout.write('.');
  }
  i++;
}
console.log();
console.log(hash, i);