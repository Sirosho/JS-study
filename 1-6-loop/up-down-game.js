let correctNumber = Math.floor(Math.random() * 100) + 1;


alert(`UP DOWN 게임을 시작하겠습니다.\n 1 ~ 100 사이의 숫자를 맞추세요!`);

let chance;

//레벨 설정구간
while (true) {
    let level = prompt(`난이도를 설정해주세요.\n상: 기회 3번\n중: 기회 6번\n하: 기회 10번`);

    if (level === '상') {
        chance = 3;
        break;
    } else if (level === `중`) {
        chance = 6;
        break;
    } else if (level === `하`) {
        chance = 10;
        break;
    } else {
        alert(`상 중 하 중에 선택하여주세요!`);
    }
}

//입력값의 결과에 따라 구간 재설정
let maxNum=100;
let minNum=1;



while (true) {
    let userNumber = +prompt(`${minNum} ~ ${maxNum} 사이의 숫자를 입력하세요 기회는 ${chance} 번 남았습니다.`);

    if (isNaN(userNumber)) {
        alert('숫자만!');
        continue;
    }

    if(userNumber <= 0 || userNumber > 100 ) {
        alert(`1~100 사이의 숫자만 입력가능합니다!`);
        continue;
    }

    if (userNumber === correctNumber) {
        alert(`오 정답입니다!\n\n 게임에서 승리하였습니다.`);
        break;
    } else if (userNumber < correctNumber) {
        alert(`UP!`);
        minNum = userNumber+1;
    } else {
        alert(`DOWN!`);
        maxNum = userNumber-1;
    }
    chance--;
    if (chance === 0) {
        alert(`기회를 모두 사용하였습니다. 정답은 ${correctNumber}였습니다! \n게임에서 패배하였습니다. 수고링`);
        break; //찬스 없을시 끝
    }

}