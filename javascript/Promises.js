const fs = require('fs');

function shivsReadFile() {
    return new Promis ( function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
        resolve(data);
        });
    })
}

function onData(data) {
    console.log(data);
}

shivsReadFile().then(onDone);