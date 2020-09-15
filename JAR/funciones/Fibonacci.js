function fibonacci(num) {
    let num1 = 0, num2 = 1, num3, num4 = 1;
    console.log(num1);
    console.log(num2);
    for (let i = 3; i <= num; i++) {
        num3 = num1 + num2
        console.log(num3);
        num4 = num4 + num3;
        num1 = num2;
        num2 = num3;
    }
}
fibonacci(prompt("Ingrese el número de posiciones que usted desea que le aparezcan de fibonacci"))