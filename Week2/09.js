// const myMap = new Map();
// myMap.set('one', 1);
// myMap.set('two', 2);
// myMap.set('three', 3);

// console.log(myMap.keys()); // [Map Iterator] {'one', 'two', 'three'} // (keys값을 출력)

// ---------------

// const myMap = new Map();
// myMap.set('one', 1);
// myMap.set('two', 2);
// myMap.set('three', 3);

// for (const key of myMap.keys()) {
//     console.log(key)
// } // one, two, three // (keys값을 출력)

// ---------------

// const myMap = new Map();
// myMap.set('one', 1);
// myMap.set('two', 2);
// myMap.set('three', 3);
// console.log(myMap.values());  // [Map Iterator] {1, 2, 3} // (values값을 출력)

// ---------------

// const myMap = new Map();
// myMap.set('one', 1);
// myMap.set('two', 2);
// myMap.set('three', 3);

// for (const value of myMap.values()) {
//     console.log(key)
// } // 1, 2, 3 // (values값을 출력)

// ---------------

// const myMap = new Map();
// myMap.set('one', 1);
// myMap.set('two', 2);
// myMap.set('three', 3);
// console.log(myMap.entries()); // [Map Entries] { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] } // (entries값을 출력) : entries는 key값과 value값을 배열로 묶은 값을 하나의 객체로 인식하여 전체를 출력한다.

// ---------------

// const myMap = new Map();
// myMap.set('one', 1);
// myMap.set('two', 2);
// myMap.set('three', 3);

// for (const entry of myMap.entries()) {
//     console.log(entry);
// } // [ 'one', 1 ] [ 'two', 2 ] [ 'three', 3 ] (entries값을 출력)

// ---------------

// const myMap = new Map();
// myMap.set('one', 1);
// myMap.set('two', 2);
// myMap.set('three', 3);

// console.log(myMap.size); //Map의 사이즈(길이) = 3개이므로 3

// ---------------

const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

console.log(myMap.has('two')); // has : 특정 key가 존재하는지 확인하기 위해 사용. has('검색할 key값') 맞으면 true, 틀리면 false
