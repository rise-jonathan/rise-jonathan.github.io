const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Modal

$('.contacts__btn').each(function (i) {
    $(this).on('click', function () {
        $('#contacts-form .modal__descr').text($('.modal__subtitle').eq(i).text());
        $('.overlay, #contacts-form').fadeIn('slow');
    })
});

$('.modal__close').on('click', function () {
    $('#thanks').fadeOut('slow');
});



// Smooth scroll and pageup

$(window).scroll(function () {
    if ($(this).scrollTop() > 1600)  
    {
        $('.pageup').fadeIn();
    } else
    {
        $('.pageup').fadeOut();
    }
});


$("a[href='#up']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
});

new WOW().init();
