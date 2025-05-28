//else if 조건문
let age = 26;
// else if 주의사항 else if 의 조건이 충족되는 순간 밑의 else if들은 스킵함
// 하나하나 다 조건검사를 해야하는 경우 else if 사용에 주의해야함
// else if 의 조건들은 내려갈수록 좁아지는 방향이 되어야함
if (age >= 20) {
    console.log('성인입니다.');
} else if (age >= 17) {
    console.log('고등학생입니다.');
} else if (age >= 14) {
    console.log('중학생입니다.');
} else if (age >= 8) {
    console.log('초등학생입니다.');
} else {
    console.log('미취학 아동입니다.');
}