//Normal recursive implementaion

function fibonacci(n){
    if(n < 2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacciMaster(){
    let cache = {};

    return function fib(n){
        if(n in cache){
            return cache[n];
        }
        else{
            if(n < 2){
                return n;
            }
            else{
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n]; 
            }
        }
    }
}

//first time run to create cache
let fasterFib = fibonacciMaster();
var result = fasterFib(10);
console.log("DP ",result);