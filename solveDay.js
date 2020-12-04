const {parseDecimal} = require('./days/utils/utils');
const {solve: day1} = require('./days/1/index');

const solutions = [day1];
const selectedDay = process.argv[2] - 1;

if(selectedDay < 0 || selectedDay > solutions.length){
    throw "Please specify a day between 1 and 31";
}

const solve = solutions[parseDecimal(process.argv[2] - 1)];

solve();