var slugify = require('slugify')

let a=slugify('some string') // some-string

// if you prefer something other than '-' as separator
slugify('some string', '_') 
console.log(a)