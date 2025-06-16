
//전역변수 선언을 줄이기 위해서 사용


// let count = 0;
// 내 취미의 카운트를 세는 함수

let hobbyCount = 0;
let friendCount = 0;

function increaseHobbyCount(){
    // let hobbyCount = 0;
    return ++hobbyCount;
}


// 내 친구의 카운트를 세는 함수

function increaseFriendCount(){
    // let friendCount =0;
    return ++friendCount;
}
console.log('============취미 카운팅 시작!=================');
console.log(increaseHobbyCount());
console.log(increaseHobbyCount());
console.log('============취미 카운팅 시작!=================');
console.log(increaseFriendCount());
console.log(increaseFriendCount());
