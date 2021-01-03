const assert = require('assert');
const { MySimpleHelloComponent } = require('./lib');

assert.deepStrictEqual(typeof MySimpleHelloComponent, 'function');
