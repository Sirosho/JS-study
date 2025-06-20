// 모든 태그가 그려진 이후에 발생하는 이벤트




/*
document.addEventListener('DOMContentLoaded', e => {
    const $btn = document.getElementById('btn');
    console.log('btn: ', $btn);

    const clickHandler = e => {
        alert('안뇽!');
    };

    $btn.addEventListener('click', clickHandler);
});
*/


const $btn = document.getElementById('btn');
console.log('btn: ', $btn);

const clickHandler = e => {
    alert('안뇽!');
};

$btn.addEventListener('click', clickHandler);


// import {operation} from './calculation.js';

// 객체나 배열로 묶인것을 가져올때는 이렇게 가져오고 풀어줘야함
// const {add,sub,multi} =  operation;


// default로 보낸 파일 가져오는법
// 가져오면서 이름을 지어주고 구조분해해서 사용
import xx from './calculation.js';
const {add, sub, multi} = xx;


// 이미 존재하는 이름이 있다면 충돌이 남 그럴 경우 작업중인 이름을 바꾸거나 불러오는 이름을 바꿔야함
// import {add as plus,sub,multi} from './calculation.js';
// 이렇게 뒤에 as (바꿀이름) 식으로 하면 됨
console.log(add(10,20));
console.log(sub(10,20));
console.log(multi(10,20));