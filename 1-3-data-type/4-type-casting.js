

let number = 20;
let address = '서울';
let result = '10';

// 타입이 다르면 컴퓨터는 연산을 못함.
// 암묵적 타입변환
// 숫자와 문자의 덧셈은 숫자를 문자로 자동변환하여 결합한다.

console.log(number + result);

console.log(address + (number + 30));

// 타입이 달라도 문자를 숫자로 변환했을 때 문제가 없다고
// 판단되면 문자를 숫자로 변환해서 연산을 진행 (덧셈 제외);;

const operating = result - number; //이건 왜 해줌
console.log(operating);

const operating2 = number * result; //이건 왜 해줌
console.log(operating2);

// 명시적 변환

let n1 = '10';
let n2 = 20;
//let n3 = number(n1) + n2;
let n3 = +n1 + n2;
console.log(`n3: ${n3}`);

let x = 50, y = 70;

// 바꾸는 방법이 개많음
// let operResult = String(x) + y;
//let operResult = ''+x + y;
//let operResult = x.toString() + y;



console.log(`operResult: ${operResult}`);





