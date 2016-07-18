/**
 * Comma number formatter
 * @param {Number} number Number to format
 * @param {String} [separator=','] Value used to separate numbers
 * @param {String} [decimalSeparator='.'] Value used to separate decimal digits
 * @returns {String} Comma formatted number
 */
module.exports = function commaNumber (number, separator, decimalSeparator) {
  separator = typeof separator === 'undefined' ? ',' : ('' + separator)
  decimalSeparator = typeof decimalSeparator === 'undefined' ? '.' : ('' + decimalSeparator)

  // Convert to number if it's a non-numeric value
  if (typeof number !== 'number') {
    number = Number(number)
  }

  // NaN => 0
  if (isNaN(number)) {
    number = 0
  }

  // Return Infinity immediately
  if (!isFinite(number)) {
    return '' + number
  }
  
  var result = []

  // Grab decimal part
  var decimalString = ('' + number).split(decimalSeparator)[1]
  
  if (decimalString) {
    result[] = decimalSeparator + decimalString
  }

  // Process integer part
  var stringNumber = ('' + Math.abs(Math.floor(number)))
    .split('')
    .reverse()

  for (var i = 0; i < stringNumber.length; i++) {
    if (i && i % 3 === 0) {
      result.push(separator)
    }
    result.push(stringNumber[i])
  }

  // Handle negative numbers
  if (number < 0) {
    result.push('-')
  }

  return result
    .reverse()
    .join('')
}
