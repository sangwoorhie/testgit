// // 객체
// // 객체 생성, 접근, 메소드, 객체비교, 객제병합
// // key - value pair 
// // 객체의 장점은 하나의 변수에 여러개의 값을 넣을 수 있다.

// // 1. 객체 생성방법
// // 1-1. 기본적인 객체 생성방법
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자",
    hobby: ["축구", "수영", "독서"],
    marriged: false
};

// // 1-2. 생성자 함수를 이용한 객체 생성 방법
// // 객체를 일괄적으로 생성하는 유용한 방법이 존재한다.

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("홍길동", 30, "남자");
let person2 = new Person("홍길순", 25, "여자");
let person3 = new Person("이상화", 32, "여자");
let person4 = new Person("김동현", 42, "남자");
let person5 = new Person("정찬성", 37, "남자");
let person6 = new Person("전지현", 30, "여자");


// // 2. 객체 접근방법
console.log(person.name); // 홍길동
console.log(person.age); //30
console.log(person.gender); // 남자


// 3. 객체 매소드 (객체가 가진 여러가지 기능 : Object.~~~)
// 3-1. Object.key() : key를 가져오는 메소드

// let person = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자",
//     hobby: ["축구", "수영", "독서"],
//     marriged: false
// };

// let keys = Object.keys(person);
// console.log("keys => ", keys); //  ['name', 'age', 'gender', 'hobby', 'marriged'] (key-value에서 각 key값이 나옴)


// // 3-2. values
// let values = Object.values(person); 
// console.log("values => ", values); //  [ '홍길동', 30, '남자', [ '축구', '수영', '독서' ], false ] (key-value에서 각 value값이 나옴)

// // 3-3. entries
// // key와 value를 묶어서 배열로 만든 배열! (2차원 배열)
// let entries = Object.entries(person);
// console.log("entries => ", entries); //  [ 'name', '홍길동' ], [ 'age', 30 ], [ 'gender', '남자' ], [ 'hobby', [ '축구', '수영', '독서' ] ], [ 'marriged', false ] (key-value 둘다 배열해서 나옴)

// // 3-4. assign - 객체를 복사한다
// let newPerson = {};
// Object.assign(newPerson, person); //첫번째 변수(newPerson)에 두번째변수(person)를 복사한다.
// console.log("newPerson => ", newPerson); // let newPerson = {name: "홍길동", age: 30, gender: "남자", hobby: ["축구", "수영", "독서"], marriged: false};

// // assign에서는 객체를 복사할 뿐 아니라, 특정 데이터 값을 바꿀 수도 있다.
// let newPerson = {};
// Object.assign(newPerson, person, {age: 31, gender: "여자"}); // 기존값에서 age와 gender를 바꿈.
// console.log("newPerson => ", newPerson); 

// // 3-5 객체 비교
// // person1과 person2가 완전히 같은 경우
// let person1 = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자",
//     hobby: ["축구", "수영", "독서"],
//     marriged: false
// };

// let person2 = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자",
//     hobby: ["축구", "수영", "독서"],
//     marriged: false
// };

// console.log("answer => ", person1 === person2); // false (person1와 person2의 데이터가 똑같더라도 같은객체로 취급하지 않음)

// //
// let str1 = "aaa";
// let str2 = "aaa";
// console.log("answer => ", str1 === str2); // ture (같은 문자열 취급)

// // 즉, string은 데이터가 같으면 똑같은 문자열로 취급하지만, 객체는 데이터가 같더라도 서로 다른 객체로 취급함
// // 그 이유는, 객체 let person = { }은 크기가 상당히 크기 때문에 저장할 때 별도의 메모리에 저장함.
// // 따라서 person1과 person2의 변수들은 각각 따로 별도공간의 주소에 저장되고, person1과 person2는 주소를 갖고있는 값이기 때문에 서로 다름.
// // 하지만 string1과 string2는 직접 값을 저장하기 떄문에 주소가 같음. 같게 취급.

// // 하지만 person1과 person2는 저장되는 주소가 달라서 다르게 인식될지라도 기본적으로 내용적으로는 같기 때문에, 다음과 같이 비교할 수 있다.

// console.log(JSON.stringify(person1) === JSON.stringify(person2)); // true.  JSON.stringify(문자열화)시킴으로써 객체를 str처럼 인식하게 만들어, true값 도출.

// // 3-6. 객체 병합
// let person1 = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자"
// };

// let person2 = {
//     hobby: ["축구", "수영", "독서"],
//     marriged: false
// };

// // person1과 person2를 합쳐야 완벽한 값 나옴.
// // person1의 데이터 3개(name, age, gender)와 person2의 데이터2개(hobby, marriged) 중괄호를 해체시켜서 key-value를 다 풀어줘 라는 명령어
// // ... 명령어 (spread operator)
// let perfectMan = {...person1}; // {name: "홍길동", age: 30, gender: "남자"}; person1의 값 그대로 다 나옴.
// let perfectMan = {...person2}; // {hobby: ["축구", "수영", "독서"], marriged: false}; person2의 값 그대로 다 나옴.

// let perfectMan = {...person1, ...person2}; 
// console.log(perfectMan)// {name: "홍길동", age: 30, gender: "남자", hobby: ["축구", "수영", "독서"], marriged: false}; 합쳐서 나옴.