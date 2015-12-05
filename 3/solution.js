/* jshint node:true */
/* jshint esnext:true */

'use strict';
var fs = require('fs');

var input = fs.readFileSync('./input').toString();
//input = '^v^v^v^v^v';

function numSort(a, b) {
	return a - b;
}

function key(x,y) {
	return `${x},${y}`;
}

var x=0;
var y=0;
var visited = new Set();
visited.add(key(x,y));

for (var i of input) {
	if (i == '<') {
		x--;
	}
	else if (i == '>') {
		x++;
	}
	else if (i == '^') {
		y++;
	}
	else if (i == 'v') {
		y--;
	}
	visited.add(key(x,y));
}

//console.log(visited);
console.log('houses visited', visited.size); //2592
