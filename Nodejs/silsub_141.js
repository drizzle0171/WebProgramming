let fact = function(num, callback){
    let result = 1;
    for (let i=1; i<=num; i++){
        result = result*i;
    }
    callback(result);
};

fact(5, function(result){
    console.log(`5! = ${result}`)
});