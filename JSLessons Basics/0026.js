const usdCurr = 28;
const eurCurr = 32;

// Одна функция для всех операций конвертации
function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);