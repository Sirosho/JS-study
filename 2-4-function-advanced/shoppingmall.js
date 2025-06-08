const productList = [
    {
        id: 1,
        name: "무선 이어폰",
        category: "전자기기",
        price: 129000,
        stock: 20,
        rating: 4.5,
        tags: ["인기", "할인", "추천"],
    },
    {
        id: 2,
        name: "프리미엄 커피",
        category: "식품",
        price: 18000,
        stock: 0,
        rating: 4.8,
        tags: ["신상품", "한정"],
    },
    {
        id: 3,
        name: "게이밍 마우스",
        category: "전자기기",
        price: 59000,
        stock: 8,
        rating: 4.2,
        tags: ["할인"],
    },
    {
        id: 4,
        name: "헬스용 닭가슴살",
        category: "식품",
        price: 32000,
        stock: 15,
        rating: 4.7,
        tags: ["인기"],
    },
    {
        id: 5,
        name: "노트북 받침대",
        category: "생활용품",
        price: 22000,
        stock: 3,
        rating: 4.1,
        tags: [],
    },
];

function filter(userArray,callback){
    const filteredArray = [];
    for (const user of userArray) {
         if (callback(user)) {
          filteredArray.push(user);
         }
    }
    return filteredArray;
}

function map(userArray,callback){
    const mappedArray = [];
    for (const user of userArray) {
        mappedArray.push(callback(user));
    }
    return mappedArray;
}

const result = filter(productList ,user=>user.stock ===0);

const result2 = map(result,user=>user.name);

console.log(result2);


console.log('=============================');


const result3 = filter(productList,user=>user.category==='전자기기' && user.price >=50000);

const result4 = map(result3,function (user){
    return {name: user.name, price: user.price}
});

console.log(result4)

const result5 = filter(productList,user=>user.tags.includes("할인"));
const result6 = map(result5,function (user){return {NAME: user.name}});
console.log(result6);










