const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = `Семья состоит из: `;
    if (arr.length === 0) {
        return console.log(`Семья пуста`);
    } else {
        for (let member of family) {
            str += `${member} `;
        }
        return console.log(str);
    }
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    if (arr.length === 0) {
        return console.log(`Массив пуст`);
    } else {
        for (let city of arr) {
            console.log(city.toLowerCase());
        }
    }
}

standardizeStrings(favoriteCities);