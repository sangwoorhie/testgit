// set문법 : 고유한 값을 저장하는 자료구조다. "값"만 저장하고, key를 저장하지 않는다. 또한, 값이 중복되지 않는 유일한 요소로만 구성된다.
// 값 추가, 값 검색, 값 삭제, 모든 값 제거, 존재 여부 확인등을 하는 기능을 한다.
// 중학교때 배웠던 '집합'을 생각하면 된다. 값이 중복되지 않는 유일한 요소로만 구성됨.
// Map은 key-value였던 반면, set은 value만 넣는다. (key는 저장하지 않는다.)
// Map에서는 keys, values, entries 모두 출력 가능한 반면, set은 value값만 넣기 때문에 values만 출력 가능하다.

// const mySet = new Set();
// mySet.add('value1');
// mySet.add('value2');

// console.log(mySet.size); // set의 사이즈(길이) = 2개이므로 2

// ------------------------

// const mySet = new Set();
// mySet.add('value1');
// mySet.add('value2');
// mySet.add('value2');

// console.log(mySet.size); // set의 사이즈(길이) = 2개. (값이 3개 있지만, value2는 중복된다. set에서는 중복되지 않는 유일한 요소들만 카운트하므로 중복되는 것은 무시한다.)

// ------------------------

// const mySet = new Set();
// mySet.add('value1');
// mySet.add('value2');
// mySet.add('value2');

// console.log(mySet.has['value1']); // true  
// console.log(mySet.has['value2']); // ture
// console.log(mySet.has['value3']); // false (value3은 없음)

// ------------------------

// const mySet = new Set();
// mySet.add('value1');
// mySet.add('value2');
// mySet.add('value3');
// mySet.add('value5');
// mySet.add('value8');

// for (const value of mySet.values()) {
//     console.log(value);
// } // value1, value2, value3, value5, value8

