



/*
*  일급함수
* : 함수를 마치 하나의 값처럼 보는 개념
*
* -> 함수를 다른 함수의 매개값으로 넘기는게 가능
* -> 함수가 함수를 리턴하는 것도 가능
* */



// 함수에 함수를 넣는것
function foo(param){
    console.log(param);
}

// foo(function ());

foo(function () {
    console.log('노는게 젤 조어~');
    let x = 10;
    console.log('뽀롱뽀롱 뽀로로');
    console.log('ㅋㅋㅋㅋㅋ 멀쪼개 즐');
}); // 3줄 출력


foo(function () {
    console.log('A');
    console.log('B');
    console.log('C');
    for (let i = 0; i < 3; i++) {
        console.log('D');
    }
    console.log('E');
}); // 5줄 출력


console.log('=============================');


// 편지지 양식 함수


function makePaper(receiver,sender,createContent){
    console.log(`수신인: ${receiver}`);
    console.log('=============================');
    // 이 사이에 편지내용을 쓰세요.
    createContent();



    console.log('=============================');
    console.log(`발신인: ${sender}`);

}

makePaper(`둘리`,`도우너`, function(){
    console.log(`도우너가 둘리에게 일침을 가한다.`);
    console.log(`지구정복을 포기해라`);
});






























