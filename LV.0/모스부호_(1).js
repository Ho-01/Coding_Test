/*
    Ho-01
    kimhobig@gmail.com
*/

//
let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

function solution(letter){
    let out = [];
    letter.split(" ").forEach( code =>{        
        out.push(morse[code]);
    })
    return out.join("");
}

console.log(solution(".... . .-.. .-.. ---"));
console.log(solution(".--. -.-- - .... --- -."));