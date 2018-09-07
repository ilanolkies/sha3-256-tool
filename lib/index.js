var CryptoJS = require('crypto-js')

/**
 * Get SHA3-256 hash given a string.
 * @property {string} value - Value to hash.
 * @property {[]} options - Options to decode input and return output.
 *  If contains 'in-hex' then value is hex and will be parsed to string to calculate hash.
 *  If contains 'in-prefixed-hex' then input is hex and has '0x' prefix, the prefix will be substracted and will be parsed to string to calculate hash.
 *  If containts 'out-prefixed' then output will be prefixed with '0x'.
 *  Do not use both 'in-hex' and 'in-prefixed-hex'
 * @returns {string} SHA3-256 hash
 */
module.exports = function (value, options = []) {
  const inHex = options.includes('in-hex')
  const inPrefixedHex = options.includes('in-prefixed-hex')
  const outPrefixed = options.includes('out-prefixed')

  if (inPrefixedHex) value = value.substr(2)
  if (inHex || inPrefixedHex) value = CryptoJS.enc.Hex.parse(value)

  let result = outPrefixed ? '0x' : ''

  result += CryptoJS.SHA3(value, {
    outputLength: 256
  }).toString()

  return result
}
