/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아
2. bmi지수를 계산하여 반환함과 동시에
3. bmi가 25.0이상이면 "당신은 과체중입니다."
  18.5이하면 "당신은 저체중입니다."
  나머지는 "당신은 정상체중입니다."를 출력하는
  CalcBMI라는 함수를 정의하고 호출하세요.
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m))
# 출력 예시:
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"

Math.round(5.78999); // 반올림 -> 6
*/
/**
 * bmi값을 전달받아 현재 체중상태를 출력하는 함수
 */

function judgeBMI(bmi) {

    if(bmi>=25.0){
        console.log(`당신은 과체중입니다.`);
    }else if(bmi<=18.5){
        console.log(`당신은 저체중입니다.`);
    }else{
        console.log(`정상체중입니다.`);
    }
}

function convertCMtoMeter(key) {

    return  (key/100 * key/100);
}




//슬래시 ** 하면 이렇게 양식이 나옴
/**
 *
 * @param key -신장
 * @param mom - 몸무게
 * @returns bmi - 계산된 실수형 bmi지수
 */

function calcBMI(key,mom){
    let bmi = mom / convertCMtoMeter(key); // cm를 meter로 변환하는 함수

   judgeBMI(bmi);// 아래에 기능을 이렇게 함수로 축약
   /* if(bmi>=25.0){
        console.log(`당신은 과체중입니다.`);
    }else if(bmi<=18.5){
        console.log(`당신은 저체중입니다.`);
    }else{
        console.log(`정상체중입니다.`);
    }*/
    return bmi;
}
// 함수의 역할은 위 처럼 복잡하지 않게 단순화하는게 좋다




                // 이렇게 여기서 디폴트값을 정해둘수 있음.
                // 이러면 앞자리만 입력을 해도 디폴트가 발동됨
                // 이렇게 안해두면 뒷자리 입력안하면 NaN 반환
function round(num,dot=0){
    let calNum;
    let numScale = 10**dot;

    calNum = Math.floor(num * numScale) / numScale;
    return calNum;
}
//Math.round() // 로 반올림된 n번째 자리로 할수있음.
//Math.floor() // 로 하면 반올림 안된채로 됨
//targetNumber.toFixed(n) 이라는 자릿수 끊기 함수가 있음


let h = 178.4,
    w = 78.2;
let myBmi = calcBMI(h, w);

console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi,2)}입니다.`);