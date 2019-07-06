let items = 1;
let iScrollPos = 0;
let itemId = 0;
$(document).ready(function () {
    tOpen($("li:first"));
    let owl2=$(".owl2");
    var owl = $('.out');
    let olwGif=$(".slide-gif");
    olwGif.owlCarousel({
       
        loop:true,
        autoplay:true,
        autoWidth:true,
        autoplaySpeed:1000,
        nav:true,
        navText:['<i class="fas fa-arrow-left mr-3" style="margin-top:40px"></i>','<i class="fas fa-arrow-right"></i>'],
        stopOnHover:true,
        dots: false,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0:{
              items: 3,
              margin:10
            },
            557:{
              items: 4,
              margin:15,
            },
            940:{
              items: 6,
              margin:20
            }
        }
    })
    owl2.owlCarousel({
        items:1,
        margin:10,
        loop:true,
        center:true,
        autoWidth:false,
        autoplay:true,
        autoplaySpeed:1500,
        nav:true,
        navText:['<i class="fas fa-arrow-left mr-3" style="margin-top:20px"></i>','<i class="fas fa-arrow-right"></i>'],
       
        stopOnHover:true,
    });
    owl.owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
    });
    $('.out').owlCarousel();
    $(".zoom").find("div").mouseover(function () {
        $(".zoom").find("div").find("img").css("filter", "none");
    });
    $(".zoom").find("div").mouseleave(function () {
        $(".zoom").find("div").find("img").css("filter", "grayscale(100%)");
    });
    $(".shlid-show").mouseover(function () {
        $(".carousel").carousel("pause");
    });
    $("body").mouseout(function () {
        $(".carousel").carousel("cycle");

    })
    $(".shlid-show").mousedown(function () {
        $(".carousel").carousel("pause");
    });
    $("body").mouseup(function () {
        $(".carousel").carousel("cycle");

    });
    $(".next").click(function () {
        $(".carousel").carousel("next");
    });
    $(".prev").click(function () {
        $(".carousel").carousel("prev");
    });
    $(window).scroll(function () {
        let iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > iScrollPos) {

            let z = "50% " + ($(document).scrollTop() / 2) + "px";
            $("#Eframe").css("background-position", z);
             let z2="50% " +( -1*($(document).scrollTop()- $("#price").offset().top)/2) + "px";
            $(".parallax2").css("background-position", z2);

        } else if (iCurScrollPos < iScrollPos) {
            let z = "50% " + ($(document).scrollTop() / 2) + "px";
            $("#Eframe").css("background-position", z);
            let z2="50% " +( -1*($(document).scrollTop()- $("#price").offset().top)/2) + "px";
            $(".parallax2").css("background-position", z2);


        }
        iScrollPos = iCurScrollPos;
        if (iCurScrollPos > 20) {
            $(".navbar").addClass("bg-navbar");
        } else {
            $(".navbar").removeClass("bg-navbar");
        }
    });
    $("li").mouseover(function () {
        tOpen($(this));
    });

    $("li").mouseleave(function () {
        tClose($(this));
    });
    /////////////////////////////// slide showe 2 /////////////////////////////////
    let slidShowTimer = setInterval(slidShow, 3000);
    $(".item-count").click(function () {
        let clicId = Number($(this).attr("id").split("-")[2]);
        clearInterval(slidShowTimer);
        $("#item-" + itemId).stop(true, true);
        let item = "#item-" + itemId;
        $(item).animate({
            left: '-100vw'
        }, function () {
            $(item).css({
                "display": "none",
                "left": "0px"
            });
            $("#item-contorol-" + itemId).css("border-top", "none");
            itemId = clicId;
            console.log(itemId);
            $("#item-" + itemId).css("display", "flex");
            $("#item-contorol-" + itemId).css("border-top", "#ffffff solid 3px");
            slidShowTimer = setInterval(slidShow, 3000);

        });
    })
    ////////////////////////////////////////////////////////////////
    $(".contact-up-hover").mouseover(function () {

        $(this).find(".contact-up").css("height","70px");
       $(this).find("div").find("img").css("transform","scale(1.1)");
    });
    $(".contact-up-hover").mouseleave(function () {

        $(this).find(".contact-up").css("height","0px");
       $(this).find("div").find("img").css("transform","scale(1)");
    });
});

function tOpen(x) {
    if ($(window).outerWidth() < 768) {

        x.find(".t").css("top", "0px");
        x.find(".t").slideDown("fast");
        x.find("a").css('border-top', "3px solid rgb(255, 255, 255)");
    } else {
        x.find(".t").css("top", "0px");
        x.find("a").css('border-top', "3px solid rgb(255, 255, 255)");
    }
}

function slidShow() {
    let item = "#item-" + itemId;
    // $(item).find(".text").find("h3").removeClass("fadeInUp");
    // $(item).find(".text").find("p").removeClass("fadeInUp");
    // $(item).find(".text").find("button").removeClass("fadeInUp");
    // $(item).find(".images").find("div").find("img").removeClass("fadeInLeft");
    $(item).animate({
        left: '-100vw'
    }, function () {
        $(item).css({
            "display": "none",
            "left": "0px"
        });
        $("#item-contorol-" + itemId).css("border-top", "none");
        itemId = ((itemId + 1) % 4);
        $("#item-" + itemId).css("display", "flex");
        $("#item-contorol-" + itemId).css("border-top", "#ffffff solid 3px")

    });
}

function tClose(x) {

    if ($(window).outerWidth() < 768) {
        x.find(".t").css("display", "none");

    }
    x.find(".t").css("top", "-20px");
    x.find("a").css('border-top', "3px solid transparent");
}