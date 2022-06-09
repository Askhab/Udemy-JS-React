const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let {shops} = data;
    let mallSquare = 0;
    let mallVolume = 0;

    for (let i of shops) {
        mallSquare += i.width * i.length;
    }
    
    mallVolume += mallSquare * data.height;

    if (mallVolume * data.moneyPer1m3 > data.budget) {
        return console.log(`Бюджета недостаточно`);
    } else {
        return console.log(`Бюджета достаточно`);
    }
}

isBudgetEnough(shoppingMallData);