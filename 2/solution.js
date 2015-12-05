/* jshint node:true */

'use strict';
var fs = require('fs');

var input = fs.readFileSync('./input').toString();
//input = "2x3x4\n1x1x10";

function numSort(a, b) {
	return a - b;
}

var wrappingPaper = true;
if (wrappingPaper) {
	var everything = 0;

	for (var l of input.split('\n')) {
		var dim = l.split('x');
		var total = 2 * dim[0] * dim[1] + 2 * dim[0] * dim[2] + 2 * dim[1] * dim[2];
		dim.sort(numSort);
		//total += Math.min(dim[0] * dim[1], dim[0] * dim[2], dim[1] * dim[2]);
		total += dim[0] * dim[1];
		everything += total;
		//console.log(l, '=', total);
	}

	console.log('wrapping paper', everything);
	//1588178
}

var bow = true;
if (bow) {
	var everything = 0;

	for (var l of input.split('\n')) {
		var dim = l.split('x');
		var volume = dim[0] * dim[1] * dim[2];
		dim.sort(numSort);
		total = volume + dim[0] * 2 + dim[1] * 2;
		everything += total;
		//console.log(l, '=', total);
	}

	console.log('bow', everything);
	//3783758
}