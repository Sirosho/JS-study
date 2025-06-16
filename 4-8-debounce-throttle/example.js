



function foo(callback) {
    return (greet) =>{
        callback(greet);
    }
}


function sayHello(greet){
    console.log(greet);
}


const bar = foo(sayHello);

bar(); //= sayHello(); undefined 괄호안이 비었음
bar(`안녕`);

