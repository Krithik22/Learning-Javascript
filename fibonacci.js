function fibonacciGenerator (n) {
        var fibonacci = [];
        var cnt = 2;
        if (n === 1){
          fibonacci = [0];
        } else if (n === 2){
          fibonacci = [0,1];
        } else {
            fibonacci = [0,1]
          while (cnt != n){
            var nextItem = fibonacci[cnt-2]+fibonacci[cnt-1];
            fibonacci.push(nextItem);
            cnt++;
          }
        }    
        return fibonacci
    }
    var output = fibonacciGenerator(5);
    console.log(output);
    