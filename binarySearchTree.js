class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
        }
        else{
            var currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    //go left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else{
                    // go right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value){
        if(!this.root){
            return false;
        }
        var currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            }
            else if(value >  currentNode.value){
                currentNode = currentNode.right;
            }
            else if(currentNode.value === value){
                return currentNode;
            }
        }
        return false;
    }

    breadthFirstSearch(){
        var currentNode = this.root;
        var list = [];
        var queue = [];
        queue.push(currentNode);

        while(queue.length > 0){
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    breadthFirstSearchRecursive(queue,list){
        if(!queue.length){
            return list;
        }
        var currentNode = queue.shift;
        list.push(currentNode.value);
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearch(queue,list);
    }

    DFSInorder(){
        return traverseInOrder(this.root, []);
    }

    DFSPostorder(){
        return traversePostOrder(this.root , []);
    }

    DFSPreorder(){
        return traversePreOrder(this.root , []);
    }

}

function traverseInOrder(node , list){
    if(node.left){
        traverseInOrder(node.left , list);
    }
    list.push(node.value);
    if(node.right){
        traverseInOrder(node.right,list);
    }
    return list;
}

function traversePreOrder(node , list){
    list.push(node.value);
    if(node.left){
        traversePreOrder(node.left , list);
    }
    
    if(node.right){
        traversePreOrder(node.right,list);
    }
    return list;
}

function traversePostOrder(node , list){
    if(node.left){
        traversePostOrder(node.left , list);
    }
    
    if(node.right){
        traversePostOrder(node.right,list);
    }
    list.push(node.value);
    return list;
}

function traverse(node){
    var tree = {value : node.value};
    tree.left = node.left === null? null : traverse(node.left);
    tree.right = node.right === null? null : traverse(node.right);
}

var tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree);
console.log(tree.lookup(20));
console.log(tree.lookup(55));

var myBFS = tree.breadthFirstSearch();
console.log(myBFS);
var myBFS_R = tree.breadthFirstSearchRecursive([tree.root],[]);
console.log(myBFS_R);

console.log(tree.DFSInorder());
console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());