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
JSON.stringify(traverse(tree.root));
