/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(price){
    if(price>=100000&&price<300000){
        return Math.floor(price*0.95);
    } else if(price>=300000&&price<500000){
        return Math.floor(price*0.9);
    } else if(price>=500000){
        return Math.floor(price*0.8);
    } else return price;
}

console.log(solution(150000));
console.log(solution(580000));