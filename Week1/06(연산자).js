// 연산자 (+, -, *, /, %)

// 1. 더하기 연산자 (문자열 우선시)
console.log(1 + 1); // 2
console.log(1 + "1"); // 11


// 2. 빼기 연산자 (숫자열 우선시)
console.log(1 - "2"); // -1
console.log(1 - 2); // -1


// // 03. 곱하기 연산자 (숫자열 우선시)
console.log(2 * 3); // 6
console.log("2" * 3); // 6


// // 04. 나누기 연산자 (숫자열 우선시)
console.log("4" / 2); // 2
console.log(4 / 2); // 2


// // 05. 나누기 연산자(/) vs 나머지(나누고나서 몫을 뺀 나머지)연산자 (%)
console.log(5 / 2);  // 2.5
console.log(5 % 2); // 1 (5를 2로 나눈 나머지값)


// // 06. 할당 연산자 (assignment) (등호 "="연산자가 곧 할당 연산자)

// // 6-1. 등호 연산자(=)
let x = 10;
console.log(x);

// // 6-2. 더하기 등호연산자 (+=)
x += 5; //원래 x값에다가 5를 더해준다는 뜻. 
console.log(x); // 위에 값이 x=10이었으므로, x=15 출력됨

// 6-3. 빼기 등호연산자 (-=)
x -= 5; // 위의 x값에다가 5를 빼준다는 뜻.
console.log(x); // 위에 값이 x=15이었으므로, x=10 출력됨

// 6-4. 곱하기 등호연산자 (*=)
let a = 10; // 처음 a에 10이라는 값 할당후, 2를 곱하고 재할당 = 20
a *= 2;
console.log(a);


// 비교 연산자 (결과값의 참과 거짓에 따라 true또는 false를 반환하는 연산자)
// 1. 일치 연산자 (===) : 타입까지 일치한 연산자
console.log(2 === 2); // true
console.log("2" === 2); // false

// 2. 불일치 연산자 (!==) : 타입까지 일치해야 false를 반환하는 연산자. 불일치하면 true를 반환함.
console.log(2 !== 2); // false
console.log("2" !== 2); // true

// 3. 작다 연산자 (<) , 작거나 같다 연산자 (<=)
console.log(2 < 3); // true
console.log(2 <= 3); // true 
console.log(3 <= 3); // true 
console.log(4 <= 3); // false

// 4. 논리 연산자
// 4-1. 논리곱 연산자 (&&) : 모두 true일 때만 true 반환.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// 4-2. 논리합 연산자 (||) : 두 값중 하나라도 true인 경우 true 반환. 엔터위에 shift누르고 ||
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 4-3. 논리부정 연산자 (!) : true값을 false로 바꿈. 사용빈도가 가장 높다!
console.log(!true); // false
let q = true;
console.log(!q); // false


// 5. 삼항 연산자 (활용빈도 상당히 높다) 조건에 따라 값을 선택한다.
let p = 10;
let result = (p > 5) ? "크다" : "작다"; // 삼항 (항이 3개: 첫번째항 : (p > 5), 두번째항 "크다", 세번째항 "작다")
console.log("----------"); // 첫번째 항이 조건이고, 조건이 true이면 result값에 두번째항 "크다"를 할당, false면 result값에 세번째항 "작다"를 할당
console.log(result1);


// 연습문제: 3항 연산자를 이용해서 y가 10보다 작은경우 작다를, 10보다 큰경우 크다를 출력해주세요.
let y = 20;
let answer = (y < 10) ? "크다" : "작다"; // 조건은 'y가 10보다 작은 경우' 이므로, (y < 10)
console.log(answer);


// 06. 타입 연산자 (typeof)
console.log(typeof "5"); // string
console.log(typeof 5); // number
