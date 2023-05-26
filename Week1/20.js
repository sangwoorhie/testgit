function solution(s) {
    let arr = s.split("")
    let arrayp = arr.filter(function (item) {
        return item === 'p' || item === 'P'
    })
    let arrayy = arr.filter(function (item) {
        return item === 'y' || item === 'Y'
    })

    if ((arrayp.length === arrayy.length) ||
        (arrayp.length == 0 && arrayy.length == 0)) {
        return true
    }
    else {
        return false
    }
}


let x = absolutes
let y = signs
function soultion(x, y) {
    for (var i = 0; i < x.length; i++) {
        if (y[i] === true) {
            answer = answer + x[i];
        } else if (y[i] === false) {
            answer = answer - x[i];
        }
    }
    var answer = 0;
    return answer;
}