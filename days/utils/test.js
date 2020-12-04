const {readFile, parseDecimal} = require('./utils');
const assert = require('assert');

describe('Utility functions', () => {
  it('readFile', () => {
    readFile(__dirname, 'test.txt', (err, data) => {
      assert(!err);
      assert(data === 'hello\n');
    });
  });
  it('parseDecimal', () => {
    assert(parseDecimal('1234') === 1234 );
  });
});
