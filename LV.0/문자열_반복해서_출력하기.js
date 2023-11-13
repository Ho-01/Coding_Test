/*
    Ho-01
    kimhobig@gmail.com
*/

//
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    rl.close();
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    let out = new Array(n);
    for(let i=0 ; i<n ; i++){
        out.push(str);
    }
    console.log(out.join(""));    
    process.exit();
});