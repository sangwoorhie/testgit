// 배열 [ ]
// 배열은 나열의 의미. 각 index값을 가짐. 0, 1, 2, 3...
// 객체같은경우는 항상 key-value pair이기 때문에 다름. (객체도 물론 index값을 가짐)
// 메소드 (push, pop, shift, unshift, splice, slice)

// 1.생성
// 1-1. 기본 생성 (대괄호, 콤마로 구분)
let fruits = ["사과", "바나나", "오렌지"];
                // 0        1        2

// 1-2. 크기 지정
let number = new Array(5); // 크기가 5인 (5개의 요소를 가지고 있는 배열을 새로 만들어줘)
console.log(number.length);
console.log(fruits.length);


// 2. 요소 접근
console.log(fruit[0]); // 사과
console.log(fruit[1]); // 바나나
console.log(fruit[2]); // 오렌지


// 3. 배열 메소드 Method
// pop과 shift는 삭제메소드이므로 빈칸이지만, push와 unshift는 추가메소드이므로 추가할 변수값을 입력해야 한다.

// 3-1. push (맨 뒤에 요소를 추가하는 메소드)
let fruits = ["사과", "바나나"];
console.log("1 => ", fruits); // 1 => ["사과", "바나나"]

let fruits = ["사과", "바나나"];
fruits.push("오렌지");
console.log("2 => ", fruits); // 2 => ["사과", "바나나", "오렌지"]


// 3-2. pop (마지막 요소를 삭제하는 메소드)
let fruits = ["사과", "바나나", "수박"];
console.log("1 => ", fruits); // 1 => ["사과", "바나나", "수박"]

let fruits = ["사과", "바나나", "수박"];
fruits.pop();
console.log("2 => ", fruits); // 2 => ["사과", "바나나"]


// 3-3. shift (첫번째 요소를 삭제하는 메소드)
let fruits = ["사과", "바나나", "키위"];
console.log("1 => ", fruits); // 1 => ["사과", "바나나", "키위"]

let fruits = ["사과", "바나나", "키위"];
fruits.shift();
console.log("2 => ", fruits); // 2 => ["바나나", "키위"]

// 3-4. unshift (맨 앞에 요소를 추가하는 메소드)
let fruits = ["사과", "바나나", "딸기"];
console.log("1 => ", fruits); // 1 => ["사과", "바나나", "딸기"]

let fruits = ["사과", "바나나", "딸기"];
fruits.unshift("포도");
console.log("2 => ", fruits); // 2 => ["포도, "사과", "바나나", "딸기"]


// 3-5. splice
//ex)1
let fruits = ["사과", "바나나", "키위"];
fruits.splice(1, 1, "포도"); // 1번째 요소부터 1개의 요소를 삭제하고, "포도"로 갈아끼워줘. (index는 0부터 시작하므로 "바나나"를 "포도"로 갈아끼움)
console.log(fruits); // ["사과", "포도", "키위"]

//ex)2
let fruits = ["사과", "바나나", "키위", "포도", "딸기", "수박", "자몽", "오렌지", "메론"];
fruits.splice(2, 4, "살구"); // 2번째 요소부터 4개의 요소를 삭제하고, "살구"로 갈아끼워줘. (2번째 요소는 "키위", 키위를 포함한 뒤에 4개요소 삭제하고 "살구"로 갈아끼움)
console.log(fruits); // ["사과", "바나나", "살구", "자몽", "오렌지", "메론"]


// 3-6. slice
let fruits = ["사과", "바나나", "키위"];

let slicedFruits = fruits.slice(1, 2); // start값:1, end값:2 (index 1부터 2까지의 값을 새로운 배열로 만듦)
console.log(slicedFruits); // ["바나나"]  , 바나나부터 시작해서 키위 전까지. (키위는 포함안되므로 바나나만)

let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ["바나나", "키위"] 

let slicedFruits = fruits.slice(0, 2);
console.log(slicedFruits); // ["사과", "바나나"] 

