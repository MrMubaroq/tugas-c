       let objekAwal = prompt("Isi objek awal ");
        let objekAkhir = prompt("Isi objek akhir ");

        let hasil = "";

        for (let i = 0; i < objekAwal; i++) {
            for (let j = 0; j < objekAkhir; j++) {
                hasil += "* ";
            }
            hasil += "\n";
        }

        console.log(hasil);
         alert(hasil);