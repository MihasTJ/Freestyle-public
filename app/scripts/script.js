$(document).ready(function(){
    const navSlider = $("nav .slider");
    const navSliderIcon = $("nav .slider i");
    const navItems = $("nav .slider-items");
    const navList = $('nav ul');
    const btnBurger = $(".burgerbtn");
    const cta =  $('nav .cta');
    const mobileMenu =  $('.mobile-menu');
/* animated arrow */
    navSlider.on("click",()=>{
        navSliderIcon.toggleClass("rotate-180");
        navItems.fadeToggle(100);
    })
/* burger menu */
    btnBurger.on('click',()=>{
        btnBurger.toggleClass("active-menu");
        if(mobileMenu.css("width") == "315px"){
            mobileMenu.css("width","0") 
        }else{
             mobileMenu.css("width","315px")
            }
    })
/* moving mobile nav */
    if(window.innerWidth <= 1024){
        const mobileMenuItems =  $('.mobile-menu__items');
        cta.removeClass("flex");
        navList.removeClass("flex");
        navSlider.children().removeClass("flex")
        cta.appendTo(mobileMenuItems);
        navList.appendTo(mobileMenuItems);
        
    }
});