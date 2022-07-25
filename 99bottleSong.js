function bottleSong(){
    var cnt = 99;
    while (cnt != 0){
        if (cnt === 1){
            console.log(cnt + " bottle of beer on the wall, " + cnt + " bottle of beer.");
            cnt--;
            console.log("take one down and pass it around, No more bottles of beer on the wall.");
        } else {
            console.log(cnt + " bottles of beer on the wall, " + cnt + " bottles of beer.");
            cnt--;
            console.log("take one down and pass it around, " + cnt + " bottles of beer on the wall.");
        }
    }
}