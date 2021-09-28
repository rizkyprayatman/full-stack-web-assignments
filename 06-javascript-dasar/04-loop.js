/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i = 2; i <= 100; i++) {
  let bilBagi = 0;
  
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      bilBagi++;
    }
  }

  if (bilBagi == 2) {
    process.stdout.write(i + ", ");
  }
}

/// br
console.log(' ')

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
let i = 0;
while (primeCounter < 50) {
  let divider = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      divider++;
    }
  }

  if (divider == 2) {
    fiftiethPrime = i;
    primeCounter++;
  }
  i++;
}

console.log(fiftiethPrime);

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
let numberOdd = 0;

do {
  numberOdd++;
  if (numberOdd % 2 !== 0){
    fiftiethOdd = numberOdd;
    oddCounter++;
  }
} while (oddCounter < 50);

console.log(fiftiethOdd);