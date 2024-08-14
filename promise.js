const {readFile} = require('fs')

const getText = (pathFile) => {
    return new Promise((resolve, reject) => {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    }) 
}

getText('./data/second.txt')
    .then((result) => console.log(result))
    .then(() => getText('./data/first.txt'))
    .then(result => console.log(result))
    .catch(error => console.log(error))


