// return : 함수가 실행결과를 함수밖으로 가져가는 것
//          함수를 종료하는 기능

function foo() {
    let a = 10, b = 20;
    console.log(`a: ${a}`);
    return a + b;
    let c = 500; // return 을 먼저 만나서 마치 break 처럼 return 밑의 코드들은 무시됨
    console.log(`c: ${c}`);
}

foo();

// 변수는 명사, 함수는 동사가 들어가는것이 관례
function callYourName(name) {
    let prohibits = [`멍청이`, `바보`, `빡대가리`];

    if (prohibits.includes(name)) {
        console.log(`나쁜말은 쓰지 마세요~~`);
        return;    // return은 함수에서만 쓰이고, break 처럼 사용가능
    }               // 이 상황은 break가 사용불가능한 상황이라 이럴때 return 을 사용하면 된다.
    console.log(`${name} 님 안녕하세요`);

}

callYourName(`뽀로로`);
callYourName(`멍청이`);
callYourName(`바보`);

console.log('=============================');


function loop(n) {
    for (let i = 0; i < 5; i++) {
        if (n === 4) {
            console.log(`break!!!`);
            break;
        }
        console.log(`반복문실행: ${i}`);
    }//end for
    console.log(`수고하셨어요~~~`);
}//end function

loop(4);

//break 는 반복문만 탈출, return은 밑의 코드를 무시하며 함수자체를 종료

console.log('=============================');

// 매개변수는 여러 개일 수 있지만 리턴값은 오직 하나!
// f(x) = 2a + 3b
function add(n1, n2) {
    return n1 + n2;
}


// 숫자 2개를 전달하면 두 수의 합,차,곱,나눗셈의 결과를 모두 리턴

function operate(n1, n2) {
    let addResult = n1 + n2;
    let subResult = n1 - n2;
    let mulResult = n1 * n2;
    let divResult = n1 / n2;

    // return [addResult, subResult, mulResult, divResult];
    return{
        add: addResult,
        sub: subResult,
        mul: mulResult,
        div: divResult
    };
}
// 컨트롤 알트 n 으로 리펙토링
let results = operate(20,10);

console.log(`덧셈: ${results.add}`);
console.log(`뺄셈: ${results.sub}`);
console.log(`곱셈: ${results.mul}`);
console.log(`나눗셈: ${results.div}`);


