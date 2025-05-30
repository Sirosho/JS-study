

//난수 : 랜덤값
// 0.0 이상 1.0 미만의 랜덤 숫자를 생성해줌
let randomNumber = Math.random();
console.log(Math.floor(randomNumber * 10));

// 랜덤 정수 만들기

/*
    Math.floor() : 소수점 버림

    Math.random()         0.0<=~ <1.0

    Math.random() * 10    0.0<=~ <10.0

    Math.floor(Math.random() * 10)
*/

// 난수 : 랜덤값
// 0.0 이상  1.0미만의 랜덤 숫자를 생성해줌
/*let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`rn: ${randomNumber}`);*/

// 랜덤 정수 만들기 (1 ~ 10)
/*
    Math.floor() : 소수점 버림

    Math.random()                         0.0 <= ~ < 1.0
    Math.random() * 10                    0.0 <= ~ < 10.0
    Math.floor(Math.random() * 10)        0  <= ~  < 10
    Math.floor(Math.random() * 10) + 1    1  <= ~  < 11
 */


/*

117~ 132 사이의 난수

x~y 사이의 난수 (이상 이하 개념)
Math.floor(Math.random() * (y - x +1))+x;
외워두면 유용함
*/

let damage = Math.floor(Math.random() * (132 - 117 + 1)) + 117;

console.log(damage);


let lotto = Math.floor(Math.random() * (45 - 1 + 1)) + 1;

console.log(lotto);










