// ============================== TUGAS 1 ============================================ //
//data hewam
let data = [
    {
        nama: "Kucing",
        deskripsi: "Kucing disebut juga kucing domestik atau kucing rumah adalah sejenis mamalia karnivora dari keluarga Felidae.",
        image: "img/kucing.png",
    },
    {
        nama : "Harimau",
        deskripsi: "Harimau adalah spesies kucing terbesar yang masih hidup dari genus Panthera. Harimau memiliki ciri loreng yang khas pada bulunya, berupa garis-garis vertikal gelap pada bulu oranye, dengan bulu bagian bawah berwarna putih.",
        image: "img/harimau.png",
    },
    {
        nama: "Serigala",
        deskripsi: "Serigala abu-abu atau serigala adalah binatang mamalia karnivora. Serigala abu-abu mempunyai asal usul yang sama dengan anjing luar negeri dari keluarga Canis lupus melalui bukti pengurutan DNA dan penyelidikan genetika.",
        image: "img/wolf.png",
    },
    {
        nama: "Panda",
        deskripsi: "Panda Raksasa atau diringkas Panda, adalah seekor mamalia yang biasanya diklasifikasikan ke dalam keluarga beruang, Ursidae, yang merupakan hewan asli Tiongkok Tengah. Panda Raksasa tinggal di wilayah pegunungan, seperti Sichuan dan Tibet.",
        image: "img/panda.png",
    },
    {
        nama: "Gajah",
        deskripsi: "Gajah adalah mamalia besar dari famili Elephantidae dan ordo Proboscidea. Secara tradisional, terdapat dua spesies yang diakui, yaitu gajah afrika dan gajah asia, walaupun beberapa bukti menunjukkan bahwa gajah semak afrika dan gajah hutan afrika merupakan spesies yang berbeda.",
        image: "img/gajah.png", 
    },
    {
        nama: "Elang",
        deskripsi: "Gajah adalah mamalia besar dari famili Elephantidae dan ordo Proboscidea. Secara tradisional, terdapat dua spesies yang diakui, yaitu gajah afrika dan gajah asia, walaupun beberapa bukti menunjukkan bahwa gajah semak afrika dan gajah hutan afrika merupakan spesies yang berbeda.",
        image: "img/elang.png",
    }
];

//menampilkan data
let tag = ""
for (const key in data) {
    tag += `<div class="col-md-4 mt-4">
                <div class="card card-color" style="width: 18rem;">
                <div class="card-img">
                    <img src="${data[key].image}" class="card-img-top" alt="..." id="foto-${data[key].nama.toLowerCase()}">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${data[key].nama}</h5>
                    <p class="card-text">${data[key].deskripsi}</p>
                    <div class="text-center">
                        <button type="button" class="btn button" id="${data[key].nama.toLowerCase()}">Play Sound</button>
                    </div>
                </div>
                </div>
            </div>`
}
document.getElementById("stage").innerHTML = tag;

$(document).ready(function() {
    let click = true;
   $('#kucing').click(function () {
       if(click==true){
           $("#foto-kucing").attr("src", "img/kucing2.png");
           $("<audio></audio>").attr({
               'src': 'sound/kucing.mp3',
               'volume': 0.4,
               'autoplay': 'autoplay'
           }).appendTo("card-body");
           click = false;
       }else{
           $("#foto-kucing").attr("src", "img/kucing.png");
           $("<audio></audio>").attr({
               'src': 'sound/kucing.mp3',
               'volume': 0.4,
               'autoplay': 'autoplay'
           }).appendTo("card-body");
           click = true;
       }
   });
    $('#harimau').click(function () {
        if (click == true) {
            $("#foto-harimau").attr("src", "img/harimau2.png");
            $("<audio></audio>").attr({
                'src': 'sound/harimau.mp3',
                'volume': 0.4,
                'autoplay': 'autoplay'
            }).appendTo("card-body");
            click = false;
        } else {
            $("#foto-harimau").attr("src", "img/harimau.png");
            $("<audio></audio>").attr({
                'src': 'sound/harimau.mp3',
                'volume': 0.4,
                'autoplay': 'autoplay'
            }).appendTo("card-body");
            click = true;
        }
    });
    $('#serigala').click(function () {
        if (click == true) {
            $("#foto-serigala").attr("src", "img/wolf2.png");
            $("<audio></audio>").attr({
                'src': 'sound/serigala.mp3',
                'volume': 0.4,
                'autoplay': 'autoplay'
            }).appendTo("card-body");
            click = false;
        } else {
            $("#foto-serigala").attr("src", "img/wolf.png");
            $("<audio></audio>").attr({
                'src': 'sound/serigala.mp3',
                'volume': 0.4,
                'autoplay': 'autoplay'
            }).appendTo("card-body");
            click = true;
        }
    });
    $('#gajah').click(function () {
        if (click == true) {
            $("#foto-gajah").attr("src", "img/gajah2.png");
            $("<audio></audio>").attr({
                'src': 'sound/gajah.mp3',
                'volume': 0.4,
                'autoplay': 'autoplay'
            }).appendTo("card-body");
            click = false;
        } else {
            $("#foto-gajah").attr("src", "img/gajah.png");
            $("<audio></audio>").attr({
                'src': 'sound/gajah.mp3',
                'volume': 0.4,
                'autoplay': 'autoplay'
            }).appendTo("card-body");
            click = true;
        }
    });
    $('#panda').click(function () {
        if (click == true) {
            $("#foto-panda").attr("src", "img/panda2.png");
            $("<audio></audio>").attr({
                'src': 'sound/panda.mp3',
                'volume': 0.4,
                'autoplay': 'autoplay'
            }).appendTo("card-body");
            click = false;
        } else {
            $("#foto-panda").attr("src", "img/panda.png");
            $("<audio></audio>").attr({
                'src': 'sound/panda.mp3',
                'volume': 0.4,
                'autoplay': 'autoplay'
            }).appendTo("card-body");
            click = true;
        }
    });
    $('#elang').click(function () {
        if (click == true) {
            $("#foto-elang").attr("src", "img/elang2.png");
            $("<audio></audio>").attr({
                'src': 'sound/elang.mp3',
                'volume': 0.4,
                'autoplay': 'autoplay'
            }).appendTo("card-body");
            click = false;
        } else {
            $("#foto-elang").attr("src", "img/elang.png");
            $("<audio></audio>").attr({
                'src': 'sound/elang.mp3',
                'volume': 0.4,
                'autoplay': 'autoplay'
            }).appendTo("card-body");
            click = true;
        }
    });
});

