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


/*blackScroll*/


$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 1000) {
            $("body").css('background-color', 'black');
        } else {
            $("body").css('background-color', 'white');
        }
    });
});

/*Way to Website*/


$(window).scroll(function(){
    if ($(this).scrollTop() > 2750) {
       $(".kreisW").addClass("kreisWAni");
    } else {
       $(".kreisW").removeClass("kreisWAni");
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 2750) {
       $(".zu").addClass("zuAni");
    } else {
       $(".zu").removeClass("zuAni");
    }
});


$(window).scroll(function(){
    if ($(this).scrollTop() > 2760) {
       $(".slider").addClass("sliderAni");
    } else {
       $(".slider").removeClass("sliderAni");
    }
});




/*Project Box*/


$(".anfordern3 a").hover(function(){
    $(".anfordernStrichZ").toggleClass("anfordernStrichZAni")
})



/*FAQ*/


$(".arrow").hover(function(){
    $(".faqStrich").toggleClass("faqStrichAni")
})

$(".questions").hover(function(){
    $(".faqStrich").toggleClass("faqStrichAni")
})


$(".questions").click(function(){
    $(".faw").toggleClass("fawAni")
})

$(".questions").click(function(){
    $(".questions").toggleClass("questionsColor")
})

$(".arrow").click(function(){
    $(".faw").toggleClass("fawAni")
})

$(".arrow").click(function(){
    $(".questions").toggleClass("questionsColor")
})

$(".questions").click(function(){
    $(".arrow").toggleClass("arrowAni")
})

$(".arrow").click(function(){
    $(".arrow").toggleClass("arrowAni")
})



$(".arrowZ").hover(function(){
    $(".faqStrichZ").toggleClass("faqStrichAni")
})

$(".questionsZ").hover(function(){
    $(".faqStrichZ").toggleClass("faqStrichAni")
})


$(".questionsZ").click(function(){
    $(".fawZ").toggleClass("fawZAni")
})

$(".questionsZ").click(function(){
    $(".questionsZ").toggleClass("questionsColor")
})

$(".arrowZ").click(function(){
    $(".fawZ").toggleClass("fawZAni")
})

$(".arrowZ").click(function(){
    $(".questionsZ").toggleClass("questionsColor")
})

$(".questionsZ").click(function(){
    $(".arrowZ").toggleClass("arrowZAni")
})

$(".arrowZ").click(function(){
    $(".arrowZ").toggleClass("arrowZAni")
})



$(".arrowD").hover(function(){
    $(".faqStrichD").toggleClass("faqStrichAni")
})

$(".questionsD").hover(function(){
    $(".faqStrichD").toggleClass("faqStrichAni")
})


$(".questionsD").click(function(){
    $(".fawD").toggleClass("fawDAni")
})

$(".questionsD").click(function(){
    $(".questionsD").toggleClass("questionsColor")
})

$(".arrowD").click(function(){
    $(".fawD").toggleClass("fawDAni")
})

$(".arrowD").click(function(){
    $(".questionsD").toggleClass("questionsColor")
})

$(".questionsD").click(function(){
    $(".arrowD").toggleClass("arrowDAni")
})

$(".arrowD").click(function(){
    $(".arrowD").toggleClass("arrowDAni")
})


$(".arrowV").hover(function(){
    $(".faqStrichV").toggleClass("faqStrichAni")
})

$(".questionsV").hover(function(){
    $(".faqStrichV").toggleClass("faqStrichAni")
})



$(".questionsV").click(function(){
    $(".fawV").toggleClass("fawVAni")
})

$(".questionsV").click(function(){
    $(".questionsV").toggleClass("questionsColor")
})

$(".arrowV").click(function(){
    $(".fawV").toggleClass("fawVAni")
})

$(".arrowV").click(function(){
    $(".questionsV").toggleClass("questionsColor")
})

$(".questionsV").click(function(){
    $(".arrowV").toggleClass("arrowVAni")
})

$(".arrowV").click(function(){
    $(".arrowV").toggleClass("arrowVAni")
})



$(".arrowF").hover(function(){
    $(".faqStrichF").toggleClass("faqStrichAni")
})

$(".questionsF").hover(function(){
    $(".faqStrichF").toggleClass("faqStrichAni")
})



$(".questionsF").click(function(){
    $(".fawF").toggleClass("fawFAni")
})

$(".questionsF").click(function(){
    $(".questionsF").toggleClass("questionsColor")
})

$(".arrowF").click(function(){
    $(".fawF").toggleClass("fawFAni")
})

$(".arrowF").click(function(){
    $(".questionsF").toggleClass("questionsColor")
})

$(".questionsF").click(function(){
    $(".arrowF").toggleClass("arrowFAni")
})

$(".arrowF").click(function(){
    $(".arrowF").toggleClass("arrowFAni")
})



$(".arrowS").hover(function(){
    $(".faqStrichS").toggleClass("faqStrichAni")
})

$(".questionsS").hover(function(){
    $(".faqStrichS").toggleClass("faqStrichAni")
})


$(".questionsS").click(function(){
    $(".fawS").toggleClass("fawSAni")
})

$(".questionsS").click(function(){
    $(".questionsS").toggleClass("questionsColor")
})

$(".arrowS").click(function(){
    $(".fawS").toggleClass("fawSAni")
})

$(".arrowS").click(function(){
    $(".questionsS").toggleClass("questionsColor")
})

$(".questionsS").click(function(){
    $(".arrowS").toggleClass("arrowSAni")
})

$(".arrowS").click(function(){
    $(".arrowS").toggleClass("arrowSAni")
})


$(".FooterArrow").hover(function(){
    $(".FooterArrowInnen3").toggleClass("FooterArrowInnen3Ani")
})

$(".FooterArrow").hover(function(){
    $(".FooterArrow").toggleClass("FooterArrowAni")
})

