

// 양의 정수 입력받고
// 입력받은 수의 약수를 세로로 나열 후 약수의 개수도 출력

let number= +prompt(`양의 정수를 입력해주세요.`);

// 1부터 수까지를 나눠서 나머지가 없는 수들을 출력
let numberOfMeasure =0;
let measure='';
for (let i = 1; i <=number ; i++) {
    if(number % i === 0) {
        measure +=(`${i}\n`);
        numberOfMeasure++;
    }
}
alert(`${measure}\n약수의 개수: ${numberOfMeasure}`);
