

// 텅빈 배열 선언

let numbers=[];
let number;
let count =0;
let sum=0;
while(count < 6) {
    number = prompt(`숫자를 입력해 주세요!
'그만' 이라고 입력하면 입력을 멈추고 입력한 수의 총합을 알려드립니다.`);
    if(number === `그만`){
        break;
    }else if(number === `` || isNaN(number) ){
        alert(`숫자와 종료 문구만 입력가능합니다.`);
        continue;
    }
    else{
        numbers.push(number);
    }
    count++;

}

for (let n of numbers) {

    sum += +n;
}

alert(`${numbers}  ${sum}`);