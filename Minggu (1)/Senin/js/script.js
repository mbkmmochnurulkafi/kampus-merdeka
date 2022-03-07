


const validasi = (a,b) => {
    //Deklarasi Regex only number
    var reg = new RegExp('^[0-9]*$');
    if (reg.test(a) === false || reg.test(b) === false){
        return false;
    }else{
        return true;
    }
}

//Add / Tambah
const add = () =>{
    //Get Angka
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;
    //validasi
    let valid =  validasi(angka1,angka2);
    let hasil;
    if(valid === true){
         hasil = parseInt(angka1)+parseInt(angka2);
         document.getElementById("hasil").value = hasil;
    }else{
        alert("Masukan Angka!");
    }
    
}

//Min / Kurang
const min = () => {
    //Get Angka
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;
    //validasi
    let valid = validasi(angka1, angka2);
    let hasil;
    if (valid === true) {
        hasil = angka1 - angka2;
        document.getElementById("hasil").value = hasil;
    } else {
        alert("Masukan Angka!");
    }

}

//Kali
const kali = () => {
    //Get Angka
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;
    //validasi
    let valid = validasi(angka1, angka2);
    let hasil;
    if (valid === true) {
        hasil = angka1 * angka2;
        document.getElementById("hasil").value = hasil;
    } else {
        alert("Masukan Angka!");
    }

}

//bagi
const bagi = () => {
    //Get Angka
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;
    //validasi
    let valid = validasi(angka1, angka2);
    let hasil;
    if (valid === true) {
        hasil = angka1 / angka2;
        document.getElementById("hasil").value = hasil;
    } else {
        alert("Masukan Angka!");
    }

}

//pangkat
const pangkat = () => {
    //Get Angka
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;
    //validasi
    let valid = validasi(angka1, angka2);
    let hasil;
    if (valid === true) {
        hasil = Math.pow(angka1,angka2);
        document.getElementById("hasil").value = hasil;
    } else {
        alert("Masukan Angka!");
    }

}
//batal
const batal = () => {
    document.getElementById("angka1").value ="";
    document.getElementById("angka2").value ="";
    document.getElementById("hasil").value ="";
}