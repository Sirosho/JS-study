let foods = [`닭꼬치`, `볶음밥`, `족발`, `파스타`];


// indexOf() : 배열의 특정 요소가 몇번 인덱스에 있는지 알려줌.
// 존재하지 않으면 -1을 반환함


let idx = foods.indexOf(`볶음밥`);

console.log(idx);

// 음식 목록에서 족발을 찾아서 보쌈으로 바꿔주세요.

foods[foods.indexOf(`족발`)] = `보쌈`;

console.log(foods);

// includes(): 배열에 특정 요소가 있는지의 유무를 확인
// true of false로 반환
let flag = foods.includes(`파스타`);

console.log(flag);

// 음식 목록에 파스타가 있다면~
// 음식 목록에 파스타가 없다면~ 은 ! 붙이기
if (foods.includes(`파스타`)) {


}

console.log('=============================');

//slice() : 배열을 원하는 만큼 분할해서 복사배열로 반환 원본은 그대로 유지
let numbers = [10, 20, 30, 40, 50, 60];

let slicedNumbers = numbers.slice(1,3); //1번인덱스 부터 3번인덱스 미만 까지 범위지정
                                                // 0 |1 2 |3 이렇게 해당 번호들 앞에 선을 그어 범위를 연상하자

console.log(`slice:`,slicedNumbers);
console.log(`origin:`,numbers); // slice를 써도 원본이 변하거나 하지않음 복사의 개념

console.log(numbers.slice(3)); // 3번부터 끝까지 쭈욱 복사
console.log(numbers.slice()); // 전체복사

console.log('=============================');

// splice() : 배열의 요소를 추가하거나 삭제 (중간에서 작업 가능)
// 배열의 원본을 건드림.

console.log(foods);

foods.splice(2,1); // 2번부터 시작해서 1개를 지워라
console.log(foods)
foods.splice(0,1); //0번 부터 포함해서 시작하여 1개를 지워라
console.log('=============================');
console.log(foods);
foods.splice(1,1,`마라탕`,`마라탕`); //0번 부터 포함해서 시작하여 1개를 지우고 거기부터 마라탕으로 바꿔라

console.log(foods);













