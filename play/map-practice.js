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


/*

{
    trader: {
        name: '김철수', // traders[0].trader.name
            city: '대전',
    },
    year: 2023, // traders[0].year
        value: 500000,
}*/

const daejeonUser = traders.map((user) => {
    if(user.trader.city ===`대전`)return user.trader.name;


});


console.log(daejeonUser);

















