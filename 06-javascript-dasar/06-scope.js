/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/*
Jawaban Soal - 01 : 
- Ada dua Variable Scope di Javascript, Yakni Local Scope dan Global Scope.
- Local Scope ialah variable yang di deklarasikan di dalam fungsi pada Javascript
  Global Scope ialah variable yang di deklarasikan diluar fungsi pada javascript
*/
// - Implementasi Sederhana Variable Scope :
// contoh Implementasi variable local scope
function user(){
    var nama = "Rizky";
    // Variable nama tidak dapat diakses jika diluar function user
}

var nama = "Rizky";
    // Variable nama yang di atas dapat diakses didalam/diluar dari function
function user(){

}


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/*
- yang akan ditampilkan dalam console.log ialah "Meriah"
  Hal ini karena variabel name telah di dekralasikan dalam console.log dari function printFirstName 
  (yang di console.log ialah dari function printFistName),
  dan mengapa hanya mencetak Meriah, Karena name Meriah Carey telah di split menjadi bentuk array berikut [ 'Mariah', 'Carey' ]
  dan function mereturn name yang telah di split dan hanya mengembalikan index array ke 0

*/
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));

// mencoba split
function arrayName(name){
    let arr = name.split(" ");
    return arr;
}

console.log(arrayName("Mariah Carey"));
