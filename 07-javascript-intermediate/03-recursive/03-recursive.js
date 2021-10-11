// # SOAL 1

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// # SOAL 2

const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;
function countAboveAvg(arr, avg) {
    if (arr.length === 0) {
        return 0;
    } else {
        return (arr[0] >= avg) + countAboveAvg(arr.slice(1), avg)
    }
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// # SOAL 3

const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
    if (arr[arr.length - 1] === num) {
        return console.log("angka ditemukan pada index: "+(arr.length - 1));
    }
    if (arr.length === 1) {
        return console.log("angka tidak ditemukan");
    }
    return searchInArray(arr.slice(0, -1), num);
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);

// # SOAL 4
function trianglePattern(x, y) {
    if (x === 0) {
        return;
    }
    let space = "";
    for (let i = 0; i < y; i++) {
        if (i < x - 1) {
            space += " "
        } else {
            space += String.fromCharCode(64 + (y - x + (i - x) + 2));
        }
    }
    console.log(space);
    trianglePattern(x - 1, y);  
}

trianglePattern(5, 5);



