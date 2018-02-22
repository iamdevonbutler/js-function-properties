# function-properties

Add properties to functions using Proxies for API documenation and other stuffs.

## Example
```javascript
const objectInterface = require('object-interface');
const functionProperties = require('function-properties');

var api = {
  api: {
    param1: {
      type: 'Object',
      description: 'src Object to wrap w/ interface.',
    },
    param2: {
      type: 'Boolean',
      name: 'clone',
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

var interface = functionProperties(objectInterface, api);

console.log(interface.api); // Logs the API obect from above.

var obj = interface({
  a: 1,
  b: 2,
});

```
