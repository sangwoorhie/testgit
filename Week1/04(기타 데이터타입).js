//불리언 (Boolean) , 참과 거짓 true, false
let bool1 = true;
let bool2 = false;

console.log(bool1);
console.log(typeof bool1);
console.log(bool2);
console.log(typeof bool2);

//undefined : 값이 없음. 미지정
let x;
console.log(x);

//null : 개발자가 의도적으로 값이 존재하지 않음을 '명시적'으로 나타내는 방법
let y = null;
console.log(y);

//object : 객체 => key-value pair
let person = {
    name : 'choi',
    age : 20,
    isMarried : true
}
console.log(typeof person);


//array : 배열 (대괄호로 감싸줌)
// 여러개의 데이터를 순서대로 저장하는 데이터 타입
//각 항목들은 순서대로 들어가있기 때문에, 위치에 대한 데이터(index)가 있다.
// 인덱스는 1이 아닌 0부터 시작한다.

let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];