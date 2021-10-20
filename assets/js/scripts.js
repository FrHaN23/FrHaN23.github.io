$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$(document).click(function (event) {
    let clickover = $(event.target);
    let $navbar = $('.navbar-collapse');               
    let _opened = $navbar.hasClass('show');
    if (_opened === true && !clickover.hasClass('navbar-toggler')) {      
        $navbar.collapse('hide');
    }
});


document.addEventListener("DOMContentLoaded", function(){
    el_autohide = document.querySelector('.autohide'); 
    if(el_autohide){
        let last_scroll_top = 0;
        window.addEventListener('scroll', function(){
            let scroll_top = window.scrollY;
            if(scroll_top >= last_scroll_top ) {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
                $(".navbar-collapse").collapse('hide');
                $('.navbar-toggler').click(function(){
                    window.scroll(0,0);
                });
            }
            else {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            last_scroll_top = scroll_top;
        });
    }
});
