const {readFile, parseDecimal} = require('../utils/utils');

const tokenizeLine = (line) => {
  const tokens = line.split(':');

  const rule = tokens[0];
  const password = tokens[1].replace(/\s/g, '');

  const ruleTokens = rule.split(/[-,\s]/g);

  const a = parseDecimal(ruleTokens[0]);
  const b = parseDecimal(ruleTokens[1]);
  const letter = ruleTokens[2];

  return {
    rule: {
      a,
      b,
      letter,
    },
    password,
  };
};

const lengthRule = ({password, rule}) => {
  const regEx = new RegExp(rule.letter, 'g');
  const occurrences = (password.match( regEx) || []).length;
  return occurrences >= rule.a && occurrences <= rule.b;
};

const posRule = ({password, rule}) => {
  const charAtA = password.charAt(rule.a -1);
  const charAtB = password.charAt(rule.b -1);

  const charAtAMatch = charAtA === rule.letter;
  const charAtBMatch = charAtB === rule.letter;

  const AND = charAtAMatch && charAtBMatch;
  const OR = charAtAMatch || charAtBMatch;

  return !AND && OR;
};

const getTokens = callback => readFile(__dirname, './input.txt', (err,data) => {
  const lines = data.split('\n');
  const tokens = lines.map(tokenizeLine);
  callback(tokens);
});

const partI = callback => getTokens(tokens => {
  const partI = tokens.filter(lengthRule).length;
  callback(partI);
});

const partII = callback => getTokens(tokens => {
  const partII = tokens.filter(posRule).length;
  callback(partII);
});

const solve = () => {
  console.log('Day 2')
  partI(ans => console.log('Part I:', ans));
  partII(ans => console.log('Part II:', ans));
}

module.exports = {
  tokenizeLine,
  lengthRule,
  posRule,
  getTokens,
  partI,
  partII,
  solve,
};

