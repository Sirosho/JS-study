

//양의 정수 입력 받고
// 1부터 그 정수까지의 2의 제곱수들을 모두 가로로 나열


let number = +prompt(`양의 정수를 입력해주세요.`);
let text=` `;
for(let i=2; i<=number; i*=2){

    text +=`${i} `;
}

alert(`${text}`);



//isNaN(number); number 라는 함수가 NaN 이면 true

// 웹사이트의 console 에서 입력값이 어떻게 입력되었는지 확인가능