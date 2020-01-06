function mergeSortedArrays(array1, array2){
    
    var mergedArray = [];

    if(array1.length === 0){
        return array2;
    }
    if(array2.length === 0){
        return array1;
    }

    var i = 1;
    var j = 1;

    var array1Item = array1[0];
    var array2Item = array2[0];

    while(array1Item || array2Item){
        if( !array2Item || array1Item < array2Item){
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++
        }
        else{
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }

    return mergedArray;
}

function median(array1,array2){
    var array = mergeSortedArrays(array1,array2);
    var length = array.length;
    
    if((length % 2) !== 0){
        var item = array[Math.floor(length/2)];
        return item;
    }
    else{
        var item = array[length/2] + array[length/2 -1];
        return item/2;
    }
}

var array1 = [1,3];
var array2 = [2,4];

var array = mergeSortedArrays( array1, array2 );
console.log(array);

var item = median(array1,array2);
console.log(item);