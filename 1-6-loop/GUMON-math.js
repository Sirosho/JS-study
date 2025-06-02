// 유저에게 레벨선택 입력받기


let levelSelector; // 난이도 설정용 변수 선언
while (true) {
    levelSelector = prompt(`난이도를 선택해주세요.\n\n 상 : 세자리수 사칙연산문제\n 중 : 두자리수 사칙연산문제\n 하 : 한자리수 사칙연산문제 `);
    if (levelSelector === '상') {
        alert(`'상' 난이도 학습을 시작합니다.\n 학습 종료를 원하시면 0을 입력해주세요`);
        break;
    } else if (levelSelector === '중') {
        alert(`'중' 난이도 학습을 시작합니다.\n 학습 종료를 원하시면 0을 입력해주세요`);
        break;
    } else if (levelSelector === '하') {
        alert(`'하' 난이도 학습을 시작합니다.\n 학습 종료를 원하시면 0을 입력해주세요`);
        break;
    } else if (isNaN(levelSelector) || levelSelector !== '') {
        alert(`상 중 하 만 입력가능합니다!`);
        continue;
    }
}


let question = 1; //문제 번호
let correct = 0; //정답갯수 카운트
let wrong = 0; //오답갯수 카운트


while (true) {
    let quizSelector = Math.floor(Math.random() * 300) + 1; // 덧 뺄 곱 랜덤지정용 난수
    let userNumber;
    let correctNumber;
    //1~100 덧셈 101~200 뺄셈 201~300 곱셈
    let firstNumber;
    let secondNumber;

    while (true) {
        //난이도에 따른 난수 범위설정
        if (levelSelector === `상`) {//세자릿수
            firstNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 1;
            secondNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 1;
        } else if (levelSelector === `중`) {//두자릿수
            firstNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 1;
            secondNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 1;
        } else if (levelSelector === `하`) {//한자릿수
            firstNumber = Math.floor(Math.random() * 9) + 1;
            secondNumber = Math.floor(Math.random() * 9) + 1;
        }

        // 사칙연산 랜덤설정
        if (quizSelector < 101) {
            userNumber = +prompt(`Q ${question}: ${firstNumber} + ${secondNumber} = `); //덧셈 문제 생성
            correctNumber = firstNumber + secondNumber; // 덧셈 문제 정답생성
            break;
        } else if (100 < quizSelector && quizSelector < 201) {

            if (firstNumber > secondNumber) {              // 뺄셈에서 앞의 수가 큰 경우
                userNumber = +prompt(`Q ${question}: ${firstNumber} - ${secondNumber} = `);
                correctNumber = firstNumber - secondNumber; // 뺄셈 문제 정답생성
                break;
            } else if (firstNumber < secondNumber) {        //뺄셈에서 뒤의 수가 큰 경우
                userNumber = +prompt(`Q ${question}: ${secondNumber} - ${firstNumber} = `); //뒤의 수가 큰 경우 큰수를 앞으로 배치해서 문제출제
                correctNumber = secondNumber - firstNumber; // 뺄셈 문제 정답생성
                break;
            } else if (firstNumber === secondNumber) {
                continue;//수가 같아서 답이 0이 나올경우 반복문 다시시작
            }
        } else if (200 < quizSelector && quizSelector < 301) {

            userNumber = +prompt(`Q ${question}: ${firstNumber} X ${secondNumber} = `); //곱셈 문제 생성
            correctNumber = firstNumber * secondNumber; // 곱셈 문제 정답생성
            break;
        }
    }


    if (userNumber === correctNumber) {
        alert(`정답입니다! 다음 문제로 넘어갈게요.`);
        correct++;
    } else if (userNumber === 0) {
        break;
    } else {
        alert(`오답입니다.. 다음 문제는 잘 맞춰봐요`);
        wrong++;
    }
    question++;
}
alert(`학습을 종료합니다. 다음에 만나요 !\n 맞춘 문제: ${correct} 개\n 틀린 문제: ${wrong} 개`);







