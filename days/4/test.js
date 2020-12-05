const assert = require('assert');
const utils = require('../utils/utils');
const {splitPassports,getEntries,toObj,getKeys,hasValidKeys,hasAllKeys,validPassport,getPassports,partI,partII} = require('./index');

describe('Day 3', () => {
  describe('Helper functions', () => {
    it('splitPassports',() => {
      assert(splitPassports(example).length === 4);
    });
    it('getEntries',() => {
      const entries = getEntries(exampleValidPassport);
      assert(entries.length === 8);
      assert(entries.every(e => e.length === 2));
    });
    it('toObj',() => {
      const pass = toObj(exampleValidPassport);
      assert(pass['ecl'] === 'gry');
    });
    it('getKeys',() => {
      const keys = getKeys(exampleValidPassport);
      assert(keys[0] === 'ecl');
    });
    it('hasValidKeys',() => {
      const goodKeys = getKeys(exampleValidPassport);
      const badKeys = getKeys(exampleInvalidPassport);
      assert(hasValidKeys(goodKeys));
      assert(!hasValidKeys(badKeys));
    });
    it('hasAllKeys',() => {
      assert(hasAllKeys(exampleValidPassport));
      assert(!hasAllKeys(exampleInvalidPassport));
    });
    it('validPassport',() => {
      const isValid = invalidPassports.map(validPassport);
      assert(isValid.every(p => p === false));
    });
    it('getPassports',() => {
      getPassports(passports => {
        assert(passports[0].slice(0,8) === 'byr:1971');
        assert(passports.length === 259);
      });
    });
  })
  describe('solution', () => {
    it('partI', () => {
      partI(ans => assert(ans === 192));
    });
    it('partII', () => {
      partII(ans => assert(ans === 101))
    });
  });
});

const exampleValidPassport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd ' +
    'byr:1937 iyr:2017 cid:147 hgt:183cm';

const exampleInvalidPassport = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd ' +
    'byr:1937 iyr:2017 cid:147';

const example = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
    'byr:1937 iyr:2017 cid:147 hgt:183cm\n' +
    '\n' +
    'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\n' +
    'hcl:#cfa07d byr:1929\n' +
    '\n' +
    'hcl:#ae17e1 iyr:2013\n' +
    'eyr:2024\n' +
    'ecl:brn pid:760753108 byr:1931\n' +
    'hgt:179cm\n' +
    '\n' +
    'hcl:#cfa07d eyr:2025 pid:166559648\n' +
    'iyr:2011 ecl:brn hgt:59in'

const invalidPassports = [
    exampleInvalidPassport,
  'ecl:foobar pid:860033327 eyr:2020 hcl:#fffffd ' +
  'byr:1937 iyr:2017 cid:147 hgt:183cm',
  'ecl:gry pid:123 eyr:2020 hcl:#fffffd ' +
  'byr:1937 iyr:2017 cid:147 hgt:183cm',
  'ecl:gry pid:860033327 eyr:2050 hcl:#fffffd ' +
  'byr:1937 iyr:2017 cid:147 hgt:183cm',
  'ecl:gry pid:860033327 eyr:2020 hcl:2 ' +
  'byr:1900 iyr:2017 cid:147 hgt:183cm',
  'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd ' +
  'byr:1937 iyr:1900 cid:147 hgt:999cm'

];

// Your puzzle answer was 192.
// Your puzzle answer was 101.