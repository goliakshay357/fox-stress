const { fileURLToPath } = require('url');

fs = require('fs');

class StringToFile{
    strint_to_file(str){
        return new Promise((done,failed) => {
            fs.writeFile('helloworld.txt', str, function (err) {
                if (err) return console.log(err);
                done("done");
              });
        })
    }
}

module.exports = StringToFile