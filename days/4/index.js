const {parseDecimal, readFile, solveDay} = require('../utils/utils');

const FIELDS = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const splitPassports = data => data.split(/\n\n/).map((s) => s.replace(/\n/g, ' '));

const getEntries = passport => {
  return passport.split(' ').map((p) => p.split(':'));
};

const toObj = passport => {
  return Object.fromEntries(getEntries(passport));
};

const getKeys = passport => {
  const entries = getEntries(passport);
  const keys = entries.map((p) => p[0]);
  return keys;
};

const hasValidKeys = keys => {
  return FIELDS.every((f) => keys.includes(f));
};

const hasAllKeys = passport => {
  const keys = getKeys(passport);
  return hasValidKeys(keys);
};

const validPassport = passport => {
  if (!hasAllKeys(passport)) {
    return false;
  }
  // Passport as object
  const pass = toObj(passport);

  // Helper functions
  const getInt = p => parseDecimal(pass[p]);
  const outOfBounds = (n, min, max) => n < min || n > max;
  const propOutOfBounds = (p, min, max) => outOfBounds(getInt(p), min, max);

  // byr (Birth Year) - four digits; at least 1920 and at most 2002.
  if (propOutOfBounds('byr', 1920, 2002)) {
    return false;
  }
  // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
  if (propOutOfBounds('iyr', 2010, 2020)) {
    return false;
  }
  // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
  if (propOutOfBounds('eyr', 2020, 2030)) {
    return false;
  }
  // hgt (Height) - a number followed by either cm or in:
  const hgt = pass['hgt'];
  if (!hgt.match(/^[0-9]+(cm|in)$/)) {
    return false;
  }
  // If cm, the number must be at least 150 and at most 193.
  if (hgt.match(/cm$/)) {
    const num = hgt.match(/^\d+/)[0];
    if (outOfBounds(num, 150, 193)) {
      return false;
    }
  }
  // If in, the number must be at least 59 and at most 76.
  if (hgt.match(/in$/)) {
    const num = hgt.match(/^\d+/)[0];
    if (outOfBounds(num, 59, 76)) {
      return false;
    }
  }
  // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  if (!pass['hcl'].match(/^#\w{6}/)) {
    return false;
  }
  // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
  const validEyes = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  if (!validEyes.includes(pass['ecl'])) {
    return false;
  }
  // pid (Passport ID) - a nine-digit number, including leading zeroes.
  const pid = pass['pid'];
  const length = pid.length === 9;
  const hasNonDigits = pid.match(/\D/);
  if (!length || hasNonDigits) {
    return false;
  }
  return true;
};

const getPassports = callback => readFile(__dirname, './input.txt', (err, data) => {
  const passports = splitPassports(data);
  callback(passports);
});

const partI = callback => getPassports(passports => {
  const validPassports = passports.filter(hasAllKeys);
  callback(validPassports.length);
});

const partII = callback => getPassports(passports => {
  const validPassports = passports.filter(validPassport);
  callback(validPassports.length);
});

const solve = solveDay(4, partI, partII);

module.exports = {
  splitPassports,
  getEntries,
  toObj,
  getKeys,
  hasValidKeys,
  hasAllKeys,
  validPassport,
  getPassports,
  partI,
  partII,
  solve,
};
