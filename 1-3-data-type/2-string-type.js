
// string : 문자열
// [h, e, l, l, o] 데이터 저장방식

let myName = '100' +1;
myName = '박영희'; //JS는 String 지정시에 " ' 둘다 사용가능 다른 언어는 "만 가능

myName = `뽀로로`;// 백틱: 특수 문법이 포함됨
console.log(typeof myName);
console.log(myName);

//이렇게 작은따옴표로 감싸면 큰따옴표를 써도 문제가 안생김
//큰따옴표안에 큰따옴표로 감싸면 에러발생
let sentence = '나는 그 사람에게 "죽어" 라고 말했다.'

//let htmlTag = "<ul>\n\t<li>딸기</li>\n\t<li>바나나</li>\n</ul>";

let htmlTag = `
<ul>
<li>딸기</li>
<li>바나나</li>
</ul>
`;
//백틱을 쓰면 이렇게 띄어쓰기를 사용가능
console.log(htmlTag);


// x월 x일은 x입니다.
let month = 6;
let day = 6;
let anniversary = '현충일'

//백틱 안쓴 정석버전
//console.log(month + '월' + day +'일은'+anniversary + '입니다.');
//백틱 쓴 버전
console.log(`${month}월 ${day}일은 ${anniversary}입니다.`);














