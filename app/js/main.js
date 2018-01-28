$(document).ready(function() {

    var $bars = $(".bars");
    var $sidebarHeader = $(".sidebar-header");

    $bars.on('click', function(){
        $('#menu').slideToggle(700);
    });

    $sidebarHeader.on('click', function(){
        var $sidebarContent = $(this).siblings(".sidebar-content");

        $sidebarContent.slideToggle(500);
    });
});
