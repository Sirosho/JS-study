



let userName = prompt('당신의 이름은 무엇인가요?');

let userAge = prompt('당신의 나이는 몇살인가요?');

let userSince = 2025-(+userAge)+1;


// 실무스타일. 좋은 가독성과 의도가 보이게 함수로 표현
// let currentYear = new Date().getFullYear();
// let koreanAgeMarker = 1;
// let birthYear = currentYear - +userAge + koreanAgeMarker;



//변수를 재사용 할 여지가 절대로 없다면 직접연산을 출력하는것이 경제적임
alert(`${userName} 님은 ${userSince} 년생 이시군요!`);

