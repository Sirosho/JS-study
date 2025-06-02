

//              length: 배열에 저장된 데이터 수 - 6
//              index:   0   1   2   3   4   5
let numbers = [10, 20, 30, 40, 50, 60];

//배열 변수의 네이밍은 복수형, 혹은 ~list 식으로 명시해주는 것이 관례이다.

// JS 특 배열도 객체로 구분 한다. 다른 언어에서는 그렇지 않음.
console.log(typeof numbers); // object
console.log(numbers); // [10, 20, 30, 40, 50, 60]

// 배열을 참조 - 배열의 데이터 하나하나에 접근
console.log('=============================');


console.log(numbers[1]); // 20
console.log(numbers[2] * 10);// 연산도 진행가능
console.log(numbers[0] + numbers[1]); // 배열 요소끼리의 연산도 가능

// 배열 요소 수정
console.log('=============================');
numbers[0] = 999; // 인덱스 0번의 값을 수정
console.log(numbers); //[ 999, 20, 30, 40, 50, 60 ]
numbers[2]++; //이것도 가능

// 배열의 길이 체크
console.log(numbers.length);

// 인덱스 범위 : 0~ n-1 n = length
// 배열의 마지막 데이터 접근

const N = numbers.length;
console.log(numbers[numbers.length - 1]); // 이런식으로 가능. 안되는게 없다.
console.log(numbers[N - 1]); // 이렇게 변수로 바꿔서도 가능

//배열의 순회 : 전체 데이터에 일일히 모두 접근

console.log('=============================');


// 전통적인 반복문 순회법
                            //이래서 이상 이하를 안쓰는게 편한것
for (let i = 0; i < numbers.length; i++) {

    console.log(` ${i+1} 번째 요소 :${numbers[i]}`);
}


// 배열 전용 반복문 for ~ of
console.log('=============================');
// numbers 에서 값을 하나 꺼내서 n에 대입 인덱스 0번부터 뒤에 데이터가 없을때까지 쭉 반복
// 홀수라던가 그런식의 인덱스를 골라서 뽑아오는건 이 방법으로는 불가능
for(let n of numbers) {
    console.log(` n:${n}`);

}


console.log(typeof(numbers[0]));



















