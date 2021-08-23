// defolt perameter
function getName(frist, last = chowdory) {
    return frist + '' + last;
};

// templat string

const myPeopol = `my fevorite person is he and his full name is ${getName('Akbor', 'ali')}`

console.log('myPeopol');



// arrow function
const getName2 = (frist, last) => frist + '' + last;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}

// sprate operator
const numbers = [2, 4, 64, 65];
const max = Math.max(numbers);
const min = Math.min(...numbers);