/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(dot){
    if(dot.length!=2){
        throw console.error("ERROR : dot.length must be 2");
    }
    var x = dot[0];
    var y = dot[1];
    if(x<-500||x>500||x==0||y<-500||y>500||y==0){
        throw console.error("ERROR : x, y value is not correct");
    }
    if(x>0&&y>0) return 1;
    else if(x<0&&y>0) return 2;
    else if(x<0&&y<0) return 3;
    else return 4;
}

console.log(solution([2,4]));
console.log(solution([-7,9]));