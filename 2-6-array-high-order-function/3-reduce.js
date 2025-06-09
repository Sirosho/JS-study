

const nums = [10,20,30,40,50];

// 모든 배열을 더한 값
// const sum = nums.reduce((acc,cur)=>acc+cur,0);
// console.log(sum);



/*
  reduce() : 배열의 각 요소들을 주어진 콜백에 맞게 합산, 누적하여
            단 하나의 결과값을 반환

  reduce에 전달되는 콜백
  - callback(accumulator, currentValue)
  1. accumulator: 어떤 데이터를 계속 누적해 나가는 변수
  2. currentValue: 현재 루프회차에서 사용할 데이터

  -> reduce는 반복을 실행할 때마다 currentValue를 accumulator에
     return 조건에 맞게 누적

  -> reduce는 마지막에 accumulator의 리턴값을 리턴
*/

// a 누적값 b 현재 루프회차에서 사용할 데이터 c a의 초기값, 초기값이 없으면 a는 0번 인덱스부터 b는 1번부터 시작
// 초기값이 있으면 b는 0번 인덱스부터 시작
//reduce(a,b,c)

const sumsum=nums.reduce((a,b)=>{
    console.log(`a: ${a}`); // 처음에는 배열의 0번 값이 들어감
    console.log(`b: ${b}`);
    console.log('=============================');
    // return a+b; // 다음번 a의 값

});
console.log(sumsum);



// let sum =0;

// nums.forEach(num => sum+=num);
// console.log(sum);


console.log('=============================');

const appleBasket = [
    {
        color: 'green',
        sweet: 13,
    },
    {
        color: 'red',
        sweet: 14,
    },
    {
        color: 'red',
        sweet: 11,
    },
    {
        color: 'green',
        sweet: 6,
    },
    {
        color: 'green',
        sweet: 7,
    },
    {
        color: 'yellow',
        sweet: 7,
    },
    {
        color: 'yellow',
        sweet: 8,
    },
    {
        color: 'green',
        sweet: 9,
    },
    {
        color: 'yellow',
        sweet: 17,
    },
];


// 사과바구니에 있는 모든 사과들이 당도를 합산해주세요.


let total = appleBasket.reduce((a, b)=>{
    console.log(`a:`,a); //계속 반복이 돌면서 return값을 계속 가져옴
    console.log(`b:`,b);
    console.log('=============================');
    return a+b.sweet; // 반복이 끝나면 return값을 reduce에 리턴하고 함수종료
},0);

console.log(total);

console.log('=============================');

/*
* 색깔별로 사과카운트해서 객체로 만들기
*
* 결과 예시 : {`red`:8,`green`:13, `yellow`:3}
*
* */


 // `x` in 객체 : 객체에 해당 프로퍼티가 존재하는지 확인
function countApple(callback){
    let count = 0;
    let filteredApple={};
    for (const user of appleBasket) {
        if(callback(user)){// user.color ===`red`
                            count++;
        }
    }
}

const result = appleBasket.reduce((resultobj, apple) => {
    console.log(`resultobj:`,resultobj);
    console.log(`apple:`,apple);
    console.log('===============================');

    if(apple.color in resultobj){
        resultobj[apple.color]++;
    }else{
        resultobj[apple.color] = 1;
    }
    return resultobj;
},{});// a의 초기값을 빈객체로 잡음

console.log(result);

console.log('=============================');



// reduce의 구현

function myReduce(callback,initialValue){

    let accumulator = initialValue !== undefined ? initialValue : appleBasket[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < appleBasket.length ; i++) {
        accumulator = callback(accumulator,appleBasket[i]);
    }
    return accumulator;
}

console.log('=============================');

const result2 = myReduce((a, b) => a+b.sweet, 0);
console.log(`result2: ${result2}`);










// 객체에 [] 써서 넣는거 헷갈림 다시공부




















