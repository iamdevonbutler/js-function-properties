{
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
    returns: {
      type: 'Object',
      description: 'Returned Object is wrapped w/ the following properties and methods.',
      properties: {
        src: {
          type: 'Object',
          desciption: 'The orginal unwrapped Object.'
        },
      },
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
}
