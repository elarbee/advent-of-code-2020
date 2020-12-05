const {readFile, parseDecimal, solveDay} = require('../utils/utils');

const sPrime = {x: 0, y: 0};

const TREE = '#';

const getPoint = (x, y, matrix) => {
  const width = matrix[0].length;
  return matrix[y][x%width];
};

const isTree = (x, y, matrix) => {
  const char = getPoint(x, y, matrix);
  return char === TREE;
};

const getCoords = (matrix, step) => {
  const height = matrix.length -1;
  const coords = [];

  let {x, y} = sPrime;
  const {xStep, yStep} = step;

  // First step
  x += xStep;
  y += yStep;

  while (y <= height) {
    coords.push({x, y});
    x += xStep;
    y += yStep;
  }

  return coords;
};

const numTrees = (matrix, step) => {
  const coords = getCoords(matrix, step);
  const trees = coords.filter((c) => isTree(c.x, c.y, matrix));
  return trees.length;
};

const getMatrix = callback => readFile(__dirname, './input.txt', (err,data) => {
  callback(data.split('\n'));
});

const partI = callback => getMatrix(matrix => {
  const step = {xStep: 3, yStep: 1};
  const partI = numTrees(matrix, step);
  callback(partI);
});

const partII = callback => getMatrix(matrix => {
  const steps = [
    {xStep: 1, yStep: 1},
    {xStep: 3, yStep: 1},
    {xStep: 5, yStep: 1},
    {xStep: 7, yStep: 1},
    {xStep: 1, yStep: 2},
  ];
  const numSteps = steps.map((s) => numTrees(matrix, s));
  const partII = numSteps.reduce((n, a) => n*=a);
  callback(partII);
});

const solve = solveDay(3,partI, partII);

module.exports = {
  getPoint,
  isTree,
  getCoords,
  numTrees,
  partI,
  partII,
  solve,
}
