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

class Santa {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.visitedSet = new Set();
		this.visitedSet.add(key(this.x, this.y));
	}

	move(dir) {
    if (dir == '<') {
      this.x--;
    }
    else if (dir == '>') {
      this.x++;
    }
    else if (dir == '^') {
      this.y++;
    }
    else if (dir == 'v') {
      this.y--;
    }
    this.visitedSet.add(key(this.x,this.y));
    //console.log(dir, this.visitedSet);
	}

  get visited() {
    return this.visitedSet.size;
  }

  getHouses() {
    return this.visitedSet;
  }
}

var santa = new Santa();
var robosanta = new Santa();

var count = 0;
for (var i of input) {
  if (count % 2 === 0) {
    santa.move(i);
  } else {
    robosanta.move(i);
  }
  count++;
}

var allHosues = new Set([...santa.getHouses(), ...robosanta.getHouses()]);

//console.log(santa.getHouses());
//console.log(robosanta.getHouses());
//console.log(allHouses);
console.log('houses visited', allHosues.size);
