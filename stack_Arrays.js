class Stack{
    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[this.array.length - 1];
    }

    push(value){
        this.array.push(value);
    }

    pop(){
        this.array.pop();
    }

}

var myStack = new Stack();
myStack.push("google");
myStack.push("youtube");
myStack.push("instagram");

console.log(myStack);
console.log("=======================");
myStack.pop();
console.log(myStack);