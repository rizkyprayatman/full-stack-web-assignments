// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama

// for (var i = 1; i <= 5; i++) {
//   console.log("first log: ", i); // 01 - Pertama
//   setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
// }

/*
Jawaban
1. Synchronous merupakan operasi yang berjalan akan berjalan sesuai urutan
   jadi tidak akan menjalankan perintah setelahnya jika perintah sebelumnya tidak selesai dijalankan
2. Asynchronous merupakan kebalikan dari synchronous, operasi bisa berjalan secara bersamaan,
   tanpa menunggu perintah sebelumnya selesai.
3. Kita dapat menerapkan Asynchronous di browser
4. akan tercetak sebagai berikut :

    first log:  1
    first log:  2
    first log:  3
    first log:  4
    first log:  5
    second log:  6
    second log:  6
    second log:  6
    second log:  6
    second log:  6

5. Di dekralasikan menggunakan var yang menjadikan variable menjadi global
*/

// 6
for (let i = 1; i <= 5; i++) {
  console.log("first log: ", i);
  setTimeout(() => console.log("second log: ", i), 100);
}
