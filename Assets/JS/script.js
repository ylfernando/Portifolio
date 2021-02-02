$(document).ready(() => {
    $('.menu-mobile').on('click', () => {
        var menu = $('.menu-header-mobile');
        if(menu) {
        	menu.css('display', 'block');
        }
        else {menu.css('display', 'none');}
    });
});