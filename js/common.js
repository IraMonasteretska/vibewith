const burgerBtn = document.querySelector('.burgerbtn');
const menu = document.querySelector('.header__nav');
const closeMenu = document.querySelector('.closemenu')

burgerBtn.addEventListener('click', function () {
    menu.classList.add('show');
});

closeMenu.addEventListener('click', function () {
    menu.classList.remove('show');
});

AOS.init();

$('.joinlink, .scrolllink').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); 
    if(dest !== undefined && dest !== '') { // check existence
        $('html').animate({ 
            scrollTop: $(dest).offset().top - 80 // scroll to...
        }, 500 // speed
        );
    }
    return false;
});

