

const student = {
    stuName : `뽀로로`,
    age : 5,
    birthDay : `2020-01-01`,
    a:{
        b:{
            c: `d`,
            d: `dd`
        }
    }
};
console.log(`학생의 이름은 ${student.stuName}이고, 나이는 ${student.age}살이고, 생일은 ${student.birthDay} 입니다.`);
//기존의 방식
// 하지만 위에 처럼 객체의 구조가 더럽게 복잡해진다면 어떻게 할까


        // 여기서는 배열처럼 이름을 막 지으면 안된다. 프로퍼티이름을 정확하게 입력
const {stuName,age,birthDay} = student;

console.log(`학생의 이름은 ${stuName}이고, 나이는 ${age}살이고, 생일은 ${birthDay} 입니다.`);

// 이 경우 만약 stuName 이라는 이름의 변수를 사용하고 있었다면 에러가 발생한다.

      // 그렇다면 이런식으로 가져올때 이름변경이 가능
// const {stuName: name,age,birthDay} = student;


const divStyle = {
    'font-size': '16px',
    'border-radius': '50%'
};
// console.log(divStyle['font-size']);

const { 'font-size':fontSize, 'border-radius':radius } = divStyle;
console.log(fontSize);
console.log(radius);

console.log('===================');

const myPetInfo = ({name, age}) => {

    // const { name, age } = myPet;

    console.log(`우리 애완동물의 이름은 ${name}입니다.`);
    console.log(`우리 애완동물의 나이는 ${age}살입니다.`);
};

const cat = {
    name: '나비',
    age: 7,
    kind: '러시안블루',
    injection: true
};

myPetInfo({
    name: '초코',
    age: 3
});

const {kind, injection,...basicInfo} = cat;

console.log(basicInfo);
console.log(kind);
console.log(injection);