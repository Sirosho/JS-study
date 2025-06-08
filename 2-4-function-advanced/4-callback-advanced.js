
const userList = [
    {
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbies: ['수영', '축구', '테니스'],
    },
    {
        account: 'banana',
        userName: '빠나나왕',
        job: '과일',
        address: '서울',
        hobbies: ['푸드파이팅', '테니스'],
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbies: ['족구', '축구', '테니스', '영화감상'],
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbies: ['독서', '테니스'],
    },
];


// 회원목록에서 취미가 딱 2개인 사람들만 추려서
// 새 배열에 다시 담아서 리턴하는 함수를 정의해주세요.

function filterByHas2Hobbies(hobbycount){
    const newUserList= [];
    for (const user of userList) {
        if (user.hobbies.length === hobbycount) {
            newUserList.push(user);
        }
    }
    return newUserList;
}


// 회원목록에서 서울에 거주하는 사람들만 새 배열에 담아 리턴해줘
function filterByUserLiveInRegion(region){
    //새 배열 생성
    const filteredArray = [];
    for (const user of userList) {
        if(user.address === region) {
            filteredArray.push(user);
        }
    }
    return filteredArray;
}
// 회원목록에서 특정 조건을 만족하는 회원들을 필터링해주는 함수

function filterUser(callback){
    const filteredArray = [];
    for (const user of userList) {
        if(callback(user)){ // callback의 파라미터에 밖으로 보낼 정보를 입력해줘야 밖에서 사용가능
            filteredArray.push(user);
        }
    }
    return filteredArray;
}









const newArray1 = filterByHas2Hobbies(4);

//iter 로 편하게 만들수 있음

console.log(newArray1);

// 값은 파라미터로 조정 가능하나 수식은 파라미터로 조정이 불가능함
// 객체 안에 있는 배열을 가진 프로퍼티를 검사하고 불러오는 작업 다시 해보기


console.log('=============================');

const newArray2 = filterByUserLiveInRegion(`경기`);
console.log(newArray2);


console.log('=============================');


// 콜백을 활용한 필터링 예시
// 함수 밖에서 함수 안에 return 값을 주는 방식으로 함수를 사용하는것
//return true; 하면 callback() = true 로 대입됨

// const filter1 = filterUser(function(user){
//     return user.hobbies.length === 2; // user 의 정보는 filterUser 안에 있으므로 filteruser 안에서 callback 에 user 파라미터를 할당해줘야함
// });
// console.log(filter1);



// const filter1 = filterUser(user => user.hobbies.length === 2;
// console.log(filter1);


// 취미중에 테니스가 있는 회원들만 필터링

const filter2 = filterUser(user=> user.hobbies.includes(`축구`));
console.log(filter2);



// 이렇게 모든 배열을 모든 조건을 정해서 필터링 할수있음
function filter(array,callback){
    const filteredArray = [];
    for (const a of array) {
        if(callback(a)){ // callback의 파라미터에 밖으로 보낼 정보를 입력해줘야 밖에서 사용가능
            filteredArray.push(a);
        }
    }
    return filteredArray;
}



const filter4 = filter(userList,user=> user.address ===`경기` );




const numbers = [1,2,3,4,5,6,7,8,9,10];

const filter5 = filter(numbers,n =>n%2===1);
console.log(filter5);


const names = [`홍길동`,`김철수`,`김뽀삐`,`이뚜뚜`,`홍뽀로로`,`박짜짜`];

// names에서 김씨들만 뽑아서 새 배열에 담아줘

const filter6 = filter(names,name=>name.includes(`수`));

console.log(filter6);