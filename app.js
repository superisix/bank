localStorage.setItem("bakiye", 900000000)

let bakiye = localStorage.getItem("bakiye")
$("#bakiye").html(`Bakiye: ${bakiye}`);

$("#kytBtn").click(function (e) {
    e.preventDefault();
    let kytisim = $("#kytisim").val();
    let kytsifre = $("#kytsifre").val();
    localStorage.setItem("kadi", kytisim);
    localStorage.setItem("sifre", kytsifre);
    window.location.href = "login.html"
});


$("#lgnBtn").click(function (e) {
    e.preventDefault();
    let kadi = localStorage.getItem("kadi");
    let sifre = localStorage.getItem("sifre");
    let lgnisim = $("#lgnisim").val();
    let lgnsifre = $("#lgnsifre").val();
    if (kadi == lgnisim && sifre == lgnsifre) {
        window.location.href = "anasayfa.html"
    }
    else {
        $("#hata").html("Kullanıcı adı veya şifre hatalı");
    }
});

$("#cekBtn").click(function (e) {
    e.preventDefault();
    $("#miktar").show();
    $("#gonderBtn").hide();
    $(".geriBtn").show();
    let miktar = $("#miktar").val();
    let bakiye = localStorage.getItem("bakiye");
    let sonuc = bakiye -= miktar;
    

    if (miktar <= bakiye && miktar >= 0) {
        localStorage.setItem("bakiye", sonuc);
        $("#bakiye").html(`Bakiye: ${bakiye}`);
    }
    else{
        $("#info").html("Yetersiz Bakiye");
    }
});




$("#gonderBtn").click(function (e) { 
    e.preventDefault();
    $("#cekBtn").hide();
    $("#miktar").show();
    $("#iban").show();
    $("#gonderBtn").hide();
    $("#ibanBtn").show();
    $(".geriBtn").show();
});


$("#ibanBtn").click(function (e) { 
    e.preventDefault();
    let miktar = $("#miktar").val();
    let bakiye = localStorage.getItem("bakiye");
    let sonuc = bakiye -= miktar;
    let iban = $("#iban").val();

    if ( iban.length == 24) {

        
        if(miktar <= bakiye && miktar >= 0 ){
        localStorage.setItem("bakiye", sonuc);
        $("#bakiye").html(`Bakiye: ${bakiye}`);
        }
        else if(miktar==[]){
            $("#yetersiz").html("Tutar boş bırakılamaz");

        }
        else{
            $("#yetersiz").html("Yetersiz bakiye");
        }

        
    }
    else{
        $("#info").html("IBAN hatalı");
    }
 
});


$(".geriBtn").click(function (e) { 
    e.preventDefault();
    window.location.href ="anasayfa.html"
});

$("#yenihsp").click(function (e) { 
    e.preventDefault();
    window.location.replace("hesapsyf.html")
});

$("#vadesiz").click(function (e) { 
    e.preventDefault();
    window.location.replace("vadesiz.html")
});
$("#olstr").click(function (e) { 
    e.preventDefault();
    let hesap = $("#hesapadi").val();
    let tutar = $("#tutar").val();
    let para = $("#parabirimi").val();
    localStorage.setItem("Hesap adı",hesap)
    localStorage.setItem("Minimum Tutar",tutar)
    localStorage.setItem("parabirimi",para)
    
});
$("#olstr").click(function (e) { 
    e.preventDefault();
    let bakiye = localStorage.getItem("bakiye");
    let sonuc = bakiye - $("#tutar").val();
    localStorage.setItem("bakiye", sonuc);
});
$("#dolar").click(function (e) { 
    e.preventDefault();
    window.location.replace("dolar.html")
});
$("#euro").click(function (e) { 
    e.preventDefault();
    window.location.replace("euro.html")
});

$("#faiz").click(function (e) { 
    e.preventDefault();
    window.location.replace("faiz.html")
});