const traders = [
    { trader: { name: '김철수', city: '대전' }, year: 2023, value: 500000 },
    { trader: { name: '박영희', city: '서울' }, year: 2022, value: 600000 },
    { trader: { name: '김철수', city: '대전' }, year: 2022, value: 1200000 },
    { trader: { name: '박영희', city: '서울' }, year: 2023, value: 650000 },
    { trader: { name: '뽀로로', city: '부산' }, year: 2023, value: 800000 },
    { trader: { name: '루피', city: '대전' }, year: 2022, value: 780000 },
    { trader: { name: '김철수', city: '대전' }, year: 2023, value: 1500000 },
    { trader: { name: '김철수', city: '대전' }, year: 2022, value: 2500000 },
    { trader: { name: '김철수', city: '대전' }, year: 2022, value: 500000 }
];


//
// const daejeonUser = traders.filter((user) =>user.trader.city ===`대전` && user.year === 2022)
//     .reduce((total,current) =>{
//     if(!total[current.trader.name]){
//         total[current.trader.name] = current.value;
//     }else{
//         total[current.trader.name] += current.value;
//     }
//     return total;
// },{});

console.log(traders[0]+traders[1]);









