console.log(3 + 5 * 2);


// js는 나눗셈 수행시 실수 나눗셈을 수행 (소수점이 나옴)
console.log(27 / 5);

// console.log(Math.floor(x:27 / 5)); // 몫만 도출

console.log(27 % 5); //나머지 도출

console.log(5 % 6); // 앞에가 크면 앞의 숫자가 그대로 나머지
console.log(10 % 0 ); // 연산불가
console.log(0 % 10); // 나머지 0

console.log(3 ** 2); // 3의 제곱

console.log('=======================')

// 증감 연산자

let x = 3;
++x;
x--;
--x;
console.log(`x: ${x}`);

// 전위 연산, 후위 연산
// 11 10
let n1 = 10;
let n2 = n1++;

console.log(`n1: ${n1}, n2: ${n2}`);

// 11 11
let n3 = 10;
let n4 = ++n3;

console.log(`n3: ${n3}, n4: ${n4}`);


