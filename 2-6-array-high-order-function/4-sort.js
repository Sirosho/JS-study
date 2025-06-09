

// 배열 정렬하기

const nums = [6,11,3,7,9,23,17,39];

console.log(nums);

// 원본이 바뀜
//       callback
const sortedNum= nums.sort((a,b)=>a-b); //오름차

console.log(sortedNum);
console.log(nums);


nums.sort((a,b,)=>b-a); // 내림차
console.log(sortedNum);


console.log('=============================');



const foods = [`짜장면`,`랍스타`,`가오리찜`,`호빵`];

// sort의 콜백은 비교연산결과 리턴값이 양수면 자리를 바꾸도록 설계됨

foods.sort((a,b)=>{
    if(a>b) return 100; //문자열은 뺄셈이 안되므로 값을 비교 (ㅎ에 가까울수록 수가 크다)하여 양수 음수를 반환해줌
    else return -1; // 양수를 리턴하면 자리를 바꾸고 음수를 리턴하면 그대로
});

console.log(foods);





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



// 나이가 어린순으로 정렬 (나이 오름차)


userList.sort((a,b)=> a.age-b.age);

console.log(userList);


// 급여가 높은순 (급여 내림차)

userList.sort((a,b)=> b.salary-a.salary);

console.log(userList);


// 이름 가나다순 (이름 오름차)

userList.sort((a,b)=> {
    if(a.userName > b.userName) return 1;
    else return -1;
});

console.log(userList);




