/* jshint node:true */

'use strict';
var fs = require('fs');

var input = fs.readFileSync('./input').toString();
console.log(input);
var floor = 0;
for (var i=0; i < input.length; i++) {
	if (input[i] == '(') {
		floor++;
	} else if (input[i] == ')') {
		floor--;
	}
	if (floor == -1) {
		console.log('entered basement', i+1);
	}
}

console.log('floor', floor);