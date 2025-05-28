
//90점 이상 a
//80점이상 b
//70 c
//60 d
//나머지 f
let score = prompt('점수를 입력하세요');

if(+score >= 90) {
    alert('A 입니다.');
}else if(+score>=80){
    alert('B 입니다.');
}else if(+score>=70){
    alert('C 입니다.');
}else if(+score>=60){
    alert('D 입니다.');
}else{
    alert('F 입니다.');
}


