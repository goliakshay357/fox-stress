// const exec = require('await-exec')
const exec = require('child_process').exec;

class Execution {
     execCmd(){
        // return exec('ab -c 50 -n 300 api.canvasboard.live/');
        return new Promise((done, failed) => {
            exec('ab -c 50 -n 500 api.canvasboard.live/', (err, stdout, stderr) => {
                if (err) {
                    err.stdout = stdout
                    err.stderr = stderr
                    failed(err)
                    return
                  }
                
                done(stdout)
            })
        })
    }
}

module.exports = Execution