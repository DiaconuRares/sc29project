$(document).ready(function() {
    $(".links").hide();
    
    $(".header>.link0").click(function() {
        $(".links1").fadeOut(500);
        $(".links2").fadeOut(500);
        $(".links3").fadeOut(500);
        $(".links0").slideToggle(800);
    });
    
    $(".header>.link1").click(function() {
        $(".links0").fadeOut(500);
        $(".links2").fadeOut(500);
        $(".links3").fadeOut(500);
        $(".links1").slideToggle(800);
    });
    
    $(".header>.link2").click(function() {
        $(".links1").fadeOut(500);
        $(".links0").fadeOut(500);
        $(".links3").fadeOut(500);
        $(".links2").slideToggle(800);
    });
    
    $(".header>.link3").click(function() {
        $(".links1").fadeOut(500);
        $(".links2").fadeOut(500);
        $(".links0").fadeOut(500);
        $(".links3").slideToggle(800);
    });
});