// 조건문 ~if, else if, else, switch
// 특정 조건에 해당하는 경우에만 하위의 로직을 실행하도록 제어함.

// 1. if문 : 
// if (조건) {
//     Main Logic
// }

// 1-1.
let w = 10;
if (w > 0) {
    console.log("x는 양수입니다.")
}

// 1-2.
// y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력

let y = "Hello World";
if (y.length >= 5) {
    console.log(y.length);
}

// 2. if - else 문 : 

// if (조건) {
//     Main Logic #1
// } else {
//     Main Logic #2 (조건에 부합하지 않을 경우)
// }

let x = -3;
if (x > 0) {
     console.log('x는 양수입니다.')
} else {
     console.log('x는 음수입니다.')
}

// 3. if -else if - else 문

// if (조건1) {
//     Main Logic #1
// } else if (조건2) {
//     Main Logic #2 (조건1에 해당하지 않을경우)
// } else {
//     Main Logic #3 (조건1에도 해당X, 조건 2에도 해당하지 않을경우)
// }


let z = 10;
if (z < 0) {
    console.log('1')
} else if (z >= 0 && z < 1) {
    console.log('2')
} else {
    console.log('3') //3
}

// 4. switch문
// 변수의 값에 따라 여러개의 경우 케이스(case)라고 함
// case1, case2, case3 ...
// default 라는 용어가 나옴. 모든 case에 해당하지 않을 경우, default

let fruit = '키위';
switch (fruit) {
    case "사과":
        console.log('사과입니다.');
        break;
    case "바나나":
        console.log('바나나입니다.');
        break;
    case "키위":
        console.log('키위입니다.');
        break;
    default:
        console.log('아무것도 아닙니다.');
}