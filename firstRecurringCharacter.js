//First recurring caharacter
// Array = [2,5,1,2,3,4,8,9];
//It should return 2

//array = [2,5,1,1,5,6];
// should return 1

// array = [2,3,4,5]
// return undefined


function recurringCharacter(array){
    var addressArray = [];
    
    for(var i =0 ; i < array.length ; i++){
        if(!addressArray[array[i]]){
            addressArray[array[i]] = true;
        }
        else{
            return array[i];
        }
    }
    return undefined;
}

var element = recurringCharacter([2,1,1,2,3,4,8,9]);

console.log(element);



