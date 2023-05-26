//단축 속성명 property shorthand 

// const name = "jake";
// const newAge = "30";
// const height = "186";
// const obj = {
//     name: name,
//     age: newAge,
//     height: height
// }

// key-value. 왼쪽은 key, 오른쪽은 value
// 왼쪽과 오른쪽이 같은 경우 key값을 과감히 생략 가능

// const name = "jake";
// const newAge = "30";
// const height = "186";
// const obj = {
//     name,
//     age: newAge,
//     height
// }

// 만약 key-value값이 모두 같아서 key값을 모두 생략한 경우
// const name = "jake";
// const age = "30";
// const height = "186";
// const obj = {
//     name: name,
//     age: age,
//     height: height
// }

// 위는 아래와 같이 쓸수있음
// const name = "jake";
// const age = "30";
// const height = "186";
// const obj {name, age, height}

// 이는 객체임에도 배열처럼 보일수도 있으나, 객체다. 단축 속성명을 썼을 뿐이다.
// 그리고 객체와 배열의 가장 큰 차이점은, 배열은 대괄호 [ ], 객체는 중괄호 { }

// <전개 구문 spread operator>
// destructuring과 함께 가장 많이 사용되는 es6문법

// 전개 구문은 배열을 말 그대로 전개하는 것이다.

// let arr = [1, 2, 3];
// console.log(arr);
// console.log(...arr);

// 전개구문은 ...을 사용 -> 새로운 구조를 써야할 때 사용
// ...arr이라는 뜻은 arr을 반복해 써넣은것을 의미한다.

// let newArr로 하나를 더 추가해 [1, 2, 3, 4]를 만들고 싶을 때

// let arr = [1, 2, 3];
// let newArr = [...arr, 4];
// console.log(newArr); // [1, 2, 3, 4]

// 객체
// let user = {
//     name: 'jake',
//     age: 30,
//     height: 186,
// };

// let user2 = {
//     ...user,
//     gender: 'male'
// };
// console.log(user);
// console.log(user2); //{ name: 'jake', age: 30, height: 186 }


// 나머지 매개변수 (rest parameter)
// ...args (arguments) = 추가적인 나머지(arguments)가 들어올 수 있다.

// function exampleFunc (a, b, c) {
//     console.log (a, b, c);
// }
// exampleFunc(1, 2, 3); // 1, 2, 3


// 여기서 나머지 매개변수를 추가하면
// function exampleFunc (a, b, c, ...args) {
//     console.log (a, b, c);
//     console.log(...args);
// }
// exampleFunc(1, 2, 3, 4, 5, 6, 7); // 1 2 3 4 5 6 7

// 여기서 ... 는 스프레드 문법이다. console에서 이 스프레드 문법을 빼주면
// function exampleFunc (a, b, c, ...args) {
//     console.log (a, b, c);
//     console.log(args);
// }
// exampleFunc(1, 2, 3, 4, 5, 6, 7);   // 1 2 3 [4, 5, 6, 7] 추가된 4 5 6 7은 배열 형태로 나온다.
// 즉, ...를 꼭 해서 나머지 매개변수로 인식할 수 있도록 해야 한다.

// 템플릿 리터럴 (Template Literal)
// console.log ("Hello World"); 
// console.log (`Hello World`);  // 쌍따옴표 또는 따옴표가 아닌, 백틱 ` 으로도 문자열을 묶을 수 있음.
// 백틱을 넣으면 JavaScript코드, 변수, 연산등도 들어갈 수 있다. ${ }형태로 넣어야 함.

// console.log (`Hello World ${3+3}`); // Hello World 6

// const testValue = "안녕하세요!";
// console.log(`Hello World ${testValue}`); // Hellow World 안녕하세요!

// 템플릿 리터럴은 따옴표와는 달리, 멀티라인(여러 줄)을 지원한다.
// console.log( `
//             Hello
//             My Name is JavaScript
//             Nice to meet You!
// `);