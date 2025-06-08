
// 상수를 만들때 const
// 상수는 대문자로 적는게 관례
const x = 10;

//x= 20;
console.log(`x:${x}`);

const number = 100;

const hello = `hello`;

//객체 배열함수는 무조건 const로


const x = 10;
// x = 20;
console.log(`x: ${x}`);

let numbers = [10, 20, 30, 40];
let copyNumbers = [];

for (const n of numbers) {
    copyNumbers.push(n);
}

numbers[1] = 99;
copyNumbers[2] = 777;

console.log('numbers:', numbers);
console.log('copyNumbers:', copyNumbers);














