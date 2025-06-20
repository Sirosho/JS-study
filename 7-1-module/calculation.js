



// 계산에 관련된 변수 및 함수를 정의
/*

export function add(n1,n2){
    return n1 + n2;
}

export const sub = function (n1, n2){
    return n1 - n2;
}

export const multi = (n1, n2) => n1 * n2;*/


function add(n1,n2){
    return n1 + n2;
}

const sub = function (n1, n2){
    return n1 - n2;
}

const multi = (n1, n2) => n1 * n2;

//한번에 export 하기
// 배열이나 객체로 묶어서 export
// export const operation = {add,sub,multi};

//이름 없이 내보낼 때 사용
// export default는 모듈별로 1번만 사용가능함
export default {add,sub,multi};










