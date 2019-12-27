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

var array = mergeSortedArrays([1,3,4] , []);
console.log(array);