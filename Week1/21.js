// function soultion(absolutes, signs) {
//     var answer = 0;
//     for (var i = 0; i < absolutes.length; i++) {
//         if (signs[i] === true) {
//             answer = answer + absolutes[i];
//         } else if (signs[i] === false) {
//             answer = answer - absolutes[i];
//         }
//     }
//     return answer;
// }

function solution (strings, n){
    var answer = [];
    for(var i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
    }
    strings.sort()

    for(var j = 0; j < strings.length; i++) {
        string[j] = string[j].replace("string[j][0]","");
        answer.push(string[j])
    }

    console.log(strings);
    return answer;
}

solution (["sun", "bed", "car"], 1);

// 1 string 문자열의 가장 앞글자를 붙인 배열열 만들기 (for문)
// n은 인덱스의 n번째 글자. strings[i][n]은 해당 문자열의 n번째 글자 (0, 1, 2, 3...)
// strings[i] = strings[i][n] + strings[i] 이렇게 하면 예를들어 srings[i]가 car 이고 n이 1일 경우, acar



// 2 해당 문자열을 사전순으로 배열 sort
// 3 앞글자 제거 후 리턴