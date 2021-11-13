const lineReader = require('line-reader');

// 0 -> This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
// fox-stress-backend | 1 -> Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
// fox-stress-backend | 2 -> Licensed to The Apache Software Foundation, http://www.apache.org/
// fox-stress-backend | 3 -> 
// fox-stress-backend | 4 -> Benchmarking api.canvasboard.live (be patient)
// fox-stress-backend | 5 -> 
// fox-stress-backend | 6 -> 
// fox-stress-backend | 7 -> Server Software:        openresty
// fox-stress-backend | 8 -> Server Hostname:        api.canvasboard.live
// fox-stress-backend | 9 -> Server Port:            80
// fox-stress-backend | 10 -> 
// fox-stress-backend | 11 -> Document Path:          /
// fox-stress-backend | 12 -> Document Length:        166 bytes
// fox-stress-backend | 13 -> 
// fox-stress-backend | 14 -> Concurrency Level:      50
// fox-stress-backend | 15 -> Time taken for tests:   0.759 seconds
// fox-stress-backend | 16 -> Complete requests:      300
// fox-stress-backend | 17 -> Failed requests:        0
// fox-stress-backend | 18 -> Non-2xx responses:      300
// fox-stress-backend | 19 -> Total transferred:      124800 bytes
// fox-stress-backend | 20 -> HTML transferred:       49800 bytes
// fox-stress-backend | 21 -> Requests per second:    395.14 [#/sec] (mean)
// fox-stress-backend | 22 -> Time per request:       126.537 [ms] (mean)
// fox-stress-backend | 23 -> Time per request:       2.531 [ms] (mean, across all concurrent requests)
// fox-stress-backend | 24 -> Transfer rate:          160.53 [Kbytes/sec] received
// fox-stress-backend | 25 -> 
// fox-stress-backend | 26 -> Connection Times (ms)
// fox-stress-backend | 27 ->               min  mean[+/-sd] median   max
// fox-stress-backend | 28 -> Connect:       24   53  15.9     58      86
// fox-stress-backend | 29 -> Processing:    24   55  14.1     55      89
// fox-stress-backend | 30 -> Waiting:       24   55  14.0     54      87
// fox-stress-backend | 31 -> Total:         48  108  25.5    114     162
// fox-stress-backend | 32 -> 
// fox-stress-backend | 33 -> Percentage of the requests served within a certain time (ms)
// fox-stress-backend | 34 ->   50%    114
// fox-stress-backend | 35 ->   66%    127
// fox-stress-backend | 36 ->   75%    129
// fox-stress-backend | 37 ->   80%    131
// fox-stress-backend | 38 ->   90%    140
// fox-stress-backend | 39 ->   95%    146
// fox-stress-backend | 40 ->   98%    150
// fox-stress-backend | 41 ->   99%    154
// fox-stress-backend | 42 ->  100%    162 (longest request)

class linereader {
    async line_reader(){
        let count = 0;
        return new Promise((done,failed) => {
            let obj = {}

            lineReader.eachLine('helloworld.txt', function(line, last) {
                // console.log(count, "->",line);
                count++;
                
                let array = line.split(' ');
                if(count == 9){
                    
                    obj["server_name"] = array[9];
                }

                if(count == 15){
                    
                    obj["concurrency_level"] = parseInt(array[7]);
                }

                if(count == 16){
                    obj["time_taken_for_tests_in_secs"] = parseFloat(array[6]);
                    
                }
                if(count == 17){
                    obj["complete_requests"] = parseInt(array[7])
                    console.log(obj);
                }
                
              });
              

              done("hello");
        })
    }
}

module.exports = linereader