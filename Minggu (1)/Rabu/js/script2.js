// ========================== Tugas 2 =============================== //

//data 
let data_tugas2 = [
    {
        id : "tentang-kami",
        nama: "Tentang Kami",
        text: "NF COMPUTER adalah bagian dari grup Nurul Fikri yang telah dipercaya oleh masyarakat Indonesia di bidang pendidikan dan peningkatan sumber daya manusia selama lebih dari 24 tahun. Alumni-alumninya telah berkiprah dan diakui kualitas kerja dan integritasnya oleh dunia usaha.NF COMPUTER dirintis sejak tahun 1994 dan merupakan sebuah lembaga di bidang pendidikan dan pelatihan IT(Information Technology).Kami berkomitmen menjadi partner perusahaan Anda dalam mengembangkan kemampuan serta keahlian SDM di bidang IT.Dengan komitmen tersebut, kami mempersiapkan tim pengajar yang professional dan berpengalaman di bidang IT Di Era Industri 4.0 saat ini, teknologi informasi berkembang sangat cepat, oleh karena itu pengembangan sumber daya manusia di bidang IT menjadi sebuah kebutuhan yang perlu diprioritaskan.NF COMPUTER menjadi jawaban yang tepat atas kebutuhan pengembangan kompetensi IT.Sehingga kami selalu berusaha untuk terus berinovasi terhadap teknologi terbaru."
    }, {
        id: "visi-misi",
        nama: "Visi Dan Misi",
        text: "<b>Visi</b><br>" +
            "Menjadi institusi pelatihan yang kompeten dan profesional di bidang pendidikan teknologi informasi dan komunikasi di berbagai wilayah indonesia." +
            "<br><br><b>Misi</b><br>" +
            "Membangun, memelihara dan mengembangkan institusi pelatihan bisnis berdaya saing tinggi, berkarakter profesional, kompeten, mengedepankan integritas dan tanggung jawab sosial, dengan mengembangkan dan menyediakan produk produk pendidikan dan pelatihan teknologi informasi dan komunikasi prima."
    }, {
        id: "deskripsi-bisnis",
        nama: "Deskripsi Bisnis",
        text: `NF COMPUTER menyelenggarakan Pelatihan dan Pendidikan di bidang Teknologi Informasi dan Komunikasi (IT Training) yang
        dibagi menjadi lima produk.
        <br>
        Pelatihan (training) ini dibagi dalam beberapa kategori produk yaitu :
        <ul>
            <li style="margin-left: 30px;">Public Class, merupakan short course bidang TIK (Teknologi Informasi dan Komunikasi) yang berbasis Linux maupun Windows.</li>
            <li style="margin-left: 30px;">Exclusive Class, merupakan paket training yang diberikan kepada customer dengan durasi 6-8 jam perhari dengan jumlah
            peserta minimal 2 orang dan pelaksanaan pelatihannya di NF Computer.</li>
            <li style="margin-left: 30px;">In House/In Company Training, yaitu pelatihan TIK yang dikustomisasi untuk kebutuhan perusahaan-perusahaan</li>
        </ul>
        Paket bisnis khusus dibagi ke dalam beberapa kategori produk yang dikelola secara profesional oleh NF COMPUTER yaitu :
        <ul>
            <li style="margin-left: 30px;">
                Kerjasama Pendidikan Sekolah, yaitu Divisi khusus pendidikan sekolah dimana NF COMPUTER bekerjasama dalam hal :
                Kerjasama pembangunan Lab Komputer, Pengajaran Komputer dan kombinasi antara keduanya.
            </li>
            <li style="margin-left: 30px;">
                Usulan Produk lain: Produk-produk yang menurut lokasi diminati oleh pasar tapi belum ada dalam daftar produk pelatihan
                dan pendidikan NF COMPUTER, dapat diajukan oleh cabang untuk menjadi produk yang dipertimbangkan sebagai produk dan akan
                menjadi bagian dari penyelenggaraan pelatiahan dan pendidikan di cabang tersebut pada periode yang dianggap tepat oleh
                NF COMPUTER.
            </li>
        </ul>`
    }
];

//menampilkan data
let tag2 = `<ul class="list-group list-group-horizontal-xxl">`;
for (const key in data_tugas2) {
    tag2 += `<li class="list-group-item list-header" style="cursor:pointer" id="btn-${data_tugas2[key].id}">${data_tugas2[key].nama}</li>`
    tag2 += `<li class="list-group-item list-content" id="${data_tugas2[key].id}">${data_tugas2[key].text}</li>`
}
tag2 += "</ul>";
document.getElementById("stage2").innerHTML = tag2;

//jquery
$(document).ready(function(){
    $("#tentang-kami").hide();
    $("#visi-misi").hide();
    $("#deskripsi-bisnis").hide();

    $("#btn-tentang-kami").click(function(){
        $("#tentang-kami").slideToggle();
    });
    $("#btn-visi-misi").click(function () {
        $("#visi-misi").slideToggle();
    });
    $("#btn-deskripsi-bisnis").click(function () {
        $("#deskripsi-bisnis").slideToggle();
    });
});