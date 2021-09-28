/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*
    Jawaban Soal - 01
        - Type Error ialah karena type yang digunakan berada di luar tipe yang diharapkan 
          ( misalkan kita akan mengUppercas sebuah number akan terjadi type error)
        - Reference Error, terjadi jika menggunakan referensi variabel yang belum di deklarasikan
        - Range Error, terjadi karena menggunakan angka yang berada diluar rentang yang diset
        - Syntax Error ialah kesalahan tata bahasa, syntax error membuat komputer tidak dapat memahaminya
*/


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE

/*
    Jawaban Soal - 02
        - Jika dijalankan akan keluar Reference Error, hal ini karena belum di inisialisasi variable
        - jika dilihat pada baris kode. Padahal telah di inisialisasi variablenya, namun diletakkan dibawah concole.log
          sedangkan javascript menjalankan program dari atas ke bawah sehingga yang dieksekusi terlebih dahulu yakni concole.log nya
*/
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
