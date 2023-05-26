// 함수 = function(기능);
// input, output을 갖고있는 어떤 기능의 단위.
// 입력(input)은 매개변수값으로, 출력(output)은 return값으로 함

// 1. 함수 선언문 형태
function add (매개변수input) {
   //함수 내부에서 실행할 로직(Main Logic)
}

// 두 개의 숫자를 입력 받아 입력한 후 내보내는 함수
function add (x, y) {
    return x + y;
};

// 2. 함수 표현식
let add2 = function (x, y) {
    return x + y;
};

// 함수를 호출한다 (=사용한다)
// 함수명 ( ) -> add(입력값)
console.log(add(2, 3));  // 5


function add (x, y) {
    return x + y;
};
let functionResult = add(3, 4);
console.log(functionResult);  // 7 (3+4)


// add2를 가지고 10과 20을 더한 값을 출력해보기

let add3 = function (x, y) {
    return x + y;
};
let functionResult2 = add3(10, 20);
console.log(functionResult2);  // 30 (10+20)

// 함수의 input => 매개변수 (매개체가 되는 변수)
// 함수의 output => return문 뒤에 오는 값: 반환값