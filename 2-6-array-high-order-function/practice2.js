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

const totalDaejeonMoney = traders.filter(user => user.year === 2023 && user.trader.city === `대전`)
    .map(user => user.value).reduce((a, b) => a + b);

console.log(totalDaejeonMoney);


// 거래자 정보와 거래액을 쭉 뽑음
// 오름차순 해서 인덱스 0번 출력


const mostValueUser = [...traders]

mostValueUser.sort((a, b) => b.value - a.value);
console.log(mostValueUser[0]);
console.log('=============================');


// 우선 지역 : 거래액 순으로 다 뽑아보자.


let cityAndValue = traders.map(user => {
    return {
        city: user.trader.city,
        value: user.value
    };
});

console.log(cityAndValue);

const filteredSeoul = cityAndValue.filter(user => user.city === '서울');

const seoulValue = {
    [filteredSeoul[1].city]: filteredSeoul[0].value + filteredSeoul[1].value
};


console.log(seoulValue);





// ===================================================================================



// 결과 그룹핑 객체
/*

3번문제 해설

const totalByCity = {};

for (const trs of traders) {
  const city = trs.trader.city;

  // 처음 등장한 도시인가?
  if (totalByCity[city] === undefined) {
    // 도시를 key로 거래액을 value로 새 프로퍼티 추가
    totalByCity[city] = trs.value;
  } else { // 이미 한번 이상 저장된 도시
    totalByCity[city] += trs.value;
  }
}

console.log(totalByCity);
*/

/*const totalByCity = traders.reduce((cityObj, trs) => {
  const city = trs.trader.city;
  if (cityObj[city] === undefined) {
    cityObj[city] = trs.value;
  } else {
    cityObj[city] += trs.value;
  }
  return cityObj;
}, {});*/
/*

const totalByCity = traders.reduce((cityObj, trs) => {
    const city = trs.trader.city;
    cityObj[city] = (cityObj[city] || 0) + trs.value;
    return cityObj;
}, {});

console.log(totalByCity);
*/












