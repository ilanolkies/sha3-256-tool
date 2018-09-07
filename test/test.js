var sha3 = require('../lib/index.js')
var assert = require('assert')

const cases = [
  {
    value: '',
    hex: '',
    result: 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'
  },
  {
    value: 'ilan',
    hex: '696c616e',
    result: 'b9d273968a2838fcc8d55cdc7dba0b2fc81ef1c01ac696a160e2379af5dd95b0'
  },
  {
    value: 'ilan.olkies',
    hex: '696c616e2e6f6c6b696573',
    result: 'beee060ae459cb0a959986f4b20f19361c76cedb511a8dc2edc28d6930ff5ffa'
  },
  {
    value: 'ilanolkies',
    hex: '696c616e6f6c6b696573',
    result: '12a5de1fcb651d28cfc2ae9c938c083c1c0d2cd1f00ae198efd2f69a5455a78b'
  }
]

describe('sha3-256.js', function () {
  describe('No options', function () {
    it('Should return SHA3-256 hash', function () {
      for (let i in cases) assert.equal(sha3(cases[i].value), cases[i].result)
    })
  })

  describe('in-hex option', function () {
    const options = ['in-hex']
    it('Should return SHA3-256 hash', function () {
      for (let i in cases) assert.equal(sha3(cases[i].hex, options), cases[i].result)
    })
  })

  describe('in-prefixed-hex option', function () {
    const options = ['in-prefixed-hex']
    it('Should return SHA3-256 hash', function () {
      for (let i in cases) assert.equal(sha3('0x' + cases[i].hex, options), cases[i].result)
    })
  })

  describe('out-prefixed option', function () {
    const options = ['out-prefixed']
    it('Should return SHA3-256 hash', function () {
      for (let i in cases) assert.equal(sha3(cases[i].value, options), '0x' + cases[i].result)
    })
  })

  describe('in-hex in-prefixed-hex option', function () {
    const options = ['in-hex', 'out-prefixed']
    it('Should return SHA3-256 hash', function () {
      for (let i in cases) assert.equal(sha3(cases[i].hex, options), '0x' + cases[i].result)
    })
  })

  describe('in-prefixed-hex in-prefixed-hex option', function () {
    const options = ['in-prefixed-hex', 'out-prefixed']
    it('Should return SHA3-256 hash', function () {
      for (let i in cases) assert.equal(sha3('0x' + cases[i].hex, options), '0x' + cases[i].result)
    })
  })
})
