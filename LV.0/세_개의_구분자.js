/*
    Ho-01
    kimhobig@gmail.com
*/

//
function solution(myStr){
    var tmp = "";
    var out = [];
    for(var i=0 ; i<myStr.length ; i++){
        if(myStr[i]=="a"||myStr[i]=="b"||myStr[i]=="c"){
            if(tmp){
                out.push(tmp);
                tmp = "";
            }
        } else{
            tmp+=myStr[i];
        }
    }
    if(tmp){
        out.push(tmp);
    }

    if(out.length==0){
        return ["EMPTY"];
    }
    return out;
}

console.log(solution("baconlettucetomato"));
console.log(solution("abcd"));