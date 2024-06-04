$(document).ready(function(){
    /* create and move to right side */
    $("header").after("<div id='page'></div>");
    $("body").children().not("header, #page, script").appendTo("#page");

    const navItemsWithOl = $("nav ul > li:has(ol)");
    /* fixed nav-list */
    navItemsWithOl.each(function() {
        $(this).addClass("fixed-list");
        $(this).children("a").append(' <i class="fa-solid fa-chevron-down"></i>');
    });

    /* node list */
    const navFlip = $("nav .fixed-list > a");
    navFlip.siblings("ol").children("li").addClass("bordernav");
    
    navFlip.each(function() {
        $(this).click(function(event) {
            if (!$(this).closest(".nav-container").hasClass("panel-menu")) {
                event.preventDefault();
                
                $(this).siblings("ol").children("li").toggleClass("bordernav");
                $(this).siblings("ol").slideToggle();
                
                const icon = $(this).find(".fa-chevron-down");
                icon.toggleClass("rotate-180");
                
                if (icon.hasClass("rotate-180")) {
                    $(this).parent().addClass("fixed-list-padding");
                } else {
                    $(this).parent().removeClass("fixed-list-padding");
                }
            }
        });
    });
/* burger menu */
    const btnBurger = $("nav .burgerbtn");
    const btnToggleNav = $("nav .toggle-nav");

    function toggleButtonText(button) {
        if (button.text() === "Rozwiń") {
            button.text("Zwiń");
        } else {
            button.text("Rozwiń");
        }
    }
    function sizeNav(){
        if($(".nav-container").hasClass("panel-menu")){
            $(':root').css('--nav-width','50px');
        }else{
            $(':root').css('--nav-width','200px');
        }
    }

    btnBurger.on('click', function() {
        $(this).toggleClass("active-menu");
        btnToggleNav.each(function() {
            toggleButtonText($(this));
        });
        navFlip.closest(".nav-container").toggleClass("panel-menu");
        sizeNav()
    });

    btnToggleNav.on('click', function() {
        btnToggleNav.not(this).text("Rozwiń");
        toggleButtonText($(this));
        btnBurger.toggleClass("active-menu");
        navFlip.closest(".nav-container").toggleClass("panel-menu");
        sizeNav()
    });

});