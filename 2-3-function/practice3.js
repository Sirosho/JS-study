//result에는 56이 리턴되어야 함.

function min2(...num) {

    let min = num[0];
    for (let number of num) {
        if (min < number) {

        } else {
            min = number;
        }

    }
    return min;
}


let result1 = min2(134, 56, 60);
console.log(`result1: ${result1}`);


// 셋중에 가장 작은 수 50이 result에 저장되어야 함.

/*function min3(num1, num2, num3) {
    let minimum = min2(num1, num2);
    minimum = min2(num3, num2);
    return minimum;
}*/


let result2 = min2(120, 50, 99);
console.log(`result2: ${result2}`);


// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true리턴, 홀수를 전달하면 false리턴,
// 단, 0은 짝수취급


function isEven(...num) {

    if (num % 2 === 0 && num !== 0) {
        return true;
    } else if (num % 2 !== 0) {
        return false;
    } else {
        return false;
    }

}


let result3 = isEven(24);
console.log(`result3: ${result3}`);

function min(...num){
    let even = [];
    let mini;
    for (let number of num) {
        if (isEven(number)) {
            even.push(number);
        }
    }
    mini = min2(...even); //어쩌다보니 됐는데 이건 아직 안배움.. 배열앞에...을 찍으면 배열이 해체됨
    return mini;
}




// result4에는 -1000이 저장되어야 함.
let result4 = min(9, 76, -90, -1000, 555, 780, -7777);
console.log(`result4: ${result4}`);


/*

let minimum;
if (num1 > num2) {
    if (num2 < num3) {
        minimum = num2;
    }else{
        minimum = num3;
    }
}else{
    if(num1 < num3) {
        minimum = num1;
    }else{
        minimum = num3;
    }
}
return minimum;*/
