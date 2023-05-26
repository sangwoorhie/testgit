// 배열 메소드 Method (forEach, map, filter, find)
// forEach문 제외하고는 다 return문 필요하다.


// 1. forEach메소드
// 요소를 하나하나 돌아가면서 어떤 작업을 해야할때. 그 작업을 명시하기 위해서 함수를 만들수 있고, 그 함수를 수행하기 위해 forEach메소드 사용.
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(input){}); 
// 이렇게 매개변수자리에 함수function값을 넣어주는 것을, 콜백함수 (callback)라고 한다.
// 콜백함수의 input에는 item 또는 i 등 다양한 이름이 들어감.

let numbers = [4, 1, 5, 4, 5];
numbers.forEach(function(item){
    console.log('item입니다' => + item)
}); 

// item입니다 => 4
// item입니다 => 1
// item입니다 => 5
// item입니다 => 4
// item입니다 => 5



// 2. map메소드 (map메소드는 반드시 return문을 가진다. return에는 map메소드를 거친 가공된 값이 나옴. return없으면 undefined됨)
// map메소드는 기존의 배열을 가공해서 새로운 배열을 생산해내는 역할. map을 거치고나면 반드시 새로운 배열이 튀어나옴.
// map메소드는 항상, 원본 배열의 길이만큼이 return된다.
let numbers = [4, 1, 5, 4, 5];

let newNumbers = numbers.map(function(item){
    return item * 2;
});

console.log(newNumbers); // [8, 2, 10, 8, 10] 기존값에다가 2씩 곱한 값.



// 3. filter메소드 (filter메소드도 마찬가지로 반드시 return문을 가진다. 하지만, filter에서 return문에는 조건이 들어감.) 그 조건은 이름(filter)에 걸맞게, 필터링할 조건이 들어감.
// filter는 map과는 달리, 필터링된 값만 추출되므로 원본배열의 길이와 다르게 추출될수도 있다.

// ex)1
let numbers = [4, 1, 5, 4, 5];

let filteredNumbers = numbers.filter(function(item){
    return item === 5;
});

console.log(filteredNumbers); // [5, 5]


// ex)2
let numbers = [4, 1, 5, 4, 5];

let filteredNumbers = numbers.filter(function(item){
    return item !== 5;
});

console.log(filteredNumbers); // [4, 1, 4]


// ex)3
let numbers = [4, 1, 5, 4, 5];

let filteredNumbers = numbers.filter(function(item){
    return item >3;
});

console.log(filteredNumbers); // [4, 5, 4, 5]



// 4. find메소드 (filter와 유사하게, 조건에 맞는것만 반환한다. 하지만, 조건에 맞는 것중 오직 첫번째 요소만 반환한다.)
let numbers = [4, 1, 5, 4, 5];

let result = numbers.find(function(item){
    return item >3;
})

console.log(result); // 4  (3보다 큰 요소는 4, 5, 4, 5이지만 첫번째 요소인 4만 반환함.)