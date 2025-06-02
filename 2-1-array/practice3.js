

let idol = [`유노윤호`,`최강창민`,`영웅재중`,`믹키유천`,`시아준수`];
let target;
let newName;
let idx;
while(true) {
    target = prompt(`${idol} \n수정 할 대상을 선택하세요.`);
    if (idol.includes(target)) {
        newName = prompt(`새로운 이름을 입력하세요.`);
        idx = idol.indexOf(target);
        idol.splice(idx,1,`${newName}` );
        break;
    }else{
        alert(`${target} 은 올바른 이름이 아닙니다. 목록에 존재하는 이름을 선택해주세요.`);
    }
}
alert(`수정되었습니다.\n ${idol}`);
