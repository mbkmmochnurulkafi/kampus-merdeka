//data awal 
const data_gempa = [
    {
        lokasi : "Jepang",
        skala : 7.9
    },
    {
        lokasi : "Amerika",
        skala : 8.1
    },
    {
        lokasi: "Spanyol",
        skala: 2.3
    },
    {
        lokasi: "Inggris",
        skala: 5.9
    },
    {
        lokasi: "Amerika",
        skala: 3.3
    },
    {
        lokasi: "Portugal",
        skala: 2.1
    }    
]

//class
class gempa{
    constructor(lokasi,skala){
        this.skala = skala;
        this.lokasi = lokasi;
    }
    dampak(){
        if (this.skala > 6) {
            return "Bangunan Roboh Dan Berpotensi Tsunami"
        } else if (this.skala > 4 && this.skala <= 6) {
            return "Bangunan Roboh"
        } else if (this.skala > 2 && this.skala <= 4) {
            return "Retak-Retak"
        } else {
            return "Tidak Terasa"
        }
    }
    cetak(no){
        let tag = "";
        tag = `<tr>
        <td>${no}</td>
        <td>${this.lokasi}</td>
        <td>${this.skala}</td>
        <td>${this.dampak(this.skala)}</td>
        </tr>`;
        return tag;
    }
}

//menampilkan data kedalam table
let tag = "";
let no;
for (const key in data_gempa) {
    no = parseInt(key) + 1;
    let gmp = new gempa(data_gempa[key].lokasi,data_gempa[key].skala);
    tag += gmp.cetak(no);
}
document.getElementById("tbody").innerHTML = tag;

//tambah data
const tambahdata = () =>{
    //mengambil data inputan
    let get_lokasi = document.getElementById("lokasi").value;
    let get_skala = document.getElementById("skala").value;

    //menjalankan class gempa
    let gmp = new gempa(get_lokasi,get_skala);
    tag += gmp.cetak(no+1);
    document.getElementById("tbody").innerHTML = tag;
    no++;
}