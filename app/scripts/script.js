$(document).ready(function() {
    // Create and move to right side
    $("header").after("<div id='page'></div>");
    $("body").children().not("header, #page, script").appendTo("#page");

    // Cache selectors
    const navContainer = $(".nav-container");
    const navItemsWithOl = $("nav ul > li:has(ol)");
    const btnBurger = $("nav .burgerbtn");
    const btnToggleNav = $("nav .toggle-nav");


    // Fixed nav-list
    navItemsWithOl.each(function() {
        const $this = $(this);
        $this.addClass("fixed-list");
        // $this.children("a").append(' <i class="fa-solid fa-chevron-down"></i>');
        $this.children("ol").children("li").addClass("bordernav");
    });

    // Create chevron-down to strong with submenu 
    $(".nav-links ul > li:has(ol) > a > strong").append(' <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>');


    // Toggle sub-menu visibility and icons
    const navFlip = $(".nav-links ul > li > a");
    navFlip.each(function() {
        $(this).on("click", function(event) {
            const $this = $(this);
            if (!navContainer.hasClass("panel-menu")) {
                event.preventDefault();
                $this.siblings("ol").slideToggle();
                const icon = $this.find(".fa-chevron-down").toggleClass("rotate-180");
                $this.parent().toggleClass("fixed-list-padding", icon.hasClass("rotate-180"));
            }
        });
    });


    function toggleButtonText(button) {
        button.text(button.text() === "Rozwiń" ? "Zwiń" : "Rozwiń");
    }

    function updateNavWidth() {
        const navWidth = navContainer.hasClass("panel-menu") ? '50px' : '200px';
        $(':root').css('--nav-width', navWidth);
    }

    function toggleMenu() {
        btnBurger.toggleClass("active-menu");
        navContainer.toggleClass("panel-menu");
        updateNavWidth();
    }

    btnBurger.on('click', function() {
        toggleMenu();
        btnToggleNav.each(function() {
            toggleButtonText($(this));
        });
    });

    btnToggleNav.on('click', function() {
        btnToggleNav.not(this).text("Rozwiń");
        toggleButtonText($(this));
        toggleMenu();
    });

    /*******************************************
     *******************************************
     *********    TABLET VERSION   *************
     *******************************************
     *******************************************/
    if(window.innerWidth <= 1024){
        console.log('tablet version');
    }
});
