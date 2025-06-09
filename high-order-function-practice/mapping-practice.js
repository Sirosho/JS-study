// // 주어진 이름 배열에 map을 사용해서
// // 각 이름 뒤에 '님'을 붙인 새 배열을 만들어라
//
// const names = ['승현', '철수', '영희'];
//
// // 결과: ['승현님', '철수님', '영희님']
//
//
// const newNames= names.map(name=>`${name}님`);
//
// console.log(newNames);

// 아래 학생 점수 배열을 map으로 돌려서
// 각 학생의 이름과 등급을 포함한 새 객체 배열로 변환하라
//
// const students = [
//     { name: '승현', score: 95 },
//     { name: '철수', score: 62 },
//     { name: '영희', score: 78 }
// ];
//
// // 조건: 90점 이상 A, 80~89 B, 70~79 C, 그 외 D
// // 결과: [{ name: '승현', grade: 'A' }, ... ]
//
//
//
// const score = students.map(student =>{
//     let grade = `D`
// if(student.score >= 90){ grade = `A` }
// else if(student.score <= 89 && student.score>=80){ grade = `B` }
// else if(student.score <= 79 && student.score>=70){  grade = `C` }
// else{grade = `D` }
// return {
//     name: student.name,
//     score: grade,
// }
// });
//
//
// console.log(score);


// 아래 user 객체를 Object.entries로 변환한 뒤,
// map으로 key와 value를 다음과 같은 문자열 배열로 변환하라

const user = {
    name: '승현',
    age: 30,
    job: '개발자'
};

// 결과: ['name: 승현', 'age: 30', 'job: 개발자']


console.log(Object.entries(user));













