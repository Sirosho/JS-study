


const numbers = [];

// 조건이




while(numbers.length <4){
    let number = Math.floor(Math.random()*9 + 1);
    if(!numbers.includes(number)){
        numbers.push(number);
    }

}
let inputNumber;
let userNumber;
while (true) {
    inputNumber = prompt(`서로 다른 수를 4개 입력하라 ex) 1234`);
    if([...inputNumber].length>4 && ){
        inputNumber = prompt(`숫자 4개만 입력해라 ex)1234 `);
    }else{
        userNumber= [...inputNumber];
        break;
    }
    
}




