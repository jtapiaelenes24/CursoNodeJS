const path = require('path')

const fieldPath = path.join('/public', '/dist', '/styles', 'main.css')

console.log(fieldPath)
console.log(path.basename(fieldPath))
console.log(path.dirname(fieldPath))
console.log(path.parse(fieldPath))
console.log(path.resolve('dist'))

// MINUTO 1:30:15