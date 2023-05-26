// // 조건문의 중첩 (if - else문 안의 if - else문)
// // if문 (if - else문) else문
 
// if (조건1){
//     조건1 Main Logic #1
// } if (조건2){
//     조건2 Main Logic #1
// } else {
//     조건2 Main Logic #2
// }
// else (
//     조건1 Main Logic #2
// )

// let age = 20;
// let gender = "여성";

// // 미성년자 구분
// if (age >= 18) {
//     console.log("성인입니다.");
//     if (gender === "여성") {
//         console.log("성인 여성입니다.");
//     } else {
//         console.log("성인 남성입니다.");
//     }
// } else {
//     console.log("미성년자입니다.");
// }




if (age >= 18) {
    if (gender === "여성") {
        console.log("성인 여성입니다.");
    } else {
        console.log("성인 남성입니다.");
    }
} else {
    if (gender === "여성") {
    console.log("미성년 여성입니다.");
    } else {
    console.log("미성년 남성입니다.");
    }
}