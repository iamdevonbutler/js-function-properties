# function-properties [![Build Status](https://travis-ci.org/iamdevonbutler/function-properties.svg?branch=master)](https://travis-ci.org/iamdevonbutler/function-properties)

Add properties to functions using Proxies for API documenation and other stuffs.

Useful for libraries w/ a need to deliver convenient API access.

## Installation
```
npm i --save function-properties
```

## Example
```javascript
const functionProperties = require('function-properties');

var exampleFunc = function(obj, setting) {};

var api = {
  api: {
    param1: {
      type: 'Object',
      name: 'obj',
      description: 'src Object to wrap w/ interface.',
      required: true,
    },
    param2: {
      type: 'Boolean',
      name: 'setting',
      default: true,
      description: 'By default returns a new Object and does not modify the original.',
    },
    return: {
      type: 'Object',
      description: 'Returned Object is wrapped w/ the following properties and methods.',
      properties: {},
      methods: {
        forEach: {
          desciption: '',
        },
        map: {
          desciption: '',
        }
      }
    },
  }
};

var $exampleFunc = functionProperties(exampleFunc, api);

console.log($exampleFunc.api); // Logs the API Object from above.

var result = $exampleFunc({
  a: 1,
  b: 2,
}, true);

```
