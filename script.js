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

setTimeout(function(){
    $(".loader").fadeToggle();
},3000)

$(".menu").click(function(){
    $(".logo").toggleClass("logoAni")
})

$(".menu").click(function(){
    $(".logo2").toggleClass("logoAni2")
})

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

$(".arrowKreis").hover(function(){
    $(".arrow").toggleClass("arrowAni")
})

$(window).scroll(function(){
    if ($(this).scrollTop() > 650) {
       $(".strich1").addClass("strich1Change");
    } else {
       $(".strich1").removeClass("strich1Change");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 650) {
       $(".strich2").addClass("strich2Change");
    } else {
       $(".strich2").removeClass("strich2Change");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 650) {
       $(".menu").addClass("menuChange");
    } else {
       $(".menu").removeClass("menuChange");
    }
});

jQuery(document).ready(function() {
    var width = $(window).width();
    if (width < 550) {
        $('body').css('overflow-x', 'hidden');
    } else {
        $('body').css('overflow-x', 'scroll');
    }