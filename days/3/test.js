const assert = require('assert');
const {getPoint,isTree,getCoords,numTrees,partI,partII} = require('./index.js')

describe('Day 3', () => {
    describe('Helper functions', () => {

        it('getPoint',() => {
            assert(getPoint(0,0, matrix) === '.');
            assert(getPoint(0,2, matrix) === '.');
            assert(getPoint(2,0, matrix) === '#');
            assert(getPoint(2,2, matrix) === '.');
        })
        it('isTree',() => {
            assert(!isTree(0,2, matrix));
            assert(isTree(2,0, matrix));
        })
        it('getCoords',() => {
            const step = {xStep: 3, yStep: 1};
            const coords = getCoords(matrix, step);
            assert(coords.slice(0,3).every((c, i) => {
               return c.x ===  (i+1)*(step.xStep) &&
               c.y ===  (i+1)*step.yStep
            }));
        })
        it('numTrees',() => {
            const step = {xStep: 3, yStep: 1};
            assert(numTrees(matrix, step) === 7)
        })
    });
    describe('solution', () => {
        it('partI', () => {
            partI(ans => assert(ans === 159));
        });
        it('partII', () => {
            partII(ans => assert(ans === 6419669520))
        });
    });
});

const example = '..##.......\n' +
    '#...#...#..\n' +
    '.#....#..#.\n' +
    '..#.#...#.#\n' +
    '.#...##..#.\n' +
    '..#.##.....\n' +
    '.#.#.#....#\n' +
    '.#........#\n' +
    '#.##...#...\n' +
    '#...##....#\n' +
    '.#..#...#.#';
const matrix = example.split('\n');
