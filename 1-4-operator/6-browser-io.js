

console.log('브라우저 연결!!');

/*
  브라우저 전용함수: nodejs환경에서는 실행 불가

  alert(): 브라우저 출력창을 띄움
  prompt(): 브라우저 입력창을 띄움
  confirm(): 브라우저 확인/취소창을 띄움
*/

// alert(`메롱메롱`);

// let userName = prompt('당신의 이름은 무엇입니까?');

// console.log('입력된 이름:${userName}');

//계산이 아닌 특정 숫자를 입력받을때에는 문자로 하는것이 안전
//ex 001 같은 경우는 1로 받아들여지기 때문
let number = prompt('좋아하는 숫자를 쓰세요.');

alert(`당신이 좋아하는 숫자에 100을 더하면 ${+number + 100} 입니다.`);

