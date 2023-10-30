/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(my_stirng, index_list){
    var out = '';
    index_list.forEach(e=>{
        out = out + my_stirng[e];
    })
    return out;
}

console.log(solution("cvsgiorszzzmrpaqpe",[16,6,5,3,12,14,11,11,17,12,7]));
console.log(solution("zpiaz",[1,2,0,0,3]));