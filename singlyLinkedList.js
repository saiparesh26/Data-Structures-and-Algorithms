class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        // this.head = {
        //     value:value,
        //     next: null
        // };
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        // var newNode = {
        //     value: value,
        //     next: null
        // };
        var newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        // var newNode = {
        //     value: value,
        //     next: null
        // };
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    printList(){
        var array = [];
        var currentNode = this.head;
        while(currentNode){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array.join("-->");

    }

    insert(value, index){
        if(index >= this.length){
            return this.append(value);
        }

        var newNode = new Node(value);
        var tempNode = this.head;
        for(var i =0 ; i<index - 1 ; i++){
            tempNode = tempNode.next;
        }
        newNode.next = tempNode.next;
        tempNode.next = newNode;
        this.length++;
    }

    remove(index){
        var tempNode = this.head;
        var previousNode = null;
        for(var i =0 ; i < index ; i++){
            previousNode = tempNode;
            tempNode = tempNode.next;
        }
        previousNode.next = tempNode.next;
        this.length--;
    }

    reverse(){
        if(!this.head.next){
            return this.head;
        }

        var first = this.head;
        this.tail = this.head;
        var second = first.next;
        while(second){
            var temp = second.next;
            second.next = first;
            first = second;
            second  =temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }
}

var myLinkedList = new LinkedList(5);
// console.log(myLinkedList);
// console.log("=====================================================")
myLinkedList.append(10);
myLinkedList.append(15);
myLinkedList.prepend(100);
myLinkedList.insert(35,2);
console.log(myLinkedList.printList());
console.log(myLinkedList.length);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse().printList());
console.log(myLinkedList.length);