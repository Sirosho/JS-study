const traders = [
    {
        trader: {
            name: '김철수', // traders[0].trader.name
            city: '대전',
        },
        year: 2023, // traders[0].year
        value: 500000,
    },
    {
        trader: {
            name: '박영희',
            city: '서울',
        },
        year: 2022, // traders[1].year
        value: 600000,
    },
    {
        trader: {
            name: '김철수',
            city: '대전',
        },
        year: 2022,
        value: 1200000,
    },
    {
        trader: {
            name: '박영희',
            city: '서울',
        },
        year: 2023,
        value: 650000,
    },
    {
        trader: {
            name: '뽀로로',
            city: '부산',
        },
        year: 2023,
        value: 800000,
    },
    {
        trader: {
            name: '루피',
            city: '대전',
        },
        year: 2022,
        value: 780000,
    },
    {
        trader: {
            name: '김철수',
            city: '대전',
        },
        year: 2023,
        value: 1500000,
    },
    {
        trader: {
            name: '김철수',
            city: '대전',
        },
        year: 2022,
        value: 2500000,
    },
    {
        trader: {
            name: '김철수',
            city: '대전',
        },
        year: 2022,
        value: 500000,
    },
];

const totalDaejeonMoney= traders.filter(user => user.year ===2023 && user.trader.city===`대전`)
    .map(user=>user.value).reduce((a, b) => a + b);

console.log(totalDaejeonMoney);



// 거래자 정보와 거래액을 쭉 뽑음
// 오름차순 해서 인덱스 0번 출력



const mostValueUser = [...traders]

mostValueUser.sort((a,b)=>b.value-a.value);
console.log(mostValueUser[0]);
console.log('=============================');


const cityOfValue = {};

const dae = traders.filter(user=>user.trader.city === '대전');

console.log(dae);

const total = dae.reduce((a, b) => a+b.value,0);





