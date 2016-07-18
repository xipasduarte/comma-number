var test = require('tape')
var commaNumber = require('../lib')

test('Formatting', function (t) {
  var testPairs = [
    // Positive numbers
    [0, '0'],
    [1, '1'],
    [100, '100'],
    [1000, '1,000'],
    [10000, '10,000'],
    [100000, '100,000'],
    [1000000, '1,000,000'],
    [Infinity, 'Infinity'],

    // Negative numbers
    [-1, '-1'],
    [-100, '-100'],
    [-1000, '-1,000'],
    [-10000, '-10,000'],
    [-100000, '-100,000'],
    [-1000000, '-1,000,000'],
    [-Infinity, '-Infinity'],
    
    // Decimal numbers
    [-1.1, '-1.1'],
    [-100.1, '-100.1'],
    [-1000.1, '-1,000.1'],
    [-10000.1, '-10,000.1'],
    [-100000.1, '-100,000.1'],
    [-1000000.1, '-1,000,000.1']

    // Strings
    ['0', '0'],
    ['1', '1'],
    ['100', '100'],
    ['1000', '1,000'],
    ['10000', '10,000'],
    ['100000', '100,000'],
    ['1000000', '1,000,000'],

    // Invalid input
    [[], '0'],
    [{}, '0'],
    [NaN, '0'],
    [null, '0'],
    [undefined, '0']
  ]

  t.plan(testPairs.length)
  testPairs.forEach(function (pair) {
    var str = '' + (typeof pair[0] === 'object' ? JSON.stringify(pair[0]) : pair[0])
    t.equal(commaNumber(pair[0]), pair[1], str + ' => ' + pair[1])
  })
})

test('Separator', function (t) {
  t.plan(3)
  t.equal(commaNumber(1000, ''), '1000', '1000 => 1000')
  t.equal(commaNumber(1000, ' '), '1 000', '1000 => 1 000')
  t.equal(commaNumber(1000, '.'), '1.000', '1000 => 1.000')
})
