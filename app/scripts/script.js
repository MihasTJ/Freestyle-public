$(document).ready(function(){
    const navSlider = $("nav .slider");
    const navSliderIcon = $("nav .slider i");
    const navItems = $("nav .slider-items");

    navSlider.on("click",()=>{
        navSliderIcon.toggleClass("rotate-180");
        navItems.fadeToggle(100);
    })
});