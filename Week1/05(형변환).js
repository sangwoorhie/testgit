// 형 변환 (형태를 바꿈)
// 명시적 형변환 : 개발자가 의도한 형변환
// 암시적 형변환 : 개발자가 의도하지 않았고, 자동적으로 바뀌는 형변환

// 1.암시적 형 변환

// // 1-1. 문자열
let result1 = 1 + "2";
console.log(result1);
console.log(typeof result1);

// // 더하기 연산자로 숫자(1)와 문자("2")가 만나면 문자열(string)으로 바뀜

let result2 = "1" + true;
console.log(result2);
console.log(typeof result2);

// // 문자열("1")과 다른 데이터타입(불리언)만났을때 역시 문자열(string)으로 바뀜
// // 즉, 문자열과 다른 데이터를 더하기(+)를 할 때, 문자열이 우선시된다.
// // { }, null, undefined + "1" => 다 문자열화 된다.

// // 1-2. 숫자
let result3 = 1 - "2";
console.log(result3);
console.log(typeof result3);

let result4 = "2" * "3";
console.log(result4);
console.log(typeof result4);

// 더하기(+)연산자가 아닌 다른 연산자 빼기(-),곱하기(*),나누기(/)에서는 항상 숫자가 우선시됨.


// 2. 명시적 형 변환

// 2-1. Boolean
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log("-----------------------");
console.log(Boolean("false"));
console.log(Boolean({}));
// Boolean(괄호) 값을 Boolean타입으로 바꾸고 싶다.
// boolean에서 빈문자열이 아닌, 값이 있는 문자열(문자"false", 빈객체{ })은 true로 나옴.

// 2-2. 문자열 명시적 형 변환
let result5 = String(123);
console.log(result5);
console.log(typeof result5);

let result6 = String(true);
console.log(result6);
console.log(typeof result6);

let result7 = String(false);
console.log(result7);
console.log(typeof result7);

let result8 = String(null);
console.log(result8);
console.log(typeof result8);

let result9 = String(undefined);
console.log(result9);
console.log(typeof result9);


// 1-3. Number타입 형 변환
let result10 = Number("123");
console.log(result10);
console.log(typeof result10);
