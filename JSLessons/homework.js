// Место для первой задачи
function calculateVolumeAndArea(edge) {
    const cubeVolume = edge * edge * edge;
    const cubeSquare = 6 * (edge * edge);

    if (!edge || edge <= 0 || typeof(edge) !== "number" || !Number.isInteger(edge)) {
        return `При вычислении произошла ошибка`;
    } else {
        return `Объём куба: ${cubeVolume}, площадь всей поверхности: ${cubeSquare}`
    }
}

calculateVolumeAndArea(5);

// Место для второй задачи
function getCoupeNumber(number) {
    if (!number || !Number.isInteger(number) || number < 0) {

    } else if (number >= 1 && number <= 36) {
        return Math.ceil(number / 4);
    }
}

getCoupeNumber(17);