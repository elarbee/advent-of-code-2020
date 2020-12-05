const fs = require('fs');
const path = require('path');

const readFile = (dir, filename, callback) => {
  fs.readFile(path.resolve(dir, filename), 'utf8', callback);
};

const parseDecimal = (s) => parseInt(s, 10);

const solveDay = (n, partI, partII) => () => {
  console.log('Day 2')
  partI(ans => console.log('Part I:', ans));
  partII(ans => console.log('Part II:', ans));
}

module.exports = {readFile, parseDecimal, solveDay};
