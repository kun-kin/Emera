$(window).scroll(function() {
    // var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > 400) {
        $('.header-main').addClass('fixed');
    } else {
        $('.header-main').removeClass('fixed');
    }
});
/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});



// var previousScroll = 0;
// $(window).scroll(function(event) {
//     var scroll = $(this).scrollTop();
//     if (scroll > previousScroll) {
//         $(".header").filter(':not(:animated)').slideUp();
//     } else {
//         $(".header").filter(':not(:animated)').slideDown();

//     }
//     previousScroll = scroll;
// });


$(document).mouseup(function(e) {
    if ($(e.target).closest(".room-form").length ===
        0) {
        $(".room-form").children(".custom-selection__wrap").hide();
    }
    if ($(e.target).closest(".guests-form").length ===
        0) {
        $(".guests-form").children(".custom-selection__wrap").hide();
    }
});

$(document).ready(function() {




    $('.couter').counterUp({
        delay: 10,
        time: 2000
    });

    $(function() {
        $("#date1").datepicker();
        $("#date2").datepicker();
    });

    $(".menu-toggle").click(function() {
        $(this).toggleClass("active");
        $(".menu").toggleClass("show-menu");
    });
    $(".menu-item .menu-link").click(function() {
        $(this).parent(".menu-item").toggleClass("show-menu");
    });



    $(".shape-top").click(function() {
        $(this).addClass('active');
        $('.shape-center').removeClass('active');
        $('.shape-bot').removeClass('active');
        $('#sv-branding').show();
        $('#sv-communication').hide();
        $('#sv-marketing').hide();
    });
    $(".shape-center").click(function() {
        $(this).addClass('active');
        $('.shape-top').removeClass('active');
        $('.shape-bot').removeClass('active');
        $('#sv-branding').hide();
        $('#sv-communication').show();
        $('#sv-marketing').hide();
    });
    $(".shape-bot").click(function() {
        $(this).addClass('active');
        $('.shape-top').removeClass('active');
        $('.shape-center').removeClass('active');
        $('#sv-branding').hide();
        $('#sv-communication').hide();
        $('#sv-marketing').show();
    });



    $('.project-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        dots: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.list-product').slick({
        rows: 2,
        slidesToShow: 5,
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.news-list').slick({
        // centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="fa-solid fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa-solid fa-chevron-right"></i></div>',

        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.list-partner').slick({
        slidesToShow: 5,
        dots: false,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="fa-solid fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa-solid fa-chevron-right"></i></div>',

        responsive: [{
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });



    let st = ScrollTrigger.create({
        trigger: ".trigger",
        start: "top center",
        end: "+=500"
    });

    console.log(st.trigger);



});


// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");

//     for (var i = 0; i < reveals.length; i++) {
//         var windowHeight = window.innerHeight;
//         var elementTop = reveals[i].getBoundingClientRect().top;
//         var elementVisible = 150;

//         if (elementTop < windowHeight - elementVisible) {
//             reveals[i].classList.add("active");
//         } else {
//             reveals[i].classList.remove("active");
//         }
//     }
// }

// window.addEventListener("scroll", reveal);

// rotate-service
TweenMax.to(".circle", 2, {
    rotation: "+=120",
    transformOrigin: "50% 50%",
    transform: "-50% -50%",
    onComplete: function() {
        this.invalidate().delay(2).restart(true);
    }
});


function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 200;

    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -200;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 200;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 3,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFrom(elem) },
            onEnterBack: function() { animateFrom(elem, -1) },
            onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});