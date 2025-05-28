

let firstNumber = prompt('숫자를 입력하세요');
let secondNumber = prompt('숫자를 입력하세요');
let thirdNumber = prompt('숫자를 입력하세요');
let fourthNumber = prompt('숫자를 입력하세요');

let lessNumber = +firstNumber;

if(lessNumber >= +secondNumber) {
    lessNumber = +secondNumber;
    if(lessNumber >= +thirdNumber) {
        lessNumber = +thirdNumber;
    }
    if(lessNumber >= +fourthNumber) {
        lessNumber = +fourthNumber;
    }
}else if(lessNumber >= +thirdNumber) {
    lessNumber = +thirdNumber;
    if(lessNumber >= +fourthNumber) {
        lessNumber = +fourthNumber;
    }
}else if(lessNumber >= -fourthNumber) {
    lessNumber = +fourthNumber;
}else{

}



alert(`제일 작은 수는 ${lessNumber}입니다.`);