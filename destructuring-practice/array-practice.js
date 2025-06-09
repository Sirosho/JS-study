// 아래 배열에서 각각의 과일을 fruit1, fruit2, fruit3 변수에 구조분해 할당하시오
const fruits = ['사과', '바나나', '포도'];

[fruit1,fruit2,fruit3] =  fruits; // 배열 이름을 직접입력

console.log(fruit1 );
console.log(fruit2 );
console.log(fruit3 );


// 아래 배열에서 첫 번째, 세 번째 요소만 각각 first, third 라는 변수에 할당하시오
const numbers = [100, 200, 300];

[first, ,third] = numbers;

console.log(first);
console.log(third);

// 아래 배열에서 첫 번째 숫자는 num1 이라는 변수에,
// 나머지 숫자들은 restNums 배열에 구조분해 할당하시오
const scores = [95, 88, 76, 69];


[num1,...restNums] = scores;

console.log(num1);
console.log(restNums);

// 아래 코드에서 구조분해 할당을 사용하여 변수 a와 b의 값을 서로 바꾸시오
let a = '안녕';
let b = '잘가';

[a,b] = [b,a];
console.log(a);
console.log(b);

console.log('=============================');

// 두 배열을 구조분해와 스프레드 문법으로 결합하여
// combo 라는 새 배열에 담으시오
const lunch = ['김밥', '떡볶이'];
const dessert = ['빙수', '아이스크림'];

const combo = [...lunch,...dessert];

console.log(combo);









