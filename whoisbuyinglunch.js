function whosPaying(names) {
        
        var arrPosition = Math.random() * names.length;//Used to find the random number of array length
        
        //Math.floor is used to round the decimal number
        var isPaying = names[Math.floor(arrPosition)]; //array indexing
        
        return isPaying + " is going to buy lunch today!"
         
    }