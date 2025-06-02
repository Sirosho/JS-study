

let article1 = {
    title: '요새 재밌는 영화 추천좀...',
    content: '요즘에 재밌는 영화를 보고 싶은데 찾기가 어렵네요',
    writer: {                       //중첩객체..
        name: '잔망루피',
        account: 'loopy1234',
        joinDate: '2020-11-30',
        grade: 'GOLD',
        emailVerify: true
    },
    viewCount: 14,
    likeCount: 3,
    dislikeCount: 30,
    regDate: '2025-06-02',
    hashTags: ['질문', '취미']
};

console.log(article1[`title`]);
console.log(typeof article1);
console.log(article1.writer.grade); // 이렇게 타고타고 들어가야한다 css 같네


//객체 프로퍼티 값을 수정

console.log('=============================');


article1.title = '제목없음'; //단순하다.

console.log(article1);

article1.writer.grade = 'VIP';

console.log(article1);

article1.hashTags.splice(1,0,`ㅋㅋㅋ`);
console.log('=============================');

console.log(article1.hashTags);

console.log('=============================');

for(let n of article1.hashTags){
    console.log(n);
}

console.log('=============================');


// 프로퍼티 동적 추가

let person ={

    name:`김철수`,
    age:30
};
console.log(person);

person.name = '박영희';
console.log(person);

person.bloodType = `AB`; //객체에 없는 프로퍼티임
console.log(person); // 이렇게 추가가 됨;;
//이미 존재하는 프로퍼티는 수정이 되고 존재하지 않았던건 생성해서 넣어버림

person.bloodtype = 'O'; // 오타나도 추가됨..
console.log(person);

delete person.age; // 삭제됨
console.log(person);

// 프로퍼티 키 존재 유무 확인

console.log(`name` in person); // name 항목이 있는지 검사. 따옴표로 안감싸면 작동 안함 boolean으로 출력된다.





//객체의 중첩구조
//예시 : 게시판
let articles = {
    totalCount: 25578, //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [
        // 게시물 목록
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀', //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07', //작성일자
        },
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로', //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06', //작성일자
        },
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자', //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05', //작성일자
        },
    ],
};




console.log('=============================');

console.log(articles.articleList[0]);

// [10, 20, 30]
// [`a`, `b`, `c`]
// [ [], [], []  ]
// [ {}, {} ,{} ]
// [false, true, true] 이렇게 뭐든 집어넣을수 있다.
// 배열에 객체를 넣는 경우는 이름을 지어주지않고 배열의 인덱스로 그 객체에 접근할수있다.

console.log(articles.articleList[0].title);

articles.articleList[1].recomm++;

console.log('=============================');

// 모든 게시물 데이터에서 작성자 이름과 글 제목을 조합한 새 객체를 뽑아라
for (let baek of articles.articleList) {
    let newObj = {
        writer: baek.writer,
        title: baek.title
    };
    console.log(newObj);
}




