let window_width;
$(window).resize(function(){
    window_width = $(window).width();
});

$(window).ready(function(){
    $(window).css("overflow", "hidden");
    window_width = $(window).width();
    $(".show_animation").css("background", "none");
    setTimeout(function(){
       $(".show_animation").fadeOut();
    }, 1000);

setTimeout(function(){
	$(".sith_not_active, .jedi_not_active, .droid_not_active").animate({opacity: 1,}, 200);
}, 1000);

});

$(".menu_button, .menu_slide_active").click(function(){

$(".line_1").css("z-index", "-100");

  let window_width_menu = $(window).width();
  if(window_width_menu > 768){
  $(".content").addClass("menu_active");
  $(".content").removeClass("menu_normal");
  $(".content").removeClass("menu_normal1");
  $(".menu_close_block, .menu_content, .menu_show_active").fadeIn();
  $(".menu_notshow_active").css("display", "none");
  $("body, .content").css("overflow", "hidden");
  $(".content").css("height", "100vh");
  $(".conteiner_1").css("position", "fixed");
  $(".conteiner_1").css("perspective", "1500px");

  }
   if(window_width_menu <= 768){
       $(".menu_content").fadeIn();
       $(".menu_content").addClass("mini_menu_active");
       $(".menu_content").removeClass("mini_menu_notActive");
       $(".close_mini_menu").fadeIn();
   }
});

$(".close_mini_menu").click(function(){
    $(".menu_content").addClass("mini_menu_notActive");
    $(".menu_content").removeClass("mini_menu_active");
    $(".menu_content").fadeOut();
    $(this).fadeOut();
    $(".line_1").css("z-index", "99");
});

$(".menu_close_block").click(function(){ 
  $("body").css("overflow-x", "hidden");
  $(".line_1").css("z-index", "99");
  $(".content").addClass("menu_normal");
  $(".menu_close_block, .menu_content").fadeOut();

  setTimeout(() => {
    $(".conteiner_1").css("position", "static");
    $(".conteiner_1").css("perspective", "0px");
    $(".content").removeClass("menu_active");
    $(".menu_content").removeClass("mini_menu_active");
  }, 1200);
});

$(window).resize(function(){
  if(window_width < 768){
  $("body").css("overflow", "auto");
  $("body").css("overflow-x", "hidden");
  $(".content").addClass("menu_normal1");
  $(".content").removeClass("menu_active");
  $(".menu_content").removeClass("mini_menu_active");
  $(".menu_close_block").css("display", "none");
  }
  if(window_width > 768 && $(".content").hasClass("menu_normal1")){
    $(".menu_content").fadeOut(0);
    $(".menu_close_block").css("display", "none");
    $(".line_1").css("z-index", "100");
  }
});

$(".menu_li_1").click(function(){
 $(".back_animation").css("display", "block");
 let link_href = 1;
 localStorage.setItem("link_href", link_href)
    setTimeout(function(){
    location.href = "../";
  }, 1000);
});

$(".menu_li_2").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "../planets/planets.html";
  }, 1000);
});

$(".menu_li_4").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "../films/films.html";
  }, 1000);
});

$(".photos_block1").mouseover(function(){
	$(".sith_active").css("opacity", "1");
});

$(".photos_block1").mouseout(function(){
    $(".sith_active").css("opacity", "0");
});

$(".photos_block2").mouseover(function(){
	$(".jedi_active").css("opacity", "1");
});

$(".photos_block2").mouseout(function(){
    $(".jedi_active").css("opacity", "0");
});

$(".photos_block3").mouseover(function(){
	$(".droid_active").css("opacity", "1");
});

$(".photos_block3").mouseout(function(){
    $(".droid_active").css("opacity", "0");
});

$(".photos_block1").click(function(){$(".sith_active").css("opacity", "1");});
$(".photos_block2").click(function(){$(".jedi_active").css("opacity", "1");});
$(".photos_block3").click(function(){$(".droid_active").css("opacity", "1");});


$(".photos_blocks").click(function(){
	$("body").addClass("link_active");
  $(this).css("transform", "scale(1.1)");
}); 

$(".photos_blocks").click(function(){
    localStorage.setItem("link_href", "0");
    let active_slide_alt  = $(this).attr("date");
    let active_slide_href = active_slide_alt + "/" + active_slide_alt + ".html";
    $(".back_animation").css("display", "block");
    console.log(active_slide_href);
    setTimeout(function(){
    location.href = active_slide_href;
  }, 1000);
});

$(".photos_block1").click(function(){
   $(".sith").css("opacity", "1");
   $("body").addClass("link_sith_active");
});

$(".photos_block2").click(function(){
   $("body").addClass("link_jedi_active");
});

$(".photos_block3").click(function(){
   $("body").addClass("link_droid_active");
});