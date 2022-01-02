# Docker

## Soal 1

### 1. Jelaskan apa yang dimaksud dengan container pada docker !

```
Wadah untuk mengemas dan menjalankan aplikasi. Wadah ini mencakup kode, runtime, system tools, dan pengaturan. Container hanya bisa mengakses resource yang telah ditentukan dalam Docker image.
```

### 2. Jelaskan apa perbedaan antara konsep container dengan virtual machine !

```
Perbedaannya ialah pada resource yang digunakan. Vm banyak menggunakan resource secara langsung menargetkan hardware untuk dibagi ke beberapa sistem, sedangkan Container hanya memakan sedikit resource karena merupakan sistem yang terisolasi atau aplikasi yang dapat menjalankan sistem operasi kernel tanpa vm.
```

### 3. Apa yang dimaksud dengan docker file ?

```
Dockerfile merupakan code file yang berisi perintah yang dapat di run untuk membangun sebuah image.
```

### 4. Apa yang dimaksud dengan docker registery ?

```
Docker registry ialah tempat untuk menyimpan image pada registry docker hub.
```

### 5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !

```
Untuk dapat menjalankan lebih dari 1 container (multi-container) secara bersamaan dan saling terhubung, dapat menggunakan docker compose dengan membuat file NAMA_FILE.yaml isilah perintah didalamnya, dengan cara ini dapat menjalankan image hanya dengan satu localhost.
```
