
/*
* 단축 평가 (short circuit) : 논리연산시 좌항에서 결과가 결정될 경우 우항의 연산을 무시
* */


true && true; //t
true && false; //f
//이렇게 좌항에서 이미 false가 뜨면 우항인 true는 연산을 하지도 않음
false && true; //f
false && false ; //f


// let a =11, b=20;
//
// if(++a>20 && ++b ===21){ //a:12,b:20 로 출력 이렇게 앞에가 틀리면 뒤는 연산도 안함
//
// }
//
// console.log(`a:${a},b:${b}`);

let a =11, b=20;

if(++a<20 && ++b ===21){ //a:12,b:21 로 출력

}

console.log(`a:${a},b:${b}`);



// thruthy falsy (0,'',undefined,null,NaN)
// 논리가 아닌데 논리연산이 가능

console.log(`hello`&&0); // 0
console.log(`hello`&&100); // 100출력
console.log(0&&`메롱`); //0 출력

console.log(`Hello` && null); // true && false -> null
console.log(0 && `메롱`); // false && true -> 0

console.log(`hello`||undefined);//true || false -> hello
console.log(null || 300); //false || true -> 300

//and는 우항이 key
//or는 좌항이 key

//
// if(isLogin){
//     `<h2>회원님 반갑습니다.</h2>`;
// }
//
// isLogin && `<h2>회원님 반갑습니다.</h2>`; // 이렇게 줄일수 있다.



function foo(param) {
    console.log(`param: ${param || `없음!`}`);
}

foo();






