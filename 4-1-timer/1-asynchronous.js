// 동기: 코드의 순차적 실행
// hello * 3 bye *3 greeting * 3 순으로 순차적으로 실행
//
// for (let i = 0; i < 3; i++) {
//     console.log(`hello`);
// }for (let i = 0; i < 3; i++) {
//     console.log(`bye`);
// }for (let i = 0; i < 3; i++) {
//     console.log(`greeting`);
// }

// 비동기: 코드가 순서없이 동시에 실행

// setTimeout: 타임아웃 설정 시간만큼 코드실행을 비동기로 지연시킴 이게 걸리면 실행 타입이 비동기로 바뀐다
setTimeout(() => {
    console.log(`second`);
}, 0);
console.log(`first`);
console.log(`third`);

console.log(`오늘 할 일은 뭘까용?`)
setTimeout(() => {
    console.log(`정답은? ~~~ 월급루팡!!`);
}, 2000);


console.log('=============================');

setTimeout(() => {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(`hello${i}`);
        }, 200);
    }
}, 0);

setTimeout(() => {
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            console.log(`bye${i}`);
        }, 200);
    }
}, 0);

