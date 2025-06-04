



// return - 함수의 반환값 - 함수가 생성한 값을 함수 밖으로 가져가는 것

function add(first, second){
    // 함수 안에있는 변수들은 함수 실행이 끝난 후 메모리에서 사라짐
    let result = first + second;
    console.log(`${first}+${second} = ${result}`);
    return result;//return을 안넣으면 리턴값이 undefined로 처리됨.
}




add(10,20); // 30이라는 출력을 확인! -> 이제 이 30을 가지고 후속행동하고싶음

let x = add(10,20); // 밖에서의 변수이름은 자유롭게 적어도 된다.
let total = x *2;

console.log(total);








function multiply(n1,n2){
    console.log(`${n1}x${n2}=${n1*n2}`);

}


console.log('=============================');



// 함수가 중첩되면 안쪽괄호부터 계산됨
let r1 = add(add(add(3,1),6),add(add(7,8),10));
console.log(`r1 : ${r1}`);


console.log('=============================');
multiply(add(2,4),add(5,9));


// 리턴이 없는 함수는 변수에 저장하지도 말고, 다른 함수의 매개값으로 쓰면 안된다.
// 단독호출해서 사용할 것!

console.log('=============================');

let arr = [1,2,3,4];

let idx = arr.indexOf(3);// 마우스 올려보면 반환이 있는지 여부가 보임

console.log() // 얘는 return이 없는 함수
//return이 없는 void 함수들은 마우스를 올려보면 void 라고 뜬다.
//return이 있는것들은 기본적인 반환 데이터형식이 표시된다.


// 배열의 indexOf 를 어떻게 구현했을까?

/*function myIndexOf(array,searchElement){
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if(array[i] === searchElement) {
            index = i;
            break;
        }

    }
    return index;
}

let foods = [`떡볶이`,`우동`,`레몬`,`달고나`];

let findIndex = myIndexOf(foods,`달고나`);
console.log(findIndex);


function myIncludes(array,searchElement){
    return myIndexOf(array,searchElement)!== -1;
}

console.log('=============================');
console.log(findIndex);
console.log(myIncludes);*/





function myIndexOf(array, searchElement) {
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            index = i;
            break;
        }
    }
    return index; // return이 break보다 더 강하게 탈출의미가 있음
}

function myIncludes(array, searchElement) {
    return myIndexOf(array, searchElement) !== -1;
}


let foods = ['떡볶이', '우동', '레몬', '달고나'];
let findIndex = myIndexOf(foods, '달고나');

console.log(`index: ${findIndex}`);
console.log(`flag: ${myIncludes(foods, '우동')}`);
