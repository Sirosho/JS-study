/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다.
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.

- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.

- 객체의 프로퍼티가 있는지 여부 확인하는 문법은 검색해보세요.

*/

let userInfo = {
    userList: [
        {
            account: 'kim1234',
            password: 'kkk1234',
            username: '김두한',
            blockCount: 5
        },
        {
            account: 'park9876',
            password: 'ppp9999',
            username: '박찬호',
            blockCount: 5
        },
        {
            account: 'hong7766',
            password: 'hhh1234',
            username: '홍길동',
            blockCount: 5
        },

    ],
};

let inputId;
let inputPassword;
let accountIndex;
let inputUsername;
let count = 0;
let userData = userInfo.userList
let blockId = [];

let idx = [];

for (let i = 0; i < userData.length; i++) { // 기존에 저장된 계정정보를 idx 배열에 로드하여 최종 인덱스를 n에 저장

    idx.push(userData[i].account);
}

while (true) {

    if (count > 0) {// 회원가입을 하면 추가된 id를 idx 배열에 추가, 가입안하면 작동x
        idx.push(userData[userData.length - 1].account);
        count = 0;
    }
    inputId = prompt(`아이디를 입력해주세요 0을 입력하면 종료합니다.`);

    if (idx.includes(inputId) && userData[idx.indexOf(inputId)].blockCount > 0){
        accountIndex = idx.indexOf(inputId)
        while (true) { //아이디는 일치 비밀번호 확인시작
            inputPassword = prompt(`비밀번호를 입력해주세요`);
            if (inputPassword === userData[accountIndex].password) {
                alert(`${userData[accountIndex].username} 님 안녕하세요! `);
                userData[accountIndex].blockCount = 5; // 비밀번호 오류 카운트 초기화
                break;
            } else if (userData[accountIndex].blockCount > 0) {

                alert(`비밀번호가 틀렸습니다. 다시 입력해주세요 \n 지금부터 5회이상 틀리면 아이디가 잠금상태가 됩니다.\n남은횟수: ${userData[accountIndex].blockCount}`);
                userData[accountIndex].blockCount--; //남은횟수 감소
            } else if (userData[accountIndex].blockCount === 0) {
                alert(`비밀번호를 5회 이상 틀리셨습니다. 아이디가 잠금설정됩니다.`);
                blockId.push(userData[accountIndex].account);
                break;

            }
        }
    }else if(inputId === `0`){
        break;    //프로그램 종료문
    } else if (blockId.includes(inputId)) {//잠긴 아이디 일 때
        alert(`해당 계정은 비밀번호 5회 이상 오류로 인해 잠금 처리되었습니다.`)
    } else {
        let agree = prompt('존재하지 않는 아이디입니다. 회원가입하시려면 예 를 입력해주세요.\n 다른걸 입력하거나 취소를 누르면 로그인 화면으로 돌아갑니다.');
        if (agree === `예`) {
            while (true) {
                inputId = prompt(`새로운 아이디를 입력해주세요`);
                if (idx.includes(inputId)) {// 중복 아이디 검사
                    alert(`${inputId} 는 이미 존재하는 아이디 입니다. 다른 아이디를 입력해주세요`);
                    continue;
                } else {
                    inputPassword = prompt(`비밀번호를 입력해주세요.`);
                    inputUsername = prompt(`이름을 입력해주세요.`);

                    userData.push({
                        account: inputId,
                        password: inputPassword,
                        username: inputUsername,
                        blockCount: 5
                    });
                    alert(`회원가입이 완료되었습니다. id:${inputId}`);
                    count++; // 회원가입시 계정 리스트에 추가를 발동시키기 위한 변수
                }
                break;
            }
        } else {
            alert(`로그인 화면으로 돌아갑니다.`)
        }
    }
}











