// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
const obj = {
  fun1: function () {
    console.log("fun1", this);
  },
  fun2: () => {
    console.log("fun2", this);
  },
};

obj.fun1();
obj.fun2();

/*
Jawaban
1. Kedua fungsi diatas dapat berjalan normal, dengan fun1 menghasilkan object berisi fun1 dan fun2
   kemudian fun2 menghasilkan object kosong. Dan fun 2 berisi blocks scope kosong.
2. Iya berbeda
3. Hal ini karena arrow function mengambil dari konteks yang dibuat dalam kasus di atas yakni kosong
*/

/*
Soal 2 OOP
1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
2. Apa itu Abstraction? Mengapa kita membutuhkannya?
3. Apa itu Inheritance? Mengapa kita membutuhkannya?
4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?

Jawaban
1. Encapsulation adalah cara untuk membatasi akses langsung ke properti atau method dari sebuah objek
   Mengapa dibutuhkan karena untuk membatasi hak akses sehingga dapat membedakan atribut mana yang dapat
   diubah dan tidak dapat diubah dari luar class.
2. Abstraction adalah cara menyembunyikan detail tertentu dari sebuah objek/method dan hanya menampilkan yang penting dari objek
   Mengapa dibutuhkan karena agar kita dapat mengetahu fungsi utama atau pokok dari sebuah method
3. Inheritance adalah cara untuk mewariskan property dan methodnya ke class lain atau childsnya.
   Mengapa dibutuhkan karena ketika menerapkan inheritance kita bisa memanggil kembali property dari class sebelumnya
4. Polymorpishm kemampuan untuk membuat variable, fungsi, atau objek yang memiliki banyak bentuk,
   Mengapa dibutuhkan karena dapat membuat banyak jenis penerapan pada suatu method
*/

// Soal 3
class Phone {
  constructor(brand, storage, ram) {
    this.brand = brand;
    this.storage = storage;
    this.ram = ram;
  }
  getBrandName() {
    return this.brand;
  }
  setBrandName(newName) {
    this.brand = newName;
  }
  printSpecification() {
    console.log(
      `Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`
    );
  }
  setSpecification(storage, ram) {
    this.storage = storage;
    this.ram = ram;
  }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co");
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

// Soal 04
class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.courseOfferings = [];
  }

  getCourseIndex(course) {
    let index = -1;
    for (let i = 0; i < this.courseOfferings.length; i++) {
      if (this.courseOfferings[i].course.getSubject() === course.getSubject()) {
        index = i;
        break;
      }
    }
    return index;
  }

  takeNewCourse(course) {
    this.courseOfferings.push(new CourseOffering(course));
    course.decreaseQuota();
  }

  takeATest(course) {
    const index = this.getCourseIndex(course);
    if (this.courseOfferings[index].attendance >= course.getAttendance()) {
      this.courseOfferings[index].grade = Math.floor(Math.random() * 100);
    } else {
      console.log("please fill your absent");
    }
  }

  courseAttendance(course) {
    // course.attendance++;
    const index = this.getCourseIndex(course);
    this.courseOfferings[index].attendance++;
  }
}

class CourseOffering {
  constructor(course) {
    this.course = course;
    this.attendance = 0;
    this.grade = 0;
  }
}

class Course {
  constructor(subject, quota, attendance) {
    this.subject = subject;
    this.quota = quota;
    this.attendance = attendance;
  }
  getSubject() {
    return this.subject;
  }
  getAttendance() {
    return this.attendance;
  }
  decreaseQuota() {
    this.quota--;
  }
}

const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
