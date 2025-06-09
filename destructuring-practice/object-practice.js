

// 아래 객체에서 name, age, job 프로퍼티를 구조분해 할당하시오

const user = {
    name: '승현',
    age: 30,
    job: '풀스택 개발자'
};


// const {name,age,job} = user;
({name,age,job} = user);


console.log(name,age,job);

// 아래 객체에는 nickname이 존재하지 않음
// nickname이라는 변수에 기본값 '익명'을 설정해서 구조분해 하시오

const member = {
    id: 'user123',
    email: 'user@example.com'
};


const {id,email,nickname=`익명`} = member;



console.log(id,email,nickname);

console.log(member);


console.log('=============================');

// 아래 객체에서 latitude와 longitude 값을 구조분해로 꺼내시오

const location = {
    coords: {
        latitude: 37.5665,
        longitude: 126.9780
    }
};

const {latitude,longitude} = location.coords;

console.log(latitude,longitude);


// 아래 객체의 tags 배열에서 첫 번째와 두 번째 요소를 tag1, tag2 라는 변수에 구조분해 하시오

const article = {
    title: 'ES6 구조분해 할당',
    tags: ['JavaScript', 'ES6', '프론트엔드']
};


[tag1,tag2] = article.tags;

console.log(tag1,tag2);





