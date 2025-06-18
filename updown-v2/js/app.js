const $form = document.getElementById('guess-form');
const input = document.getElementById('guess-input');
const $submit = document.querySelector('.guess-button');
const feedback = document.getElementById('feedback');
const finishModal = document.getElementById('finish-modal');
let finishNumber = 0;
let chanceLeft = document.getElementById('chances-left');
let chance = 0;
const restartBtn = document.getElementById('restart-button');

// 디바운스 함수
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

// 게임 스타트 함수

function gameStart() {
    let min = document.getElementById('begin');
    let max = document.getElementById('end');
    input.value = "";
    feedback.textContent = '추리를 시작하세요!';
    feedback.classList.remove("correct","up","down");
    chance = 10;
    chanceLeft.textContent = chance;
    finishNumber = Math.floor(Math.random() * 100) + 1;
    input.max=100;
    input.min=1;
    finishModal.classList.remove("show");
    min.textContent = input.min;
    max.textContent = input.max;

}

// 로그 추가 함수

function addLog(result, value) {
    let log = document.createElement("li");
    let logList = document.getElementById('history-list');
    if (result === `up`) {
    log.textContent = `${Number(value)} (UP)`;
        log.classList.add('history-item', `up`);
        logList.prepend(log);

    } else {
    log.textContent = `${Number(value)} (DOWN)`;
        log.classList.add('history-item', `down`);
        logList.prepend(log);
    }
}

// 최소값 최댓값이 같아지면 종료하는 함수
function lastNumberReturn() {
    if (input.max === input.min) {
        feedback.classList.add("correct");
        finishModal.classList.add("show");
        document.getElementById(`finish-text`).textContent = `정답은 ${finishNumber} 였습니다!`
    } else if (chance === 0) {
        finishModal.classList.add("show");
        document.getElementById(`finish-text`).textContent = ` 정답은 ${finishNumber} 였습니다!`
        document.getElementById(`finish-title`).textContent = `GAME OVER`;
        document.getElementById(`finish-title`).style.color = `#dc3545`;
    }
}



// UP & DOWN 함수

function upDown() {
    let min = document.getElementById('begin');
    let max = document.getElementById('end');

    let value = input.value.trim();
    //최소 최대 범위가 같아질경우 게임 종료
    if (value > finishNumber) {
        //DOWN
        feedback.textContent = "DOWN!";
        feedback.classList.add("down");
        input.max = Number(value) - 1;
        max.textContent = input.max;// 범위 텍스트 반영
        input.value = "";
        chance--;
        chanceLeft.textContent = chance;
        lastNumberReturn();
        addLog(`down`, Number(value));
    } else if (value < finishNumber) {
        //UP
        feedback.textContent = "UP!";
        feedback.classList.add("up");
        input.min = Number(value) + 1;
        min.textContent = input.min;// 범위 텍스트 반영
        input.value = "";
        chance--;
        chanceLeft.textContent = chance;
        lastNumberReturn();
        addLog(`up`, Number(value));
    } else {
        //정답
        feedback.classList.add("correct");
        finishModal.classList.add("show");
        document.getElementById(`finish-text`).textContent = `정답은 ${finishNumber} 였습니다!`
    }

}










    gameStart();

$form.addEventListener('submit',(event) => {

    event.preventDefault();

    const value = input.value.trim();

    // 1. 비어있을 경우
    if (value === "") {
        alert("숫자를 입력해주세요!");
        input.focus();
        input.value = "";
        return;
    }

    // 2. 숫자가 아닐 경우
    const number = Number(value);
    if (isNaN(number)) {
        alert("숫자만 입력해주세요!");
        input.value = "";
        input.focus();
        return;
    }

    // 3. 범위 체크
    if (number < input.min || number > input.max) {
        alert(`${+(input.min)}부터 ${+(input.max)} 사이의 숫자만 입력 가능합니다!`);
        input.value = "";
        input.focus();
        return;
    }

    return upDown();// up down 판정

});

restartBtn.addEventListener('click', (event) => {
    let logList = document.getElementById('history-list');
    [...logList.children].forEach(ele => {

    document.querySelector(`.history-item`).remove();
    });

    return gameStart();
});
























