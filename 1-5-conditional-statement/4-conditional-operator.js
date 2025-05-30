// 돈이 3000원 이상이면 김밥을 먹을 수 있고 미만이면 집밥을 먹어야한다.
// 그런데 먹을 수 있는 음식 이름을 변수에 조건부로 저장해야 한다.

let money = 4000;

// 3항 조건 연산자
// 조건의 값을 변수에 바로 대입할때.
// 주석 처리된 밑의 조건문을 이렇게 대체가 가능하다
//                                  true    false
let foodName = (money >= 3000) ? `김밥` : `집밥`;


// 조건       true     false
// (money>=3000)? `김밥` : `집밥`;

/*let foodName; //음식이름을 저장할 변수
if (money>=4000){
    foodName=`김밥`;
}else{
    foodName=`집밥`;
}*/
// console.log(`먹을 수 있는 음식: ${foodName}`);

console.log(`=======================================`)

let score = 70;

// 이렇게도 사용가능하나 가독성이 떨어질 우려가 있음
// (score>=70)? console.log(`합격`):console.log(`불합격`);


console.log('=============================');
// let season=`여름`;
// let isHot = (season === `여름`)? true:false;








