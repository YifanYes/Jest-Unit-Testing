
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euroAmmount) => {
    let dollarResult = euroAmmount * oneEuroIs.USD;
    return dollarResult;
}

const fromDollarToYen = (dollarAmmount) => {
    let yenResult = (dollarAmmount / oneEuroIs.USD) * oneEuroIs.JPY;
    return yenResult;
}

const fromYenToPound = (yenAmmount) => {
    let poundResult = (yenAmmount / oneEuroIs.JPY) * oneEuroIs.GBP;
    return poundResult;
}

module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYanToPound };
