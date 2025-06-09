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

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요
// [{name,city},{name,city}...]

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.


// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.


// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.


const arrayUser1 = traders.filter(user =>user.year ===2022)
    .map(user => ({
    name: user.trader.name,
    city: user.trader.city
    }));

console.log(arrayUser1);


let mappedCity = traders.map(user =>user.trader.city);


console.log(mappedCity);

const daeJeon=traders.filter(user =>user.trader.city ===`대전`).map(user =>user.trader);

console.log(daeJeon);


// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
/*
let total = 0;
traders
  .filter(trs => trs.trader.city === '서울')
  .forEach(trs => total += trs.value)
;
console.log(`총액: ${total}`);
*/

// let total = 0;
// for (const trs of traders) {
//     if (trs.trader.city === '서울') {
//         total += trs.value;
//     }
// }
// console.log(`총액: ${total}`);
