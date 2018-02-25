const lib = require('../lib');

const should = require('chai').should();
const expect = require('chai').expect;
const assert = require('chai').assert;

const obj = {
  api: {
    test: 'ok',
  },
  docs: 'docs'
};

const func = () => {
  return 1;
};

var $func = lib(func, obj);

describe('js-function-properties tests', () => {
  it ('should return the api at .api', () => {
    expect($func.api).to.eql(obj.api);
  });
  it ('should return the docs at .docs', () => {
    expect($func.docs).to.eql(obj.docs);
  });
  it ('should throw when accessing an invalid property', () => {
    try {
      $func.a;
      throw 'Needs to be an error';
    }
    catch (e) {
      expect(e).to.be.an('error');
    }
  });
  it ('should run the function normally', () => {
    expect($func()).to.eql(func());
  });
});
