var Fibomacci = function (n) 
{if (n===1) {return [0, 1];} else {var x = fibonacci_series(n - 1);x.push(x[x.length - 1] + x[x.length - 2]); return x;}};
console.log(fibonacci_series(100));

module.exports = {Fibomacci}