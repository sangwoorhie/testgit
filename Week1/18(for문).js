// for문=> ~동안 (반복문), ~하는동안 반복한다.
// for문, 또는 while문 등에서 if문을 통한 분기처리를 많이 한다.

// 1. for문
for (초기값; 조건식; 증감식) {
    //Main Logic #1
}

// 초기값: i라는 변수는 0부터 시작한다. 
// 조건식: i라는 변수가 10에 도달하기 전까지 계속한다. (10에 도달하기 전 까지므로 9까지.)
// 증감식: i라는 변수는 한 싸이클(중괄호)이 돌고나면 1을 더한다.

for (let i = 0; i < 10; i++) {
    console.log("for문 돌아가고 있음 => " + i);
}

//for문 돌아가고 있음 => 0
//for문 돌아가고 있음 => 1
//for문 돌아가고 있음 => 2
//for문 돌아가고 있음 => 3
//for문 돌아가고 있음 => 4
//for문 돌아가고 있음 => 5
//for문 돌아가고 있음 => 6
//for문 돌아가고 있음 => 7
//for문 돌아가고 있음 => 8
//for문 돌아가고 있음 => 9

// 배열과 for문은 짝궁이다.
// 초기값: i라는 변수는 0부터 시작한다. 
// 조건식: i라는 변수는 array의 length까지 도달한다.
// 증감식: i라는 변수는 한 싸이클(중괄호)이 돌고나면 1을 더한다.
const arr = ["one", "two", "three", "four", "five"];
for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]); // index로 접근
}

// 0
// one
// 1
// two
// 2
// three
// 3
// four
// 4
// five


// 예시문제 ; 0부터 10까지의 수 중 2의 배수만 console.log로 출력해보시오.

for (let i = 0; i <= 10; i++) {
    if (i >= 2) {
        if (i % 2 === 0) {
            console.log(i + "는 2의 배수입니다!");
        }
    }
}
// for문에 중첩 if문을 사용
// if (i >= 2) -> i가 2보다 클때 (0은 제외해야 하므로)
// if (i % 2 === 0) -> i를 2로 나눈 나머지가 0일때, 즉 2의 배수

// 2는 2의 배수입니다!
// 4는 2의 배수입니다!
// 6는 2의 배수입니다!
// 8는 2의 배수입니다!
// 10는 2의 배수입니다!


// 2. for ~ in 문 : 객체 속성을 출력하는 문법

let person = {
    name: "John",
    age: 30,
    gender: "male"
};

// for (let key in 객체) 형태로 씀.
// person ['key']

for (let key in person) {
    console.log(key + " : " + person[key]);
}

// name: "John"
// age: 30
// gender: male
// 위와같은 형태로 객체의 속성이 나옴.