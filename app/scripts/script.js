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

    // **** toggle buttons form
    function toggleForm(formToShow, formToHide) {
        $(formToHide).css('display', 'none');
        $(formToShow).css('display', function(index, value) {
            return value === 'flex' ? 'none' : 'flex'; 
        });
    }

    $('.buttons .category').on('click', function(event) {
        event.stopPropagation(); 
        toggleForm('.category-form form', '.filter-form form');
    });

    $('.buttons .filter').on('click', function(event) {
        event.stopPropagation(); 
        toggleForm('.filter-form form', '.category-form form'); 
    });

    $('.category-form form, .filter-form form').on('click', function(event) {
        event.stopPropagation(); 
    });

    $(document).on('click', function() {
        $('.category-form form, .filter-form form').css('display', 'none'); 
    });
    // toggle buttons form *****

    // ****** POPUP FUNCITONS ******
    // needed to return (not usable variables)
    const popup = $('.popup');
    const popupBg = $(".popup .popup-bg");
    const popupCont = $(".popup .popup-container");
    const popupBtnClose = $(".popup .popup-btnClose");

    $(popupBtnClose).add(popupBg).click(function() {
        $('.popup').removeClass('active');
    });
    // popup eye
    $(".login-input-eye").on("click", function () {
        const input = $(".login-input");
        const type = input.attr("type") === "password" ? "text" : "password";
        input.attr("type", type);
    }); 

    // ***** Popup events *****
    $('header .login').click(function() {
        $('header .popup-login').addClass('active');
    });


    //****** CLOSE POPUP FUNCTIONS*****************
    

    /*******************************************
     *******************************************
     *********    TABLET VERSION   *************
     *******************************************
     *******************************************/
    if(window.innerWidth <= 1024){
        /* to delete */
        $("header .logo a strong").text("FS"); 
        /* to delete */
    }
});
