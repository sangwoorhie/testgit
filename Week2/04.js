// 일급 객체 (First-class Object)로써의 함수
// 일급객체로써의 함수는 함수로써 자바스크립트에 존재하는게 아니라, 객체로써 자바스크립트에 존재하기 때문에 중요하다.
// 일급객체는 다른 객체들과 똑같다. 다른 객체들에 일반적으로 적용 가능한 연산자를 모두 지원한다.
// 다른 객체들은 매개변수로 전달될수 있고, return문으로 출력될 수 있고, 모든 연산이 가능하다.
// 일급객체로서의 함수도 그런것들이 가능하다.

// 함수가 일급객체로써 취급되는 5가지 경우

// 1. 변수에 함수를 할당할 수 있다.
// 함수 function이 마치 값으로 취급된다. 함수가 나중에 사용될 수 있도록 조치되었다
// const sayHello = function() {
//     console.log('Hello!');
// }

// 2. 함수를 인자로 다른 함수에 전달할 수 있다.
// function callFunction(Func) {
//     Func();
// }

// const sayHello = function () {
//     console.log('Hello!');
// }
// callFunction(sayHello);

// 매개변수로 받은 변수 Func (내맘대로지정가능)가 곧 함수다.
// 밑에서 괄호열고닫고 Funk();를 실행할 수 있기 때문.


// sayHello함수를 callFunction의 매개변수로 던질수 있다.
// 매개변수로 던지면 sayHello라고 저장된 함수가 function callFunction (Func) 여기의 Func로 전달됨

// 여기서 중요개념 2가지
// 2-1 콜백함수 : 매개변수로써 쓰이는 함수. 콜백함수는 고차함수의 한 종류다.
// 2-2 고차함수 : 함수로 인자로 받거나 return하는 함수

// 여기서 Func는 Func(); 로 쓰여 return하므로 고차함수이기도 하고, 괄호안에 쓰여 매개변수로도 쓰였으므로 콜백함수이기도 하다.

// callFunction(sayHello);
// 에서 sayHello 값을 넣으면 아래 값임

// callFunction(function () {
//     console.log('Hello!');
// })

//그리고 

// function callFunction(Func) {
//     Func();
// } 
// 여기서 function callFunction(Func)의 Func자리에 (function () {console.log('Hello!');}) 넣기

// function callFunction(Func) {
//     Func();
// }

// 3. 함수를 반환할 수 있다.
function createAdder(num){
    return function ( ) {
        return x + num;
    };
}

const addFive = createAdder(5);
console.log(addFive(10));

// createAdder 괄호열고닫고이므로 function createAdder를 실행한 결과가, const addFive = createAdder를 대체함.
// 그말인 즉슨 return function ( ) {return x + num}이, createAdder(5)를 대체했다는 뜻.
// createAdder(num)를 createAdder(5)가 대체함. 즉 num 자리를 5가 대체함. 
// addFive도 괄호 열고닫았으므로 실행한 결과 return x = 10, num = 5이므로 실행하면 return x + num; 은 15가 된다.