var fs = require('fs');
var colors = require('colors');

fs.readdir("/tmp/",function(err, files){
    if (err) {
        return console.error(err);
    }   
        fs.writeFile('./tekst.txt', 'Tak wyglądają dane po zapisie!', function(err) {
            console.log(data);
        });
    });