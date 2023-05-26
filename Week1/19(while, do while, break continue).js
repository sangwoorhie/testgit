// while문, do while문, break continue문

// 1. while문 (~하는 동안), for문과 유사함
let i = 0;
while (조건) {
    // Main Logic
    // (증감)
};

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
};

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// while문을 활용해서 3초과 100미만의 숫자중 5의 배수인 것만 출력해보시오.

let i = 3;
while (i < 100) {
    if (i % 5 === 0) {
        console.log(i + "는 5의 배수입니다!");
    }
    i++;
}

// 첫번째 i는 3부터 시작하도록 고정시켜둠.
// i를 5로 나눈 나머지가 0 = 즉 5의 배수
// i에 1을 더해주는 i++는 if문 밖에 있어야 함.


// 2. do while문 : do 중괄호를 먼저 한번 실행하고나서 그다음에 while문을 실행함.

let i = 0;
do {
    console.log(i);
} while (i > 10);

// 이 경우 만약 while문이면 최초값이 0이기때문에 while (i > 10)를 만족시킬수 없으므로 하나도 안찍히지만, do while문이면 최초값 0은 찍힘. 그이후론 while문과 마찬가지로 아무것도 안찍힘.



// 3. break continue문 : for문과 항상 결합해서 쓰임

// i가 0부터 10까지 1씩 늘어나게 해주는 for문
for (let i = 0; i <= 10; i++) {
    if (i === 5){
        break;
    }
    console.log(i);
}

// 위 같은 경우, i가 5면 break를 하라고 했기 때문에 0, 1, 2, 3, 4만 찍힘
// 즉 break문은 해당 데이터되기 전까지만 하고 끊는 것 


for (let i = 0; i <= 10; i++) {
    if (i === 5){
        continue;
    }
    console.log(i);
}

// 위 같은 경우, i가 5면 continue를 하라고 했기 때문에, 5를 제외한 0, 1, 2, 3, 4, 6, 7, 8, 9, 10 찍힘
// continue는 skip과도 같은 개념으로 알면 됨. 해당 데이터만 쏙 빼먹고 넘어가기.
