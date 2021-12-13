# Jawablah Pertanyaan dibawah ini

1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?
2. Mohon jelaskan arsitektur dari Node.js?
3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

# Jawaban :

1. Node.js ialah sebuah runtime environment untuk javascript yang open source dan cross platform, perbedaan dengan javascript ialah javasript merupakan bahasa pemograman yang bekerja di sisi client untuk membuat sebuah interaksi pada sisi client sedangkan node.js membuat javascript dapat berjalan di sisi Server sebelum sebuah halaman web dieksekusi.

2. Node Js Architecture "Single Thread Event Loop" dimana Single thread "hanya memiliki satu tumpukan panggilan yang digunakan untuk menjalankan program", Event Loop "(event queue) sebagai penampung ketika ada perintah baru yang akan dieksekusi dan (event loop) memeriksa sampai semua perintah selesai dieksekusi", Server side sripting "Menjalankan javascript dari sisi server".

3. Modules di Node Js: <br>
   Built in Module (module default yang sudah ada/tersedia di node.js) <br>
   External Module (Module dari luar node.js dari komunitas atau organisasi yang siap digunakan)<br>
   Custom Module (Module yang dibuat sendiri)

4. Contoh module di Node.Js : <br>
   Built in Module (http, fs, url)
   <br>
   External Module (joi, nanoid, node-pg-migrate)
   <br>
   import export module yang telah dibuat sendiri
