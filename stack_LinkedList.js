class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        var newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom  =newNode;
        }
        else{
            var tempNode = this.top;
            this.top = newNode;
            this.top.next = tempNode;
        }
        this.length++;
    }

    pop(){
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }
        // var tempNode = this.top;
        this.top = this.top.next;
        this.length--;
    }

    print(){
        var tempNode = this.top;
        while(tempNode){
            console.log(tempNode.value);
            tempNode = tempNode.next;
        }
    }
}

var myStack = new Stack();
myStack.push("google");
myStack.push("youtube");
myStack.push("instagram");

myStack.print();
myStack.pop()
myStack.print();