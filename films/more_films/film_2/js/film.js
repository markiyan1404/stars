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
  $(".personajes").animate({opacity: 1,}, 200);
}, 1000);

   let active_slide_title = $(".active_slide .slide_text_h1").text();
   $(".move_name").html(active_slide_title);
});

$(".menu_button, .menu_slide_active").click(function(){

$(".line_1").css("z-index", "-100");

  let window_width_menu = $(window).width();
  if(window_width_menu > 768){
  $(".content").addClass("menu_active");
  $(".content").removeClass("menu_normal");
  $(".content").removeClass("menu_normal1");
  $(".menu_close_block, .menu_content").fadeIn();
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
  }
});


$(".menu_li_1").click(function(){
 $(".back_animation").css("display", "block");
 let link_href = 1;
 localStorage.setItem("link_href", link_href)
    setTimeout(function(){
    location.href = "../../../";
  }, 1000);
});

$(".menu_li_2").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "../../../planets/planets.html";
  }, 1000);
});

$(".menu_li_3").click(function(){
 $(".back_animation").css("display", "block");
 let link_href = 1;
 localStorage.setItem("link_href", link_href)
    setTimeout(function(){
    location.href = "../../../characters/characters.html";
  }, 1000);
});

$(".menu_li_4").click(function(){
 $(".back_animation").css("display", "block");
 let link_href = 1;
 localStorage.setItem("link_href", link_href)
    setTimeout(function(){
    location.href = "../../films.html";
  }, 1000);
});

$(".back").click(function(){
  $(".back_animation").fadeIn();
  setTimeout(function(){
  location.href = "../../films.html";
}, 1000);
});
 
 