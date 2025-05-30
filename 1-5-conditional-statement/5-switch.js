let weekDay = `Monday`;

//
// if (weekDay === '월요일') {
//     console.log(`새로운 한 주가 시작되었습니다.`);
// }else if(weekDay === '수요일') {
//     console.log(`주중의 절반을 넘었습니다. 조금만 더 파이팅`);
// }else if(weekDay === '금요일') {
//     console.log(`주말이 코앞입니다. 신나는 하루 되세요!`);
// }

//case를 확인하여 해당사항 이전은 점프하고 시작한다
//break를 안하면 계속 아래것들이 실행되면서 내려간다
//switch case 문에서 else 는 default 이다.
switch (weekDay) {
    // case myName: case에는 변수말고 상수만 사용
        
    case`월요일` :case 'Monday':  //이런식으로 다른명칭의 같은조건을 나란히 놓아도 된다
        console.log(`새로운 한 주가 시작되었습니다`);
        break;
    case`화요일`:
        console.log(`화이팅 오늘도 좋은 하루!`);
        break;
    case`수요일`:
        console.log(`주중의 절반을 넘었어요!`);
        break;
    case`목요일`:
        console.log(`거의 주말이 다 왔네요`);
        break;
    case`금요일`:
        console.log(`주말이 코앞이에요!`);
        break;
   default:
       console.log(`푹 쉬세요!!`);

}













