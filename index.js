const test1 = ["Abc", "bCd"];
const test2 = ["Oke", "One"];
const test3 = ["Pendanaan", "Terproteksi", "Untuk", "Dampak", "Berarti"];

const kelompokanHuruf = (arrayString) => {
  // Inisialisasi fungsi kelompokanHuruf yang menerima 1 parameter array dari string
  const jumlahHurufObjek = {}; // Inisialisasi objek untuk menampung huruf sebagai key dan value number yang bernilai jumlah dari key / huruf-nya

  arrayString.forEach((string) => {
    // Membuat perulangan dan melakukan inisialisasi dari setiap index arrayString dengan variable string
    const arrayHuruf = string.split(""); // Memisahkan setiap huruf pada string dengan menggunakan metode split dan key string kosong agar setiap huruf terpisah

    arrayHuruf.forEach((huruf) => {
      // Membuat perulangan dan melakukan inisialisasi dari setiap index arrayHuruf dengan variabel huruf
      if (jumlahHurufObjek[huruf] === undefined) {
        // Pengecekan jika pada objek jumlah huruf objek dengan atribut huruf apakah tidak ada
        jumlahHurufObjek[huruf] = 1; // Jika pengecekan bernilai true maka akan membuat atribut baru dengan key huruf dan value 1
      } else {
        jumlahHurufObjek[huruf]++; // Jika pengecekan bernilai false maka value dengan atribut huruf akan bertambah satu
      }
    });
  });

  const jumlahHurufArray = []; // Inisialisasi array untuk nantinya di pakai

  for (const huruf in jumlahHurufObjek) {
    // Melakukan perulangan untuk setiap atribut yang ada pada jumlahHurufObjek
    jumlahHurufArray.push([huruf, jumlahHurufObjek[huruf]]); // Menyimpan array dengan index pertama huruf dan index ke dua jumlah dari huruf yang ada lalu di simpan ke ujung dari array jumlahHurufArray
  }

  jumlahHurufArray.sort((a, b) => {
    // Melalukan sortir dengan menggunakan fungsi dari array sort dan menginisialisasi nilai dari index sekarang dengan a dan nilai dari index setelah-nya dengan b

    if (b[1] === a[1]) {
      // Melakukan pengecekan apakah jumlah dari huruf-nya sama atau tidak
      if (a[0].toUpperCase() === a[0] && b[0].toUpperCase() !== b[0]) {
        // Melakukan pengecekan apakah nilai dari a apakah huruf kapital dan nilai dari b apakah bukan huruf kapital
        return -1; // Jika iya maka di biarkan
      } else if (a[0].toUpperCase() !== a[0] && b[0].toUpperCase() === b[0]) {
        // Melakukan pengecekan apakah nilai dari a apakah bukan huruf kapital dan nilai dari b apakah huruf kapital
        return 1; // Jika iya maka a dan b di tukarkan
      }

      return a[0].localeCompare(b[0]); // jika a dan b merupakan huruf yang sama kapital atau sebaliknya maka di urutkan berdasarkan huruf a-z atau A-Z
    }

    return b[1] - a[1]; // Jika pengecekan di atas tidak memenuhi kondisi maka di urutkan berdasarkan jumlah dari huruf pada index pertama dari setiap nilai / jumlah huruf
  });

  const hasilArray = jumlahHurufArray.map((hurufJumlah) => {
    // Melakukan perulangan untuk setiap nilai dalam array jumlahHurufArray dan di inisialisasi dengan hurufJumlah kemudian di simpan pada hasilArray
    return hurufJumlah[0]; // Mengembalikan huruf sebagai balikan atau nilai yang di simpan
  });

  const hasil = hasilArray.join(""); // Menggabungkan semua nilai pada array hasilArray dengan metode join dengan nilai string kosong agar tidak di pisahkan apapun, kemudian di simpan dalam variabel hasil

  console.log(hasil); // Menampilkan nilai dari variabel hasil ke console
};

kelompokanHuruf(test1); // Memanggil fungsi kelompokan huruf dengan parameter test1, hasil = bACcd
kelompokanHuruf(test2); // Memanggil fungsi kelompokan huruf dengan parameter test2, hasil = Oekn
kelompokanHuruf(test3); // Memanggil fungsi kelompokan huruf dengan parameter test3, hasil = aenrktipBDPTUdmosu
