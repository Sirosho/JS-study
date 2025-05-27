

let number =10;
//변수는 중복으로 선언 불가능
//let number = 20;


// 블록(중괄호) 레벨 스코프를 지원
// 중괄호 별로 함수를 다시 지정할수 있으나 중괄호를 벗어나면 기존값으로 돌아옴

if(true){
    let number = 30;
    console.log(`number in if : ${number}`);
}

console.log(`number in main : ${number}`);




