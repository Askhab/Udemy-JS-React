// Место для первой задачи
function getTimeFromMinutes(number) {
    if (number >= 0 && number < 60) {
        return console.log(`Это 0 часов и ${number} минут`);
    } else if (number >= 60) {
        return console.log(`Это ${Math.floor(number / 60)} часов и ${number % 60} минут`);
    } else {
        return console.log(`Не верно указано число минут`);
    }
}

getTimeFromMinutes(256);

// Место для второй задачи
function findMaxNumber(numOne, numTwo, numThree, numFour) {
    if (!numOne || !numTwo || !numThree || !numFour || typeof(numOne) !== "number" || typeof(numTwo) !== "number" || typeof(numThree) !== "number" || typeof(numFour) !== "number") {
        return console.log(0);
    } else {
        let bigNum = 0;
        let numArr = [numOne, numTwo, numThree, numFour];

        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] > bigNum) {
                bigNum = numArr[i];
            } else {
                continue;
            }
        }
        return console.log(bigNum);
    }
}

findMaxNumber(1, 5, 6.6, 11);