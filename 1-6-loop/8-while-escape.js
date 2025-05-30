

// 이 파일은 브라우저에서 실행해주세요
//while(true) 는 탈출문과 함께 써야한다
while(true){
    let n = prompt(`정수 : `);
    if(n === '그만') break;
    if(n === 'ㅋㅋㅋ') {
        alert('뭘 웃어 ㅋ');
        continue;
    }
    alert(`당신이 입력한 숫자 : ${n}`);
}
console.log(`하하호호`);