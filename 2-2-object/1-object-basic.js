// 우리 집 강아지 2마리 - 초코, 해피

let dogName1 = '초코';
let dogName2 = '해피';
let dogAge1 = 3;
let puppyAge2 = 5;
let tall1 = 30;
let height2 = 45;
let inject = false;
let inject2 = true;

// 객체
// 이렇게 배열과 다르게 데이터를 명시하여 저장할 수 있다.
let myDog1 = {
    name: `초코`,
    age: 3,
    tall: 30,
    injection: false,
    vegetarian: true,
    favorites: [`산책`, `간식`]
};

// 객체 프로퍼티 참조법

console.log(myDog1.name);

console.log(typeof myDog1); //object
console.log(typeof myDog1.name); //string
console.log(typeof myDog1.injection); //boolean
console.log(typeof myDog1.favorites[1]); // string
console.log(typeof myDog1.favorites); // object


console.log('=============================');

// 프로퍼티 참조법 2


console.log(myDog1[`name`]); // 이것도 가능
console.log(myDog1.name); // 이건 맞음

let height = `tall`;

console.log(myDog1[height]);// 이건 또 됨;; height에 `tall`이 대입되서 console.log(myDog1[`tall`]); 로 됨...
// 변수값으로 제어하려고 이렇게 만듦..

console.log(myDog1.`name`); //이건 틀림
console.log(myDog1[age]); // 이건 틀리다. ''를 꼭 사용해야함



let myCat = {
    name: `나비`,
    age: 4,
    'hobby': '시비걸기', // 이렇게해도 된다..
    'font-size' : 160 //그냥 font-size로 하면 사용이 불가능한 특수경우이다.
                        // 이럴때 따옴표로 감싸서 사용하면 적용가능하다.
};

console.log(myCat.hobby);
console.log(myCat['font-size']);





