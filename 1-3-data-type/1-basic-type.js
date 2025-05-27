//JS는 선언할때마다 데이터타입을 자동으로 지정해 라벨을 붙여놓는다. 동적타입.

let element = 65; //number

element = 'A'; // == 65 //string

//자바스크립트는 정수와 실수를 모두 실수로 판단한다.

let age = 20;
console.log(typeof age);
//JS 에서는 실수로 판단하므로 2.5가 나오는데 다른 언어에서는 정수로 계산하면 2가 나옴
console.log(20 / 8);
// Infinity
console.log(age / 0);
// NaN : Not a Number
console.log(age * '메롱');
