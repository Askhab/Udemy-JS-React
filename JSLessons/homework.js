function fib(num) {
    let str = "";
    let sum = 0;
    let change = 0;
    if (!num || typeof(num) !== "number") {
        return console.log(str);
    } else {
        for (let i = 0; i < num; i++) {
            if (typeof(num) !== "number" || !num) {
                console.log(str);
            } else {
                if (i === 0) {
                    str += `${sum} `;
                    change += 1;
                } else {
                    sum = change;
                    str += `${sum} `;
                    sum += change;
                }
            }
        }
        return console.log(str);
    }
}

fib(4);
fib(7);
fib("7");
fib(0);