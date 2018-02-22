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

describe('function-properties tests', () => {
  it ('should return the api at .api', () => {
    expect($func.api).to.eql(obj.api);
  });
  it ('should return the docs at .docs', () => {
    expect($func.docs).to.eql(obj.docs);
  });
  it ('should run the function normally', () => {
    expect($func()).to.eql(func());
  });
});
