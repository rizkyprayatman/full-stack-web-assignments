const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    let avarage = arr.reduce((a,b) => a + b ) / arr.length;
    const result = arr.filter(arr => arr > avarage);
    
    return result.length
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))
