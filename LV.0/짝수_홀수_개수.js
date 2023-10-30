/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(num_list){
    if(num_list.length<1||num_list.length>100){
        throw console.error("ERROR : num_list.length must be in range 1~100");
    }
    var even_number = 0;
    var odd_number = 0;
    num_list.forEach( n => {
        if(n<0 || n>1000)throw console.error("ERROR: n in num_list must be in range 0~1000");
        if(n%2==0)even_number++;
        else if(n%2==1)odd_number++;
    });
    var result = [even_number, odd_number];
    return result;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,5,7]));