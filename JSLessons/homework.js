function fib(num) {
    let str = "";
    let sum = 0;
    let change = 1;
    if (!num || typeof(num) !== "number" || !Number.isInteger(num)) {
        return console.log(str);
    } else {
        for (let i = 1; i <= num; i++) {
            if (i === num) {
                str += `${sum}`;
            } else {
                str += `${sum} `;
                [sum, change] = [change, sum];
                change += sum;
            }
        }
        return console.log(str);
    }
}

fib(4);
fib(7);
fib("7");
fib(0);