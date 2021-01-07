const assert = require('assert');
const { Text, Card, List, getThemeValue, BaseTheme } = require('./lib');

assert.deepStrictEqual(typeof Text, 'function');
assert.deepStrictEqual(typeof Card, 'function');
assert.deepStrictEqual(typeof List, 'function');
assert.deepStrictEqual(typeof getThemeValue, 'function');
assert.deepStrictEqual(typeof BaseTheme, 'object');
