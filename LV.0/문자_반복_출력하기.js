/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(my_string, n){
    if(my_string.length<2||my_string.length>5){
        throw console.error("ERROR : my_string.length must be in range 2~5");
    }
    if(n<2||n>10){
        throw console.error("ERROR : n must be in range 2~10");
    }
    var output = [];
    var s = my_string.split('');
    s.forEach(c => {
        for(var i =0 ; i<n ; i++){
            output.push(c);
        }
    });
    var o = output.join('');
    return o;
}

console.log(solution("hello",3));