$(function() {
    $('nav li a[href="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});