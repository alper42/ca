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
    if ($(this).scrollTop() > 900) {
       $(".strich1").addClass("strich1Change");
    } else {
       $(".strich1").removeClass("strich1Change");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 900) {
       $(".strich2").addClass("strich2Change");
    } else {
       $(".strich2").removeClass("strich2Change");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 2750) {
       $(".strich1").addClass("strich1Change2");
    } else {
       $(".strich1").removeClass("strich1Change2");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 2750) {
       $(".strich2").addClass("strich2Change2");
    } else {
       $(".strich2").removeClass("strich2Change2");
    }
});


$(window).scroll(function(){
    if ($(this).scrollTop() > 4050) {
       $(".strich1").addClass("strich1Change3");
    } else {
       $(".strich1").removeClass("strich1Change3");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 4050) {
       $(".strich2").addClass("strich2Change3");
    } else {
       $(".strich2").removeClass("strich2Change3");
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
    $(".importantText").toggleClass("importantTextAni")
})
$(".start a").hover(function(){
    $(".img1").toggleClass("img1Ani")
})



/*Project Box*/


$(".anfordern3 a").hover(function(){
    $(".anfordernStrichZ").toggleClass("anfordernStrichZAni")
})

$(".anfordern3 a").click(function(){
    (".lol").fadeToggle()
})