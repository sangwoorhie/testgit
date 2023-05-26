// 2주차 2-5부터. 자바스크립트 -> 객체와 배열을 통해 다양한 프로그래밍을 함.
// 그럼에도 현실세계를 반영하기는 어려움. 프로그래밍적으로 부족한 부족한 부분을 보완하기 위해 Map이나 Set같은 자료구조가 등장함.
// 지금 배우고자 하는 Map과 Set도 자료구조이다. Array, Object 등도 자료구조의 형태다.

// Map과 Set의 목적 : 데이터의 구성, 검색, 사용을 효율적으로 처리한다. 기존의 객체 또는 배열보다 더 효율적으로.

// 1. Map
// key-value pair (객체와 같음. 하지만 객체는 key에 문자열 형태인 반명, Map은 key값 자리에 어떤 유형의 데이터 타입도 다 들어올 수 있다.)
// 왜냐하면 Map은 key가 정렬된 순서로 저장되기 때문이다.

// 검색, 삭제, 제거(완전한 제거), 여부확인 기능 제공

// Map에서 key-value pair를 넣는 방식은 다르다. 아래와 같이 넣는다.

// const myMap = new Map();
// myMap.set('key', 'value');

// ...
// ...

// 이후에 검색을 할 떄.
// 즉 set으로 key-value 설정을 하고, get으로 key로 검색을 한다. set과 get은 항상 pair다.
// myMap.get('key');

// Map을 쓰는 이유는, 대량 데이터를 처리하기 위함이기 때문에 반복적을하는 부분이중요함.
// 반복을 위한 메소드 -> keys(), values(), entries()

// Map에서 반복을 말할때 iterator 개념이 중요함. (for - of 방식) : for (const 단수(key,value,entry) of 복수(keys,values,entries)())
// Map을 저장할 때 set('key', 'value')인데, keys이면 key들로 이루어진 iterator들이 나오고, values이면 value들로 이루어진 iterator들이 나온다.
// for - of 반복문을 돌림으로써 하나하나 쓸수 있게 해줌. (마치 forEach문 같음)

var iterable = [10, 20, 30];

for (var value of iterable) {
    console.log(value);
} // 10, 20, 30


// const myMap = new Map();
// myMap.set('one', 1);
// myMap.set('two', 2);
// myMap.set('three', 3);

// for (const key of myMap.keys()) {
//     console.log(key);
// }

// for (const value of myMap.values()) {
//     console.log(value);
// }

// for (const entry of myMap.entries()) {
//     console.log(`${entry[0]} : ${entry[1]}`);
// }