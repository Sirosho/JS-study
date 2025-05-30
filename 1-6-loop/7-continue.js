for (let i = 1; i <=10 ; i++) {
    if(i % 2 === 0) continue; //skip 으로 생각하자
    console.log(i);
}
console.log(`모든 반복문 종료!`)

//continue 지점 밑의 코드는 실행없이 다시 반복문으로 올라감