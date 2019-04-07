$(function () {


    $("#toggle-button").on("click", function () {
        $(".toggle-menu").toggleClass("is-active");
        $(".toggle-menu").slideToggle(400);
    });

});
