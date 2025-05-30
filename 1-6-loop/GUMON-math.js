alert(`학습을 시작합니다.\n 학습 종료를 원하시면 0을 입력해주세요`)

let question = 1;
let correct=0;
let wrong=0;

while (true) {
    let firstNumber = Math.floor(Math.random() * 10) + 1;
    let secondNumber = Math.floor(Math.random() * 10) + 1;
    let correctNumber = firstNumber + secondNumber;
    let userNumber = +prompt(`Q ${question}: ${firstNumber} + ${secondNumber} = `);

    if (userNumber === correctNumber) {
        alert(`정답입니다! 다음 문제로 넘어갈게요.`);
        correct++;
    } else if (userNumber === 0) {
        break;
    } else{
        alert(`오답입니다.. 다음 문제는 잘 맞춰봐요`);
        wrong++;
    }
    question++;
}
alert(`학습을 종료합니다. 다음에 만나요 !\n 맞춘 문제: ${correct} 개\n 틀린 문제: ${wrong} 개`);




// 뺄셈 곱셈을 랜덤으로 추가 출제시키기
// 1~300 범위에서 구간을 나눈후에 덧셈 뺄셈 곱셈 이 적용되는 구간을 설정한다?
//1~99 까지의 수를 3으로 나누었을때 나올수 있는 나머지 수의 종류는 0 1 2 셋뿐이다.
//랜덤수를 부여받는다 했을때 이 방식이 공평할지도 모르겠다.




/*
3가지 난이도 상중하 로 설정하여
상 난이도에서는 세자리수 사칙연산문제를 출제
중 난이도는 두자리수
하 난이도는 한자리수
*/






