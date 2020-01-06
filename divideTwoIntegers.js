function divQ(dividend,divisor){
    var count = 0;
    if(divisor < 0 ||  dividend <0 ){
        if(divisor < 0){
            divisor = -1*divisor;
        }
        if(dividend < 0){
            dividend = -1*dividend;
        }
        for(var i =divisor ; i <= dividend ; i+=divisor){
            count++
        }
        
        return -count;
    }
    else{
        for(var i =divisor ; i <= dividend ; i+=divisor){
            count++
        }
        return count;
    }

    
}

var answer = divQ(7,-3);
console.log(answer);