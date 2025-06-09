

// user 객체를 newUser라는 새 객체에 스프레드를 사용해 얕은 복사하시오

// const user = {
//     name: '승현',
//     age: 30
// };
//
// newuser ={...user};
//
// console.log(newuser);

// user 객체를 복사하면서 age만 31로 덮어쓴 새 객체 updatedUser를 만드시오

// const user = {
//     name: '승현',
//     age: 30
// };
//
//
// let updatedUser = {...user,age:31};
//
// console.log(updatedUser);

console.log('=============================');




// 아래 user와 settings 객체를 병합해서 profile 객체를 만들어라.
// 단, user 안에 있는 settings는 무시하고,
// 바깥쪽 settings 객체의 darkMode 값이 최종 적용되도록 해야 한다.
//
// const user = {
//     name: '승현',
//     settings: {
//         darkMode: false,
//         language: 'ko'
//     }
// };
//
// const settings = {
//     darkMode: true
// };
//
// // ❗주의: 단순히 스프레드하면 내부 settings 객체는 안 덮어짐!
//
//
//
// const profile = {
//     ...user,
//     settings: {
//         ...user.settings,
//         ...settings
//     }
// };
//
// console.log(profile);



// 아래와 같은 user 객체가 있을 때,
// user 객체를 수정하지 않고,
// settings.theme 값만 'dark'로 바꾼 새 객체 newUser를 만들어라.
//
// const user = {
//     name: '승현',
//     settings: {
//         theme: 'light',
//         lang: 'ko'
//     }
// };
//
// // ❗ 조건:
// // 1. user는 절대 바꾸면 안 됨 (불변성 유지)
// // 2. settings.lang은 그대로 유지
// // 3. settings.theme만 'dark'로 바뀌어야 함
//
// // ✅ 힌트: 스프레드를 중첩해서 2단계로 써야 해
//
//
//
// const newUser = {...user,
// settings:{
//     ...user.settings,
//     theme: 'dark'
// }};
//
// console.log(newUser);







// 다음과 같은 user 객체와 key/value 변수가 주어졌을 때,
// key에 해당하는 속성만 새 값으로 덮어쓴 새 객체 updatedUser를 만들어라.

const user = {
    name: '승현',
    age: 30,
    job: '개발자'
};

const key = 'job';
const value = '프론트엔드 개발자';






const updatedUser = {...user,[key]:value};
console.log(updatedUser);







