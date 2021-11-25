/*Menu*/


$(".menu").click(function(){
    $(".menuAni").toggleClass("menuAniG")
})

$(".menu").click(function(){
    $(".menuAni2").toggleClass("menuAni2G")
})

$(".menu").click(function(){
    $(".strich1").toggleClass("strich1Ani")
})

$(".menu").click(function(){
    $(".strich2").toggleClass("strich2Ani")
})

$(".menu").hover(function(){
    $(".strich1").toggleClass("strich1Hover")
})

$(".menu").hover(function(){
    $(".strich2").toggleClass("strich2Hover")
})

$(".end a").hover(function(){
    $(".img2").toggleClass("img2Ani")
})

$(".cali a").hover(function(){
    $(".img3").toggleClass("img3Ani")
})

$(".kontakt a").hover(function(){
    $(".img4").toggleClass("img4Ani")
})

$(".menuItems li a").hover(function(){
    $(".menuInner").toggleClass("menuInnerAni")
})


$(window).scroll(function(){
    if ($(this).scrollTop() > 2500) {
       $(".strich1").addClass("strich1Change");
    } else {
       $(".strich1").removeClass("strich1Change");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 2500) {
       $(".strich2").addClass("strich2Change");
    } else {
       $(".strich2").removeClass("strich2Change");
    }
});


$(window).scroll(function(){
    if ($(this).scrollTop() > 900) {
       $(".menu").addClass("menuChange");
    } else {
       $(".menu").removeClass("menuChange");
    }
});

setTimeout(function(){
    $(".loader").fadeToggle();
},2500)



/*Important Mail*/


$(".important").hover(function(){
    $(".important").toggleClass("importantAni")
})

$(".important").hover(function(){
    $(".mail").toggleClass("mailAni")
})

$(".important").hover(function(){
    $(".tel").toggleClass("telAni")
})


$(".important").hover(function(){
    $(".strichImportant").toggleClass("strichImportantAni")
})

$(".important").hover(function(){
    $(".importantText").toggleClass("importantTextAni")
})

$(".start a").hover(function(){
    $(".img1").toggleClass("img1Ani")
})

$(".important").hover(function(){
    $(".importantOver").toggleClass("importantOverAni")
})


/*Project Box*/


$(".anfordern3 a").hover(function(){
    $(".anfordernStrichZ").toggleClass("anfordernStrichZAni")
})

$(".anfordern3 a").click(function(){
    (".lol").fadeToggle()
})





$(".senden").click(function(){

    setTimeout(function(){
        $(".hallo").fadeToggle();
    },2500)

})



$(window).scroll(function(){
    if ($(this).scrollTop() > 1750) {
       $(".quantitätSlogan").addClass("quantitätSloganAni");
    } else {
       $(".quantitätSlogan").removeClass("quantitätSloganAni");
    }
});



$(window).scroll(function(){
    if ($(this).scrollTop() > 1750) {
       $(".qualitätSlogan").addClass("qualitätSloganAni");
    } else {
       $(".qualitätSlogan").removeClass("qualitätSloganAni");
    }
});



$(window).scroll(function(){
    if ($(this).scrollTop() > 1810) {
       $(".quantitätSloganStrich").addClass("quantitätSloganStrichAni");
    } else {
       $(".quantitätSloganStrich").removeClass("quantitätSloganStrichAni");
    }
});




$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 2400) {
            $("body").css('background-color', 'black');
        } else {
            $("body").css('background-color', 'white');
        }
    });
});



$(window).scroll(function(){
    if ($(this).scrollTop() > 2400) {
       $(".grauKasten").addClass("grauKastenAni");
    } else {
       $(".grauKasten").removeClass("grauKastenAni");
    }
});



$(window).scroll(function(){
    if ($(this).scrollTop() > 2650) {
       $(".greenProfile").addClass("greenProfileAni");
    } else {
       $(".greenProfile").removeClass("greenProfileAni");
    }
});


$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider').slick('slickGoTo', slideno - 1);
});



$(".mitarbeiter").click(function(){
    $(".mitBack").toggleClass("mitBackAni")
})

$(".mit1").click(function(){
    $(".mitBack").toggleClass("mitBackAni")
})

$(".mit2").click(function(){
    $(".mitBack").toggleClass("mitBackAni")
})

$(".mit3").click(function(){
    $(".mitBack").toggleClass("mitBackAni")
})




$(".mit1").hover(function(){
    $(".mit1Back").toggleClass("mit1BackAni")
})

$(".mit1").hover(function(){
    $(".positionMit1").toggleClass("positionMit1Ani")
})

$(".mit2").hover(function(){
    $(".mit2Back").toggleClass("mit2BackAni")
})

$(".mit2").hover(function(){
    $(".positionMit2").toggleClass("positionMit2Ani")
})


$(".mit3").hover(function(){
    $(".mit3Back").toggleClass("mit3BackAni")
})

$(".mit3").hover(function(){
    $(".positionMit3").toggleClass("positionMit3Ani")
})

$(".mitZu").click(function(){
    $(".mitBack").toggleClass("mitBackAni")
})

$(".mitZu").hover(function(){
    $(".strich1Zu").toggleClass("strich1ZuAni")
})

$(".mitZu").hover(function(){
    $(".strich2Zu").toggleClass("strich2ZuAni")
})

$(".prev").hover(function(){
    $(".strich3prev").toggleClass("strich3prevAni")
})

$(".prev").hover(function(){
    $(".prevArrow").toggleClass("prevArrowAni")
})


$(".next").hover(function(){
    $(".strich3next").toggleClass("strich3nextAni")
})

$(".next").hover(function(){
    $(".nextArrow").toggleClass("nextArrowAni")
})


$(window).scroll(function(){
    if ($(this).scrollTop() > 2500) {
       $(".kennenlernen").addClass("kennenlernenAni");
    } else {
       $(".kennenlernen").removeClass("kennenlernenAni");
    }
});



$(window).scroll(function(){
    if ($(this).scrollTop() > 2500) {
       $(".kennenlernen2").addClass("kennenlernen2Ani");
    } else {
       $(".kennenlernen2").removeClass("kennenlernen2Ani");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 2500) {
       $(".name1").addClass("name1Ani");
    } else {
       $(".name1").removeClass("name1Ani");
    }
});


$(window).scroll(function(){
    if ($(this).scrollTop() > 2500) {
       $(".position1").addClass("position1Ani");
    } else {
       $(".position1").removeClass("position1Ani");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 2500) {
       $(".nameStrich").addClass("nameStrichAni");
    } else {
       $(".nameStrich").removeClass("nameStrichAni");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 2500) {
       $(".textProfil1").addClass("textProfil1Ani");
    } else {
       $(".textProfil1").removeClass("textProfil1Ani");
    }
});




$(window).scroll(function(){
    if ($(this).scrollTop() > 2500) {
       $(".plusProfil").addClass("plusProfilAni");
    } else {
       $(".plusProfil").removeClass("plusProfilAni");
    }
});


$(window).scroll(function(){
    if ($(this).scrollTop() > 2500) {
       $(".bild1").addClass("bild1Ani");
    } else {
       $(".bild1").removeClass("bild1Ani");
    }
});


$(".FooterArrow").hover(function(){
    $(".FooterArrowInnen3").toggleClass("FooterArrowInnen3Ani")
})

$(".FooterArrow").hover(function(){
    $(".FooterArrow").toggleClass("FooterArrowAni")
})

