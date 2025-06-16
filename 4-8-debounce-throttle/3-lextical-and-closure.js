

// 클로저를 통해 값을 1씩 늘려주는 함수를 반환하는 함수를 만든다.

function increaseClosure(){
    let count = 0; //지역 변수

    function increaseCount(){
        return ++count;
    }

    function decreaseClosure(){
        return --count;

    }

    return {increaseCount,decreaseCount}
}

// 취미 개수를 세는 함수 정의(x) -> 클로저에게 받아옴

const {increaseCount,decreaseCount} = increaseClosure();





const increaseHobbyCount = increaseCount;

const increaseFriendCount = increaseCount;

const increaseCartCount = increaseCount;
console.log('============취미 카운팅 시작!=================');
console.log(increaseHobbyCount());
console.log(increaseHobbyCount());
console.log('============취미 카운팅 시작!=================');
console.log(increaseFriendCount());
console.log(increaseFriendCount());
console.log('=============카트 카운팅 시작!================');
console.log(increaseCartCount());
console.log(increaseCartCount());
console.log(increaseCartCount());
console.log(increaseCartCount());











