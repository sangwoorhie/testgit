// ES6
// 변수선언 방법 3가지 = var, let, const

// 2015년도 이전 = var
// ES6 문법 = let, const
// let = 변수 선언시 사용
// const = 상수 선언시 사용

// let은 한번 선언하고 할당한 값에 재할당 가능
// const는 재할당 불가
// var는 재선언, 재할당 둘다 가능.

// 화살표 함수 arrow function
// 함수 선언방법 2가지

// 1.함수 선언문  
function add( ) { }

// 2.함수 표현식
var add = function ( ) { }

// 3.화살표 함수
var add = ( ) => { }

// 화살표함수에서 중괄호안의 return값이 1줄인 경우 중괄호 생략가능

var add = (x) => {
    return 1;
}
//위는 return이 1줄이므로 아래와 같이 쓸수있다.
var add = (x) => 1;

// 그리고 매개변수의 소괄호도 생략 가능해서 아래와 같이 쓸수있다.
var add = x => 1;

// 4. 3항 연산자
// condition ? true인 경우 : false인 경우

console.log(true ? '참' : '거짓');
조건 : true
조건이 true면 = '참'
조건이 false면 = '거짓'

console.log(false ? '참' : '거짓');
조건 : false
조건이 true면 = '참'
조건이 false면 = '거짓'


console.log(1 === 1 ? '참' : '거짓');
조건 : 1 === 1
조건이 true이므로 '참'

console.log(1 !== 1 ? '참' : '거짓');
조건 : 1 !== 1
조건이 false이므로 '거짓'

