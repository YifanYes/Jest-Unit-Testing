// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar * 1.2 / 127.9 ;
    return valueInYen;
}

const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromYanToPound = (valueInYan) => {
    let valueInPound = valueInYan * 127.9 / 0.8;
    return valueInPound;
}

module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYanToPound };