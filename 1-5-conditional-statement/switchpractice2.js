


let weather = `밝음`

switch(weather) {
    case `맑음`:case `밝음`:
        console.log(`선글라스를 챙기세요!`);
        break;
    case `비`:
        console.log(`우산을 챙기세요!`);
        break;
    case `눈`:
        console.log(`따뜻하게 입으세요!`);
        break;
    default:
        console.log(`날씨 정보를 알 수가 없어요!`);
}