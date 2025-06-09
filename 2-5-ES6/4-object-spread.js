
const person = {
    name: '홍길동',
    age: 30
};

// const copyPerson = {person};// 그냥 선언 방식이라 나이가 40으로 나옴
const copyPerson = {...person}; //스프레드 방식이라 나이가 30으로 나옴

person.age = 40;
person.occupation = `개발자`;

console.log('person',person);
console.log(`copyperson`,copyPerson);


const newPerson={

    ...person,         //이런식으로 가져올수도 있음
    hobbies: [`산책`,`풋살`],
    age:20 // 이렇게 가져온 정보 수정도 가능 순서가 나중에 적힌대로 반영된다.
};

console.log(newPerson);