// function createGreeter(name) {
//     // 여기를 완성하세요
// return function createGreeter () {
//     console.log(`안녕하세요, ${name}님!`);
// };
//
// }
//
// const greet = createGreeter("승현");
// greet(); // 안녕하세요, 승현님!

//
// function makeCounter() {
//     // 여기를 완성하세요
//     let count = 0;
//     return function countUP() {
//        return ++count;
//     }
// }
//
// const countUp = makeCounter();
// console.log(countUp()); // 1
// console.log(countUp()); // 2
// console.log(countUp()); // 3

function createSecretHolder(secret) {
    // getSecret()과 setSecret()을 반환해야 함
   const secret = `비밀!`;
return
    {
        function getSecret(...arg) {
            console.log(`${arg}`);
    }
        function setSecret(...arg) {

        }
    };

}

const holder = createSecretHolder("비밀!");
console.log(holder.getSecret()); // 비밀!
holder.setSecret("새로운 비밀!");
console.log(holder.getSecret()); // 새로운 비밀!


