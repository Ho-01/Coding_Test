/*
    Ho-01
    kimhobig@gmail.com
*/

//reverse
function solution(num_list){
    var len = num_list.length;
    var output = new Array();
    if(len<1||len>1000){
        throw console.error("ERROR : num_list.length must be in range 1~1000");
    }
    for(var i = len-1 ; i>=0 ; i--){
        if(num_list[i]<0||num_list[i]>1000){
            throw console.error("ERROR : num in num_list must be in range 0~1000");
        }
        output.push(num_list[i]);
    }
    return output;
}

var a1 = [1,2,3,4,5];
var a2 = [1,1,1,1,1,2];
var a3 = [1,0,1,1,1,3,5];

console.log(solution(a1));
console.log(solution(a2));
console.log(solution(a3));