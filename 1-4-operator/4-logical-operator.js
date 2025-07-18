// 논리연산자 : 피연산자가 논리타입이어야 함

let t = true;
let f = false;

// && : 양쪽 항이 모두 true인 경우 전체가 true로 도출
// 로그인 로직: 아이디 일치 + 비번 일치 = 성공 (true)

console.log(t && t); //true
console.log(f && t); //false
console.log(f && t); //false
console.log(f && f); //false

console.log('=============================');

// || : 양 쪽 항 중에 한쪽만 true 여도 전체가 true
console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

console.log('=============================');

// 논리 반전 (not)

console.log(!t); //false
console.log(!f) //true

console.log('=============================');













