


let currentIndex = 0;

let length = 4;


// for (let i = 0; i < 20; i++) {
//     console.log(currentIndex);
//     currentIndex = (currentIndex +1) % length;
//
// }

for (let i = 0; i < 20; i++) {
    console.log(currentIndex);
    currentIndex = ((currentIndex -1) + length) % length;

}