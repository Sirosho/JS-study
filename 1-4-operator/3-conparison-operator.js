let a = 5; // 00000101
let b = '5'; // 53
//00110101

// js에서 모든 동등, 비동등 비교는 ===, !== 으로 해야함
//다른 언어는 해당안됨 js가 이상한거임
console.log(a === b);
console.log(a !== b);

console.log('=======================');


// == 은 직관적으로 결과 예측이 힘듬
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === 0);

console.log('=============================');

// 문자 비교

let password = 'abc1234';
console.log(password === 'abc123');

// 문자 대소 비교
//
//           97    65
console.log('a' < 'A');
console.log('B' < 'C');
console.log('z' < '가');
//                44032   가각간갇갈감갑~힣

console.log('z' < '가');

//          97 99     97 100
// a대a c대d d가 이기므로 두번째글자에서 연산 종료
console.log('ace' < 'ade');














