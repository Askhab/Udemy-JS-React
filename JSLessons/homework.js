const someString = 'This is some strange string';

function reverse(str) {
    if (str.length === 0) {
        console.log(`Ошибка!`);
    } else {
        console.log(str.split("").reverse().join(""));
    }
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = ``;
    arr.length === 0 ? str = `Нет доступных валют` : str = `Доступные валюты:\n`;

    arr.forEach(function(curr) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    return console.log(str);
}

availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY");