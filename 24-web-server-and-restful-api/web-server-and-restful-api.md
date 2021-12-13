# Jawablah pertanyaan di bawah ini:

1. Apa perbedaan antara static web server dan dynamic web server?
2. Jelaskan arsitektur static site dan dynamic site
3. Apa saja yang dapat kita buat pada sisi server?
4. Mohon jelaskan apa itu RESTful?
5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)
6. Apa fungsi dari Response Codes?

# Jawaban :

1. Static Web Server, mengirimkan file dan kebutuhan client web apa adanya dan tetap tidak berubah-ubah <br>
   Dynamic Web Server, file dan kebutuhan client web yang dikirim ke web browser berubah-ubah sesuai kebutuhan Client

2. <b> Static site </b>, Client melakukan HTTP request pada web server, web server menerima request selanjutnya melakukan HTTP response yakni mengambil yang telah ada di server side. <br>
   <b> Dynamic site </b>, Client melakukan HTTP request, web server menerima request dari client lalu diproses pada web application serta database, setelah itu web application mengirimkan data kepada web server, selanjutnya web server melakukan HTTP response pada browser client.

3. Hal yang dapat dilakukan di sisi server : <br>

- Penyimpanan dan Pengiriman informasi menjadi lebih efisien
- Penyesuaian terhadap pengalaman pengguna
- Kontrol akses terhadap konten
- Menyimpan informasi Sesi
- Pemberitahuan dan Komunikasi
- Dapat melakukan analisis data

4. REST (Representational State Transfer) adalah suatu arsitektur metode komunikasi, sehingga memudahkan sistem untuk berkomunikasi satu sama lain terutama dalam pertukaran dan komunikasi data.

5. HTTP Verbs <br>

- Get : metode untuk mendapatkan data dari sumber
- Post : metode untuk membuat data baru dari sumber
- Put : Metode untuk update data
- Delete : metode untuk menghapus data dari sumber

6. Response Code berguna untuk mengindentifikasi masalah ketika ada sebuah resource tidak muncul ataupun berhasil. Kode Status ini memiliki arti misalkan Response Code 200 yang artinya permintaan HTTP berhasil
