let userInfo = {
    userList: [
        {
            account: 'kim1234',
            password: 'kkk1234',
            username: '김두한',
        },
        {
            account: 'park9876',
            password: 'ppp9999',
            username: '박찬호',
        },
        {
            account: 'hong7766',
            password: 'hhh1234',
            username: '홍길동',
        },

    ],
};


let idx = [];
let n = 0; // idx 배열의 인덱스

for (let i = 0; i < userInfo.userList.length; i++) { // 기존에 저장된 계정정보를 idx 배열에 로드하여 최종 인덱스를 n에 저장

    idx.push(userInfo.userList[i].account);
    n++;
}
console.log(idx)

let userData = userInfo.userList;
let inputId;
let inputPassword;
let accountIndex;
let inputUsername;
let count = 0;

let agree = 0
if (agree === 0) {
    while (true) {
        inputId = `pack8448`;
        inputPassword = `승현11`;
        inputUsername = `백승현`;

        userInfo.userList.push({
            account: inputId,
            password: inputPassword,
            username: inputUsername
        });
        console.log(`회원가입이 완료되었습니다. id:${inputId}`);
        count++; // 회원가입시 계정 리스트에 추가를 발동시키기 위한 변수
        break;
    }

} else {
    console.log(`첫 페이지로 돌아갑니다.`);
}
if (count > 0) {// 회원가입을 하면 추가된 id를 idx 배열에 추가, 가입안하면 작동x
    n++;
    idx.push(userData[userData.length-1].account);
    count = 0;
}
console.log('=============================');
console.log(idx);












