/*
    Ho-01
    kimhobig@gmail.com
*/

//bornYear_2022
function solution(age){
    if(age<=0 || age>120){
        throw(console.error("age must be in 1~120"));
    } else{
        return 2022-age+1;
    }
}

console.log(solution(40));
console.log(solution(23));
