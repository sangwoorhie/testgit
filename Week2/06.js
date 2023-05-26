// 배열의 요소로 함수를 할당
// 보통 배열 (대괄호 [ ])이라고 하면 하나하나의 요소들의 나열이지만, 함수를 배열의 요소로써 할당할 수 있다.

// const myArr = [
//     fucntion ( ) { }, function ( ) { }
// ]

// 배열의 특징은 나열된 순서대로 index값을 갖는다는 것. 0, 1, 2, 3..
// 여기서 대괄호 안 배열의 첫번째 function이 0, 두번째 function이 1이다.
// 나열이므로 function과 function 사이에 콤마를 쓴다.

const myArr = [
    function (a, b) {
        return a + b
    }, function (a, b) {
        return a - b
    }
]
console.log(myArr[0](1, 3)); //myArr함수의 0번째요소 (index)즉 첫번째 function값. 소괄호에는 a, b에 들어갈 매개변수 입력
console.log(myArr[1](10, 7)); //myArr함수의 1번째요소 (index)즉 두번째 function값. 소괄호에는 a, b에 들어갈 매개변수 입력

