/*
    Ho-01
    kimhobig@gmail.com
*/

//angle
function solution(angle){
    if(angle<=0||angle>180){
        throw console.error("ERROR : angle must be in range 1~180");
    }
    if(angle>0&&angle<90) return 1;
    else if(angle==90) return 2;
    else if (angle>90&&angle<180) return 3;
    else if (angle==180) return 4;
}

console.log(solution(70));
console.log(solution(91));
console.log(solution(180));