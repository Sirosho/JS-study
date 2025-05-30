



for (let i = 1; i <= 10; i++) {

    if(i ===5){
        break; // 현재 반복문을 중단!
    }

    console.log(i)
}
console.log(`반복문 종료!`);


console.log('=============================');


//중첩 반복문에서의 break
// for문 앞에 라벨링을 걸어주면 break로 바깥쪽 for문을 중지시킬수도 있음 잘 안쓰임

apple:for (let i = 0; i < 3; i++) {
banana:for (let j = 0; j < 2; j++) {
        if(i===j) break apple;
        console.log(`${i},${j}`);
    }//end inner for

}//end outer for

console.log(`모든 반복문 종료!`);





