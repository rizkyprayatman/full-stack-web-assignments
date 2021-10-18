## Soal - 01

Selamat kali ini kamu telah mempelajari tentang bagaimana cara untuk melakukan refactoring UI menggunakan TailwindCSS. Pada kesempatan kali ini kita akan belajar untuk melakukan sedikit refactoring UI terhadap sebuah website sederhana kurang lebih seperti dibawah

Ada banyak hal yang dapat kita _improve_, namun tidak semua hal yang akan kita perbaiki. Kita hanya akan merombak beberapa bagian saja yaitu:

1. `Navbar`
   - berikan `drop-shadow` sehingga kita dapat menciptakan _depth_ antara `navbar` dan `dashboard content`
2. `Sidebar`
   - ubah proporsi `grid` dari `sidebar` menjadi `3/12`
   - untuk memberikan depth antar menu kita dapat melakukan beberapa hal:
     - berikan padding `horizontal=5` dan `vertical=2`
     - berikan border kiri dengan `width=8` dan warna `red-500` serta ubah warna teks menjadi `red-500` hal tersebut agar kita memiliki _visual_ _menu_ manakah yang sedang aktif
     - berikan `background-color` dengan warna `red-200` dan ubah `cursor` menjadi `pointer` apabila kita melakukan _hover_ terhadap sebuah _menu_
     - berikan `letter spacing` pada tiap-tiap _menu_ agar kita dapat membaca huruf cetak besar dengan lebih mudah
3. `Content`
   - elemen dengan `id="content"`
   - ubah proporsi `grid` dari elemen tersebut menjadi `9/12`
   - elemen dengan `id="summary-card"`
     - ubah proporsi `grid` dari elemen tersebut menjadi `1/4` untuk masing-masing `card`
     - tambahkan `dropshadow` untuk masing-masing `card` untuk menciptakan kesan _depth_
     - tukar posisi antara label dengan value yang kita tampilkan, hal ini berguna karna kita ingin user fokus pada value bukan label

<br>

### Penerapan perubahan pada code

1. Navbar <br>
   Menambahkan class drop shadow <br>
   referensi :
   https://tailwindcss.com/docs/drop-shadow <br><br>

   ```
    class="filter drop-shadow-md"
   ```

2. Sidebar <br>
   Menerapkan proporsi grid dari sidebar menjadi 3/12 <br>

   ```
   class="col-span-3"
   ```

   Untuk Menu sesuai soal mka ditambahkan

   ```
   class="px-3 py-2 border-l-8 border-red-500 text-red-500 cursor-pointer tracking-wide"
   ```

   semua penerapan mengikuti dokumentasi tailwind

3. Content <br>
   untuk id="content" menerapkan proporsi grid dari sidebar ditambahkan 3/12 <br>
   ```
   class="col-span-9"
   ```
   Pada id="summary-card" ditambahkan
   ```
   class="grid grid-cols-4
   ```
   pada item card ditambahkan
   ```
   class="filter drop-shadow-md"
   ```

## Soal - 02

Pada kesempatan kali ini kita akan melanjutkan apa sudah kalian kerjakan pada soal pertama, kita akan mengubah website yang sudah kita buat sebelumnya dan memberikan ia kemampuan untuk menjadi `responsive` dengan cara sebagai berikut:

1. `body`
   - berikan batas lebar maksimal dari jendela utama sebesar `7xl`
   - serta atur `margin horizontal` sehingga ia akan tetap berada ditengah-tengah layar
2. `sidebar`
   - sembunyikan atau hilangkan elemen tersebut apabila ukuran layar _user_ sudah mencapai `breakpoint=sm`
3. `content`
   - elemen dengan `id="content"`
     - apabila ukuran layar _user_ sudah mencapai `breakpoint=sm` atau lebih kecil ubah proporsi `grid` pada elemen tersebut menjadi `12/12` atau ia akan mengambil seluruh tempat yang tersedia
   - elemen dengan `id="summary-card"`
     - ubah proporsi `grid` pada tiap-tiap elemen `card` menjadi `1/4` apabila ukuran layar _user_ sama atau lebih besar dari `breakpoint=md`
     - ubah proporsi `grid` pada tiap-tiap elemen `card` menjadi `2/4` apabila ukuran layar _user_ mencapai `breakpoint=sm`
     - ubah proporsi `grid` pada tiap-tiap elemen `card` menjadi `1/4` apabila ukuran layar _user_ lebih kecil dari `breakpoint=sm`
   - `table`
     - hilangkan atau sembunyikan gambar `avatar` apabila ukuran layar _user_ sudah mencapai `breakpoint=sm` atau lebih kecil

### Penerapan perubahan pada code

- Pada tag Body
- Pada sideBar (di tag ol)
- Pada id="Content" dan
- Pada id="summary-card"
