function hitung() {
      // untuk memanggil kembali id yang terdapat pada html
      var angka1 = document.getElementById("angka1").value;
      var angka2 = document.getElementById("angka2").value;
      var operasi = document.getElementById("operasi").value;

      var a = Number(angka1);
      var b = Number(angka2);
      var hasil = "";

      // berfungsi untuk menjalankan program kalkulator menggunakan if , else if, dan else
      if (operasi === "+") {
        hasil = a + b;
      } else if (operasi === "-") {
        hasil = a - b;
      } else if (operasi === "*") {
        hasil = a * b;
      } else if (operasi === "/") {
        if (b === 0) {
        // memberikan peringatan secara langsung apabila memaksa membagi dengan 0
          alert(" Pembagian dengan nol tidak diperbolehkan!");
          hasil = "Tidak bisa membagi dengan nol!";
        } else {
          hasil = a / b;
        }
      } else {
        hasil = "Operasi tidak dikenali.";
      }

      // memanggil kembali id hasil yang terdapat dalam html dan juga merupakan hasil akhir penjumlahan dari angka1 dan angka2 diatas
      document.getElementById("hasil").innerText = "Hasil: " + hasil;
    }