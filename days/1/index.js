const {readFile, parseDecimal} = require('../utils/utils');

const SUM = 2020;

// Part 1
const find2Product = (input, sum) => {
  const entries = input.sort((a, b) => a - b);
  for (const a of entries) {
    for (const b of entries.reverse()) {
      if (a + b === sum) {
        return a * b;
      }
    }
  }
};

// Part 1
const find3Product = (input, sum) => {
  const entries = input.sort((a, b) => a - b);
  for (const a of entries) {
    for (const b of entries) {
      for (const c of entries) {
        if (a + b + c === sum) {
          return a * b * c;
        }
      }
    }
  }
};

const partI = callback => readFile(__dirname, './input.txt', (err, data) => {
  const entries = data.split('\n').map(parseDecimal);
  callback(find2Product(entries, SUM));
});


const partII = callback => readFile(__dirname, './input.txt', (err, data) => {
  const entries = data.split('\n').map(parseDecimal);
  callback(find3Product(entries, SUM));
});


const solve = () => {
  console.log('Day 1');
  partI(ans => console.log('Part I: ', ans));
  partII(ans => console.log('Part II: ', ans));
};

module.exports = {
  find2Product,
  find3Product,
  partI,
  partII,
  solve,
};
