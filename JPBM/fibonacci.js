console.log()((size =>{
    if(size < 0) return [];
    if(size == 0) return [0];
    var fibonacci = [0 , 1];
    for(i=2; i<=size; ++i) fibonacci.push(fibonacci[i-2]+fibonacci[i-1]);
    return fibonacci;
}) (process.argv[2]));