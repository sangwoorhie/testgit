// falsy한 값, truthy한 값

if (조건) {
    // main logic
}
// 괄호안에는 조건이 들어가며, 조건은 truthy 또는 falsy한 값을 가짐.
// 조건에 성립될 경우 truthy, 조건자체가 성립하지 않을 경우 falsy

// 조건에 들어갈 수 있는 것들은 다양함.
// 아래 값들중, (true)만 truthy한 값이고 나머지는 falsy한 값.

if (0) {
    // main logic
    console.log("hello");
}

if ("") {
    // main logic
    console.log("hello");
}

if (null) {
    // main logic
    console.log("hello");
}

if (undefined) {
    // main logic
    console.log("hello");
}

if (NaN) {
    // main logic
    console.log("hello");
}

if (false) {
    // main logic
    console.log("hello");
}

if (true) {
    console.log("hello");
}