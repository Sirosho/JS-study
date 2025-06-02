

let idol = [`유노윤호`, `최강창민`, `영웅재중`, `믹키유천`, `시아준수`];
let member;
let idx;
while (true) {
    member = prompt(`${idol} 삭제할 멤버 이름을 입력해주세요. 전체를 삭제할때까지 반복합니다.`)
    if (idol.indexOf(member) !== -1) {
        idx = idol.indexOf(member);
        idol.splice(idx, 1);
    } else if (idol.indexOf(member) === -1) {
        alert(`${member} 는 잘못된 이름입니다. 다시 입력하세요`)
        continue;
    }
    if (idol.length === 0) {
        alert('동방신기 끝!');
        break;
    }
    alert(`남은 멤버 : ${idol}`);
}