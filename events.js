const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (data, secondData) => {
    console.log('received')
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('response', 'Hello World', [1, 2, 3])

// MINUTO 3:42:47 STREAMS