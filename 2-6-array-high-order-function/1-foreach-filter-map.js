

const userList = [
    {
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbies: ['수영', '축구', '테니스'],
        salary: 5400000,
        age: 35,
    },
    {
        account: 'banana',
        userName: '빠나나',
        job: '과일',
        address: '서울',
        hobbies: ['푸드파이팅', '테니스'],
        salary: 9700000,
        age: 18,
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbies: ['족구', '축구', '테니스', '영화감상'],
        salary: 3900000,
        age: 36,
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbies: ['독서', '테니스'],
        salary: 1900000,
        age: 42,
    },
];

const numbers = [1, 2, 3, 4, 5, 6];
const foods = ['제육볶음', '김치찌개', '육개장', '파스타', '된장찌개'];


// for of의 장점과 fori 의 장점을 합친

//forEach() : 배열의 반복문을 깔끔하게 처리  return이 없다
                //배열      인덱스
numbers.forEach((n,i) => { // 홀수만 출력
    if(i%2===0) {
        console.log(n);
    }
})

console.log('=============================');



userList.forEach(({userName:name, job})=> {
    console.log(`제이름은 ${name}이구요 직업은 ${job}이에요`);
});

// filter : 주어진 논리조건에 맞는 데이터를 필터링하여 새 배열로 리턴

let f1 = numbers.filter(n=>n%2===1);

console.log(f1);
console.log(numbers);// 원본은 바뀌지 않음

console.log('=============================');
//                             배열         인덱스
let f2 = foods.filter((food, idx)=>{
    console.log(food,idx);
    return food.includes(`찌개`);
});

console.log(f2);

// 회원목록에서 급여가 400만원 이상인 사람들만 필터링

let f3 = userList.filter(user=>user.salary >=4000000);


console.log(f3)

console.log('=============================');

// map : 배열에서 특정 데이터들을 추출해서 새 배열에 저장

/*
*  filter : 10개의 데이터를 필터링하면 개수가 줄어들 가능성
*           => 10명의 회원 중 서울 사는 사람만 필터링 -> 7건
*           =>[{},{},{},{}] => [{},{}]
*  map : 10개의 데이터를 매핑하면 개수가 그대로 10개
*           => 10명의 회원중 각 회원의 이름만 매핑 => 10개
*
*           => [{},{},{},{}] => ['','','',''] 이렇게 데이터의 형태가 변할 수 있음.
* */


const m2 = foods.map(food=> food.slice(0,2));
console.log(m2); //2글자 까지만 출력


console.log('=============================');

// numbers에 있는 숫자들을 li태그로 모두 감싸고 싶어

let listItems = numbers.map(n=>`<li>${n}</li>`);

console.log(listItems);


// 회원 목록에서 급여가 500만원 이상이면서 나이가 30대인 회원의
// 이름과 직업과 급여와 나이만 추출


// 필터링을 먼저하고 매핑을 하는것이 경제적임


/*let result = userList.filter(user=>user.salary >=3000000 && user.age >=30);

let final = result.map(user =>({
    name: user.userName[0]+`**`, //이름 앞글자만 나오고 뒤는 **로 나옴
    job: user.job,
    salary: user.salary,
    age: user.age,
}));
console.log(final);*/

// 위 코드를 단순하게 하는법

// 이렇게 바꿀수 있다.
let final = userList.filter(user => user.salary >= 3000000 && user.age >= 30)
    .map(user =>({// 가독성을 위해 다음줄로 빼줌
    userName: user.userName[0]+`**`, //이름 앞글자만 나오고 뒤는 **로 나옴
    job: user.job,
    salary: user.salary,
    age: user.age,
}));



console.log('=============================');


const petName= `뽀삐`;
const petAge= 3;

/*const myDog = {
    petName: petName,
    petAge: petAge
};*/ // 변수명과 프로퍼티 이름이 동일할경우

// console.log(myDog);

const myDog = {petName,petAge}; //이렇게 단축이 가능

console.log(myDog);

/*
이것과 구조분해배열을 이용해서 밑에 처럼 코드를 줄일 수 있다.

let final = userList.filter(user => user.salary >= 3000000 && user.age >= 30)
    .map(({age, job, salary, userName}) =>({userName,job, salary, age
    }));
*/



console.log('=============================');


// 배열에서 중복데이터 제거하기

const cities = [`서울`,`인천`,`서울`,`부산`,`부산`,`서울`];

const distinct = new Set(cities);

console.log(distinct);

//distinct.push(`제주`); Set은 배열이 아니기 때문에 이렇게 바로 push가 안된다.

const arrayCities = [...distinct];

console.log(arrayCities); // 이렇게 구조분해해주고 배열에 넣어줘야 받을수있다























