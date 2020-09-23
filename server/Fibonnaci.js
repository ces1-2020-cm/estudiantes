function fibonacci(req,res){
    var a=0;
    var b=1;
    var array= []  
     for(var i=0; i< req.query.j; i++){
    var numeroTemporal=a;
    a=b;
    b=numeroTemporal+b;
     
    array.push(a)
    }
    return res.json({array})
    
     
    }
   module.exports = {fibonacci}
   
    // console.log(fibonacci(100))