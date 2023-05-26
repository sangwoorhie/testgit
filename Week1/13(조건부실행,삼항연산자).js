// 조건부 실행
let x = 10;
if (x > 0) {
    console.log("x는 양수입니다.")
}
// 위의 함수는 결국 아래 함수와 같음.

// and 조건 (&&)
(x > 0) && console.log("x는 양수입니다.")
// 뜻 : (x > 0)조건을 충족할시, console.log("x는 양수입니다.")을 실행.


// or조건 (||)
// 삼항 연산자 단축평가
let y; // y = undefined이면 20을 기본으로 세팅해줘 라는 뜻.
let z = y || 20;

console.log(z);