const crypto = require('crypto')
const num = +process.argv[2]
crypto.randomBytes(num, (err, data) => {
  if (err) {
    // Prints error
    console.log(err)
  } else {
    // Prints random bytes of generated data
    console.log('The random data is: ' + data.toString('hex'))
  }
})
