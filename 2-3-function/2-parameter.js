// 매개변수 (parameter) : 함수가 실행할 때 함수 바깥쪽에서 전달되는 값을 저장하는 변수

// 언어를 전달하면 그 언어에 맍는 인사를 해주는 함수

function greet(language) {
    switch (language) {
        case '한국어':
            console.log(`안녕하세요`);
            break;
        case '영어':
            console.log(`Hello`);
            break;
        case '쥰국어':
            console.log(`따쟈하오`);
            break;
        case '일본어':
            console.log(`콘-니치와`);
            break;
        default:
            console.log(`삥뽕`);
    }
}

//함수 호출
//함수를 호출할 때 전달된 값 -> 인수 (argument)


greet(`한국어`);

greet();// 괄호를 비워놓으면 undefined로 반환된다.


console.log('=============================');


// x ~ y 사이의 랜덤정수를 만들어주는 함수를 정의

// shift f6 으로 여러번 쓰인 변수 이름한번에 교체가능
function makeRandomNumber(min,max){
    let rn=Math.floor(Math.random()* (max-min+1)+min);
    console.log(`생성된 정수: ${rn}`);
}

makeRandomNumber(1,100);









console.log('=============================');

// 매개변수 없는 함수

// 매개변수 없는 함수는 괄호안에 적지 않아도 발동된다.

function makeLine (){
    console.log('=================zzzz============');
}


makeLine();



