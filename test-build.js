const assert = require('assert');
const { Text, Card, List } = require('./lib');

assert.deepStrictEqual(typeof Text, 'function');
assert.deepStrictEqual(typeof Card, 'function');
assert.deepStrictEqual(typeof List, 'function');
