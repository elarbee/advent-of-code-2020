const assert = require('assert');
const {find2Product, find3Product, partI, partII} = require('./index');

describe('helper functions', () => {
  it('find2Product', () => {
    const input = [1, 3, 4, 5, 6, 8];
    const sum = 10;
    assert(find2Product(input, sum) === 24);
  });
  it('find3Product', () => {
    const input = [1, 3, 4, 5, 6, 8];
    const sum = 10;
    assert(find3Product(input, sum) === 8);
  });
});

describe('solution', () => {
  it('Part I', () => {
    partI(ans => {
      assert(ans === 889779);
    });
  });
  it('Part II', () => {
    partII(ans => {
      assert(ans === 76110336);
    });
  });
});
