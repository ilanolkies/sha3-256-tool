var readline = require('readline')
var sha3 = require('./lib/index.js')

var rl = readline.createInterface(process.stdin, process.stdout)
rl.setPrompt('sha3> ')
rl.prompt()

let options = []

if (process.argv.length > 2) for (let i = 2; i < process.argv.length; i++) options.push(process.argv[i])

rl
  .on('line', function (line) {
    console.log(sha3(line, options))
    rl.prompt()
  })
  .on('error', function (e) {
    console.log(e)
    process.exit()
  })
