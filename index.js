$(document).ready(function() {
    $(".links").hide();
    $(".cont").hide();
    $(".container0").fadeIn(1000);
    
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
    
    $(".links0>ul>.link0").click(function() {
        $(".links").fadeOut(500);
        $(".cont").fadeOut(500);
        $(".container1").fadeIn(800);
    });
    
    $(".container1>.text5>h2").click(function() {
        window.location.href = "pdi16-20.pdf";
    });
});