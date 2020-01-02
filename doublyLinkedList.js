class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoubleLinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    
    append(value){
        var newNode = new Node(value);
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
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
        return array.join(" <--> ");
    }

    insert(value, index){
        if(index >= this.length){
            return this.append(value);
        }

        var newNode = new Node(value);
        var tempNode = this.head;
        for(var i =0 ; i<index-1 ; i++){
            tempNode = tempNode.next;
        }
        newNode.next = tempNode.next;
        newNode.previous = tempNode;
        tempNode.next.previous = newNode;
        tempNode.next = newNode;
        this.length++;
    }

    remove(index){
        var tempNode = this.head;
        for(var i = 0; i < index - 1 ; i++){
            tempNode = tempNode.next;
        } 
        tempNode.next = tempNode.next.next;
        tempNode.next.previous = tempNode;
        this.length--;
    }
}

var myList = new DoubleLinkedList(5);
myList.append(10);
myList.append(15);
myList.prepend(100);
myList.insert(7,2);
console.log(myList.printList());
myList.remove(2);
console.log(myList.printList());
console.log(myList.length);