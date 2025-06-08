
// 다중 파라미터

function add(n1,n2,n3) {
    return n1 + n2+n3;
}

//대상에 커서를 두고 컨트롤 알트 v 하면 대상을 담을 변수를 생성
let r1 = add(20,30);

let r2 = add(20,30,40);
console.log(r2);

// 정해지지 않은 n개의 파라미터를 전달해야할 경우 배열로 처리하면 된다.
                        // 안써도 되긴하지만 배열로 지정해주는게 좋음
function addAll(numbers=[]){
    let total = 0;
    for (let number of numbers) { //for에 커서두고 alt 엔터 누르면 for문 for of 문으로 변환가능
        total += number;
    }
    return total;
}


let sum = addAll([20,20,30,40,50]);

console.log(sum);

// ES6+ : 자바스크립트 최신문법

                    //앞에 ...을 붙임
function addAllES6(...numbers){
    let total = 0;
    for (let number of numbers) { //for에 커서두고 alt 엔터 누르면 for문 for of 문으로 변환가능
        total += number;
    }
    return total;
}

// 마구마구 추가해도 알아서 배열화해줌

let sum2 = addAllES6(10,20,30,40,50,60);

console.log(sum2);


                // 이런식으로 두개가 있으면 안된다.?
/*function foo(...arr1,...arr2){

}*/


function foo(arr1,arr2){

}
// 어디에 뭐가 가야할지 컴퓨터는 판단할 수 없음 이런경우 이런식으로 직접 지정해줘야함
let num = foo( [2,3,4],[5,6,7]);