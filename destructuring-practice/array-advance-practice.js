// 다음은 학생별 점수가 담긴 배열이다.
// 2번째 학생의 영어 점수인 82를 english 변수에 구조분해 할당으로 꺼내시오.

const studentScores = [
    ['철수', 90, 80], // 이름, 국어, 영어
    ['영희', 85, 82],
    ['민수', 78, 74]
];

[ , , english] = studentScores[1];

console.log(english);
// 아래 배열에서 첫 번째, 네 번째, 여섯 번째 요소만 꺼내서
// one, four, six 이라는 변수에 할당하시오.

const mixed = [10, 20, 30, 40, 50, 60];

[one, , ,four, ,six] = mixed;

console.log(one,four,six);

// 아래 배열에서 첫 번째 상품만 firstProduct에,
// 나머지 상품은 otherProducts 배열에 담으시오.

const products = ['맥북', '아이패드', '아이폰', '에어팟'];


[firstProduct,...otherProducts] = products;

console.log(firstProduct,otherProducts);

// 아래 배열에서 두 번째 요소가 없을 수도 있다.
// 구조분해 할당할 때 second 변수에 기본값 '없음'을 설정하시오.

const values = ['값1'];


[first,second=`없음`] = values

console.log(first,second);

// 아래 함수는 배열을 반환한다.
// 구조분해 할당을 사용하여 첫 번째, 세 번째 값을 각각 first, third 변수에 담으시오.

function getData() {
    return ['a', 'b', 'c', 'd'];
}

let data= getData();

[firststr,,thirdstr,] = data

console.log(firststr,thirdstr);














