class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        var hash = 0;
        for(var i = 0 ; i<key.length ; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key , value){
        var address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
            
        }
        this.data[address].push([key, value]);
    }

    get(key){
        var address = this._hash(key);
        var currentBucket = this.data[address];

        if(currentBucket){
            for(var i = 0; i<currentBucket.length ; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
}

var myHashTable = new HashTable(50);
// myHashTable._hash("grapes");
// console.log(myHashTable._hash("grapes"));

myHashTable.set("grapes",1000);
myHashTable.set("apples",33);

console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apples"));