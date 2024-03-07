const chai = require('chai');
const expect = chai.expect;
const { hexToString, stringToHex } = require('../src/utils');

describe('Utility Function Tests', function() {
  it('should convert hex string to normal string', function() {
    const hex = '0x68656c6c6f';
    const result = hexToString(hex);
    expect(result).to.equal('word test ');
  });

  it('should convert normal string to hex string', function() {
    const str = 'word test';
    const result = stringToHex(str);
    expect(result).to.match(/^0x[a-f0-9]+$/);
  });
});
