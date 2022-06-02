// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}`;
}

sayHello(`Alex`);

// Место для второй задачи
function returnNeighboringNumbers(number) {
    let arr = [];
    arr[0] = number - 1;
    arr[1] = number;
    arr[2] = number + 1;
    return arr;
}

returnNeighboringNumbers(5);

// Место для третьей задачи
function getMathResult(num, pow) {
    let string = "";
    if(typeof(pow) !== "number" || pow <= 0) {
        return num;
    }
    for(let i = 1; i <= pow; i++) {
        num *= i;
        if(i !== pow) {
            string += `${num}---`;
        } else {
            string += num;
        }
    }
    return string;
}

getMathResult(10, 5);