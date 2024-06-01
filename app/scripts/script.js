$(document).ready(function(){
    const navItemsWithOl = $("nav ul > li:has(ol)");

    /* fixed nav-list */
    navItemsWithOl.each(function() {
        $(this).addClass("fixed-list");
        $(this).children("a").append(' <i class="fa-solid fa-chevron-down"></i>');
    });

    const navFlip = $("nav .fixed-list > a");
    navFlip.each(function() {
        $(this).click(function(event) {
            event.preventDefault();
            $(this).siblings("ol").slideToggle();
            const icon = $(this).find(".fa-chevron-down");
            icon.toggleClass("rotate-180");
            
            if (icon.hasClass("rotate-180")) {
                $(this).parent().addClass("fixed-list-padding");
            } else {
                $(this).parent().removeClass("fixed-list-padding");
            }
        });
    });
/* burger menu */
    const btnBurger = $("nav .burgerbtn");
    btnBurger.on('click',()=>{
        btnBurger.toggleClass("active-menu");
    })
});