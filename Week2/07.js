// 고차함수, 함수function을 return함.

function multiplyBy(num){
    return function (x){
        return x * num
    }
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2);
const multiplyByThree = multiplyBy(3);

console.log(multiplyByTwo(10)) // x * num => 10 * 2 = 20
console.log(multiplyByThree(20)) // x * num => 20 * 3 = 60

// 위에서 multiplyByTwo와 multiplyByThree에 괄호쓰고 매개변수를 쓴 이유는, 그 매개변수를 입력한 함수를 실행했을 때 값을 구해야 하기 때문.
// 여기서 임의로 입력한 10과 20은 매개변수 x에 들어가는 값.
// 그냥 multiplyByTwo만 쓰면 funcion값이 찍힘
// 즉 console.log(multiplyByTwo) = console.log(function(x){return x * num})

// const multiplyByTwo에서는 num 자리에 2
// const multiplyByTwo = function (x) {
//     return x + 2;
// }

// const multiplyByTwo에서는 num 자리에 3
// const multiplyByTwo = function (x) {
//     return x + 3;
// }

function multiplyBy(num){
    return function (x){
        return x * num
    }
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2);
const multiplyByThree = multiplyBy(3);

const result = add(multiplyByTwo(5), multiplyByThree(10)); // x * num => (5 * 2) + (10 * 3) = 40 
console.log (`FINAL => ${result}`)