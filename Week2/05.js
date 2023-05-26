// 일급객체로써의 함수 (2)
// 객체 key-value pair에서 value에는 어떤 데이터타입도 들어갈 수 있다.
// 데이터 타입은 string, number, boolean 등 다양.
// 여기의 value 자리에, 함수도 들어갈 수 있다.
// this= 자기자신을 가르키는 것. 중괄호 (스코프)안에서의 this는 항상 자기자신 객체를 가리킴.
// 즉 아래 객체에서 this는 person을 가리킨다. 즉 this.name은 person안에 있는 name인 jake이다.

// const person = {
//     name : 'jake',
//     age : 31,
//     gender : 'male',
//     height : 186,
//     isMarried : false,
//     sayHello : function() {
//         console.log("hello, my name is " + this.name)
//     }
// }
// person.sayHello();

// 아래는 템플릿 리터럴 (백틱)을 이용한 풀이

// const person = {
//     name : 'jake',
//     age : 31,
//     gender : 'male',
//     height : 186,
//     isMarried : false,
//     sayHello : function() {
//         console.log(`hello, my name is ${this.name}`)
//     }
// }
// person.sayHello();

// 화살표 함수를 이용한 풀이 (여기서는 name에 undefined가 나온다. 왜냐하면 화살표함수는 this를 바인딩하지 않기 때문.)

const person = {
    name: 'jake',
    age: 31,
    gender: 'male',
    height: 186,
    isMarried: false,
    sayHello: () => {
        console.log(`hello, my name is ${this.name}`);
    },
};
person.sayHello();