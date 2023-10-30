/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(num_list){
    var odd = '';
    var even = '';
    num_list.forEach(e=>{
        if(Number(e)%2==0){
            even = even+String(e);
        }else if(Number(e)%2==1){
            odd = odd + String(e);
        }
    })
    return Number(even)+Number(odd);
}

console.log(solution([3,4,5,2,1]));
console.log(solution([5,7,8,3]));