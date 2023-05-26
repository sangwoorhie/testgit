// 구조분해 할당 destructuring

// 배열 : 대괄호 [ ] 안의 요소들
// 객체 : 중괄호 { } 안의 요소들

// 구조분해할당은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 함.

// (1) 배열의 경우
[1, 'new'];

let [value1, value2] = [1, 'new'];

// 이렇게 할 경우 우항의 배열 [1, 'new'] 을 분해해서 변수 value1에 1을, 변수 value2에 'new'를 각각 할당함.

let [value1, value2] = [1, 'new'];
console.log('1', value1)
console.log('2', value2) // 1 1 , 2 new


let arr = ["value1", "value2", "value3"];
let [a, b, c] = arr; // let arr은 배열이고, let [a,b,c]는 변수다. 변수 a에 "value1", 변수 b에 "value2", 변수 c에 "value3" 각각 할당함.
console.log(a); //value1
console.log(b); //value2
console.log(c); //value3


// 다음과같이, 요소의 개수와 배열의 개수가 불일치할 경우도 있다. 배열은 3개인데 변수는4개인 상황
let arr = ["value1", "value2", "value3"]
let [a, b, c, d] = arr;

// 이 경우에는 변수를 배정받지 못한 d는 undefined값이 나옴.
// 변수를 배정받지 못한 d가 4를 배정받을수 있도록 직접 입력할수도 있음. 하지만 여기서 입력한 4는 초기값 (이니셜 value값)으로써, 배열에 "value4"가 있다면 d = 4라고 할지라도 d에는 value4가 할당됨.

let arr = ["value1", "value2", "value3"]
let [a, b, c, d = 4] = arr;



// // (2) 객체의 경우
// // 배열의 경우 순서가 중요하지만, 객체의 경우에는 key가 중요하다.

let user = {
    name: 'jake',
    age: 30,
    height: 186,
};

let {name, age, height} = {
    name: 'jake',
    age: 30,
    height: 186,
}; 

console.log("name => ", name);
console.log("age => ", age);
console.log("height => ", height);
// 이렇게하면 name: jake, age:30, height:186 으로 할당됨. // 더이상 객체타입이 아닌, 일반 문자열string과 숫자열number 타입으로 나옴.


// 새로운 이름으로 할당하는 방법

let user = {
    name: 'jake',
    age: 30,
    height: 186,
};

let {name: newName, age: newAge, height: newHeight} = user;
console.log('newName => ', newName);
console.log('newAge => ', newAge);
console.log('newHeight => ', newHeight);

// newName = 'jake'
// newAge = 30
// newHeight = 186


let user = {
    name: 'jake',
    age: 30,
    height: 186,
};

let {name, age, height, birthday} = user;
console.log(name);
onsole.log(age);
onsole.log(height);
onsole.log(birthday);
// 여기서 birthday는 할당이 안되어있기에 undefined로 나온다. 이를 막으려면 아래처럼 초기값 (이니셜 value값) 지정가능

let {name, age, height, birthday = "today"} = user;
console.log(name);
onsole.log(age);
onsole.log(height);
onsole.log(birthday);


