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
    if ($(this).scrollTop() > 1250) {
       $(".strich1").addClass("strich1Change");
    } else {
       $(".strich1").removeClass("strich1Change");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 1250) {
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


$(".FooterArrow").hover(function(){
    $(".FooterArrowInnen3").toggleClass("FooterArrowInnen3Ani")
})

$(".FooterArrow").hover(function(){
    $(".FooterArrow").toggleClass("FooterArrowAni")
})

