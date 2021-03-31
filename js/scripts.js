$(document).ready(function(){
    /*$(window).scroll(function (){
        if ($(this).scrollTop() > 50){
            $("#header").addClass('fixed-nav').slideDown('slow');
        } else {
            $("#header").removeClass('fixed-nav');
        }
    });*/

    $(".has-dropdown").hover(function () {
        $(this).find(".child-content").stop().slideDown(300);
    }, function(){
        $(this).find(".child-content").stop().slideUp(300);
    });

    $(".child-content .has-dropdown").hover(function () {
        $(this).find(".grand-child-content").stop().slideDown(300);
    }, function(){
        $(this).find(".grand-child-content").stop().slideUp(300);
    });

    $(".search-icon").click(function(event){
        event.preventDefault();
        $(".searchbox-holder").fadeToggle("slow");
        $(".search-input").focus();
    });

	$(".search-input").focus(function (){
        $(".search-suggestions").fadeIn("slow");
    });

    $(".search-input").blur(function (){
        $(".search-suggestions").fadeOut("slow");
    });

  	var menuHeight = $(".menu1").height();
    $(".sidenav").css("top",menuHeight+'px');
    $(".sidenav-overlay").css("top",menuHeight+'px');

    $("#sidebar-toggle").click(function(){
    	$("#sidenav").toggleClass("show-sidenav");
    });
    $("#sidenav-overlay").click(function(event){
    	event.preventDefault();
    	$("#sidenav").removeClass("show-sidenav");
    });

    $('.cat-list .collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".icofont-plus").removeClass("icofont-plus").addClass("icofont-minus");
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".icofont-minus").removeClass("icofont-minus").addClass("icofont-plus");
    });

});
