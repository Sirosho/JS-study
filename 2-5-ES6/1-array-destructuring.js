

// 디스트럭쳐링 : 구조 분해 할당

const userNames = [`김철수`,`홍길동`,`고구마`];

// 배열에 들어있는 데이터를 다시 각각의 변수에 저장하고 싶음.

/*
const kim = userNames[0];
const hong = userNames[1];
기존에 배열에서 데이터를 뽑던 방식
*/

// ES6에서의 방식
const [kim,hong,go] = userNames;

console.log(kim,hong,go);  //kim hong go 변수에 userNames 배열의 [0],[1],[2] 인덱스의 정보를 넣는다.

// 나는 0번 인덱스랑 2번만 추출하고 싶어 1번은 안해

const[kk, ,gg] = userNames;// 이렇게 1번만 변수지정을 안해주면 된다. 이경우는 잘 안쓰인다.
console.log(kk,gg);


const example=[[10,20],()=>console.log(`hello`)  ]; // 이렇게 함수와 배열이 섞인 배열에서 배열요소를 꺼낼때 구조분해할당이 사용된다.

// swap

let first = 10, seconds = 20;

[first,seconds] = [seconds,first]; // 구조분해로 이렇게 추가변수없이 값을 맞교환 가능

console.log(`first${first},seconds${seconds}`);


// 맨 앞 2개의 숫자만 각각의 변수에 저장하고
// 나머지 4개의 숫자는 다시한번 배열로 묶고싶다.

const nums = [1,3,5,7,9,11];

// const others = nums.slice();
// const one = others.shift(); //shift가 잘 기억이 안남
// const three = others.shift();
      //인덱스 0    인덱스 1          나머지들
const[one,three,...others] = nums; // 위 과정을 이렇게 구조분해할당으로 쉽게 가능

console.log(one);
console.log(three);
console.log(others);

// 스프레드 : 배열을 평탄화 (해체해서 늘어놓는다) 시킨다.

const foods = [`햄버거`,`콜라`,`감자튀김`];
const fruits = [`오렌지`,`레몬`,`라임`];

 // combination = [`햄버거`,`콜라`,`감자튀김`,`오렌지`,`레몬`,`라임`] 이렇게 만들고싶다면?

//fruits.push(foods); //[ '오렌지', '레몬', '라임', [ '햄버거', '콜라', '감자튀김' ] ] 그냥 푸쉬하면 이렇게 된다.
//console.log(fruits);

console.log('=============================');

//const combination = foods.concat(fruits);// 이런방식이 있는데 이건 ES5 방식

const combination = [...foods,...fruits]; // 앞에 ... 찍으면 요소들을 풀어해친다.

console.log(combination);

// 배열 복사
const newFruits = [...fruits]; //요소를 풀어헤쳐서 저장


// push : 원본 배열 손상
// 이렇게 하면 원본 배열 손상없이 데이터를 추가 할 수 있음
const newFoods = [...foods,`새 데이터`];









