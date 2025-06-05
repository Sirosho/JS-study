const userList = [
    {
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbys: ['수영', '축구', '테니스'],
        salary: 5400000,
        age: 35,
    },
    {
        account: 'banana',
        userName: '빠나나',
        job: '과일',
        address: '서울',
        hobbys: ['푸드파이팅', '테니스'],
        salary: 9700000,
        age: 18,
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbys: ['족구', '축구', '테니스', '영화감상'],
        salary: 3900000,
        age: 56,
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbys: ['독서', '테니스'],
        salary: 1900000,
        age: 42,
    },
];


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


function map(userArray,callback){
    const mappedArray = [];
    for (const user of userArray) {
        mappedArray.push(callback(user)); //user.job
    }
    return mappedArray;
}


// const x=map(userList,user => user.hobbys.length===2);

let filtered = filter(userList, user => user.hobbys.length === 2);
let results = map(filtered, user => user.job);

console.log(filtered);






