

// 함수 선언문 방식
// 호이스팅 가능

// function add(n1,n2)

//위 둘의 차이는 호이스팅

// 함수 표현식 방식
/*
const add = function({
    return n1 + n2;

                     })*/


// 함수 표현식 방식이라 호이스팅이 안됨
// 화살표 함수 방식 (ES6)
                                //코드가 한줄이면 중괄호 생략가능
                                // 그 한줄이 return이면
const add = (n1,n2) => n1 + n2; // 이렇게 return도 생략가능


const r1 = add (10,20);

console.log(r1);


const isEven = n => n % 2 === 0;
console.log(isEven(25));



const sayHello = function(nickName){
    console.log(`${nickName}님 안녕~~`);
}

sayHello(`크룽이`);

//arf 화살표 함수 생성

const pow = n => n ** 2;
















