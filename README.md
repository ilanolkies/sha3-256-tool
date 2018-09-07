# sha3-256-tool
sha3 256 converter js and command line tool

## Setup

- [Node.js](https://nodejs.org/es/download/)
- [npm](https://www.npmjs.com/get-npm)

```bash
npm install
```

## Usage

```
node sha3-256.js
sha3> string-to-hash
```

### Options

Init separating options with sapces:

```
node sha3-256.js opt1 opt2
sha3> string-to-hash
```

- **'in-hex'**: value is hex and will be parsed to string to calculate hash.
- **'in-prefixed-hex'**: input is hex and has '0x' prefix, the prefix will be substracted and will be parsed to string to calculate hash.
- **'out-prefixed'**: output will be prefixed with '0x'.

> Do not use both 'in-hex' and 'in-prefixed-hex'

## Tests
```bash
npm test
```
