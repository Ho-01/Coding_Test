/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(num_list, n){
    var out = [];
    for(var i=0 ; i<n ; i++){
        out.push(num_list[i]);
    }
    return out;
}

console.log(solution([2,1,6],1));
console.log(solution([5,2,1,7,5],3));