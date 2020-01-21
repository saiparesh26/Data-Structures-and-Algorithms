//Normal recursive implementaion
let calculation = 0;
let calculation2 = 0;
function fibonacci(n){
    calculation++;
    if(n < 2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacciMaster(){
    let cache = {};

    return function fib(n){
        calculation2++;
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


//Normal fibonacci function call
var result = fibonacci(30);
console.log(result);
console.log("Normal recursive implementation has done " + calculation + " calculations");

console.log("===============================");
//first time run to create cache
let fasterFib = fibonacciMaster();
result = fasterFib(30);
console.log("DP ",result);
console.log("Dynamic recursive implementation has done " + calculation2 + " calculations");