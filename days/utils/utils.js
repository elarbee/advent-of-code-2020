const fs = require('fs');
const path = require('path');

const readFile = (dir, filename, callback) => {
  fs.readFile(path.resolve(dir, filename), 'utf8', callback);
};

const parseDecimal = (s) => parseInt(s, 10);

module.exports = {readFile, parseDecimal};
