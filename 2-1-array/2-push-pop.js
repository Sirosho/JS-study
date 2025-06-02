

let petList = [`멍멍이`, `야옹이`, `짹짹이`];

console.log(petList);

// push() : 배열 맨 끝에 데이터 추가하는 함수

petList.push(`거부긔`);
petList.push( `어흥이`,`비둘기`,`닭다리`); // 여러개 추가도 가능

console.log(petList);
console.log(petList.length); // 4

// pop() : 배열 맨 끝에 데이터를 삭제

petList.pop(); // 괄호는 비워놓음
petList.pop(); // 괄호는 비워놓음
petList.pop(); // 괄호는 비워놓음
petList.pop(); // 괄호는 비워놓음

console.log(petList);

let x = petList.pop(); // 배열에서 제거하면서 변수 x에 저장
console.log(petList);
console.log(`x: ${x}`)



// shift() : 배열의 맨 첫번째 데이터 삭제
// unshift() : 배열의 맨 첫번째 위치에 데이터 추가

petList.unshift(`뻘뻘이`);
console.log(petList);


petList.unshift(`봉봉이`);

console.log('=============================');

console.log(petList);





















