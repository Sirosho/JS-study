let height = prompt('당신의 키는?')

//키가 140이상이고 나이가 7살 이상일 경우 놀이기구 탑승가능 여부를 출력

// if (+height >= 140 && +age >= 7) {
//     alert('놀이기구에 탑승할 수 있습니다.');
// } else {
//     alert('놀이기구에 탑승할 수 없습니다.');
// }


if(height>=140){
    let age = prompt('당신의 나이는?');
    if(+age >=7){
        alert('놀이기구에 탑승할 수 있습니다. 즐거운 시간되세요!')
    }else{
        alert('나이제한 때문에 탑승하실 수 없습니다.');
    }
} else {
    alert('신장제한 때문에 탑승하실 수 없습니다.');
}









