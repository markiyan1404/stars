// background setting
let color = $(".active_slide").attr("data");
let margin = 1;

let window_width;
$(window).resize(function(){
    window_width = $(window).width();
    spawn_colo();
    background_colo();
    if(window_width < 768){
        $(".slider, .background_colors, .back, .menu_button").fadeIn();
        $(".background_colors, .back, .menu_button").css("display", "flex");
    }else{
      $("html").animate({scrollTop: 0}, 200);
    }
});

$(window).ready(function(){
    $(window).css("overflow", "hidden");
    window_width = $(window).width();
    setTimeout(function(){
       $(".show_animation").fadeOut();
       $("body").css('background-image', "url('../../../../main/img/menu_background.jpg')");
    }, 400);
setTimeout(function(){
    spawn_colo();
    background_colo();    
}, 100);

    if(window_width <= 768){
      $(".show_animation").css("display", "block");
      $(".slider, .background_colors, .back, .menu_button").css("display", "none");
      setTimeout(function(){
          $(".slider, .background_colors, .back, .menu_button").fadeIn();
          $(".background_colors, .back, .menu_button").css("display", "flex");
      }, 200);
    }
     $("html").animate({scrollTop: 0}, 200);
});

$(".menu_button, .menu_slide_active").click(function(){

  let window_width_menu = $(window).width();
  if(window_width_menu > 768){
  $(".content").addClass("menu_active");
  $(".content").removeClass("menu_normal");
  $(".content").removeClass("menu_normal1");
  $(".menu_close_block, .menu_content").fadeIn();
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
  $("html, body, .content").css("overflow", "hidden");
});

$(".close_mini_menu").click(function(){
    $(".menu_content").addClass("mini_menu_notActive");
    $(".menu_content").removeClass("mini_menu_active");
    $(".menu_content").fadeOut();
    $(this).fadeOut();
    $(".line_1").css("z-index", "99");
    $("html, body, .content").css("overflow-y", "auto");
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
    $("body").css("overflow", "hidden");
  }
});

$(".back").click(function(){
  if(window_width > 768){
  $("body").addClass("back_anim");
  Dontactive_personajes();
  setTimeout(function(){
     location.href = "../../droid.html";
  }, 1000);

 let link_href = 1;
 localStorage.setItem("link_href", link_href);
}else{

$(".back_animation").css("display", "block");
  setTimeout(function(){
     location.href = "../../droid.html";
  }, 1000);
  let link_href = 0;
}
})

$(".menu_li_1").click(function(){
 $(".back_animation").css("display", "block");
 let link_href = 1;
 localStorage.setItem("link_href", link_href)
    setTimeout(function(){
    location.href = "../../../../";
  }, 1000);
});

$(".menu_li_2").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "../../../../planets/planets.html";
  }, 1000);
});

$(".menu_li_3").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "../../../characters.html";
  }, 1000);
});

$(".menu_li_4").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "../../../../films/films.html";
  }, 1000);
});

let size = 0;
function spawn_colo(){
   $(".kolo").remove();
   let bg_width = $(".background_colors").width();
   size         = bg_width / 199;
   let kilkist  = Math.round((bg_width / size) * 0.45);

   for(let i = 0; i<kilkist; i++){
    $(".line").append(`<span class='kolo ${i}'></span>`);
   }
}

function background_colo(){
   $(".kolo").css("width", size);
   $(".kolo").css("height", size);
   $(".kolo").css("background", color);
}



$(".arrow").click(function(){
   color = $(".active_slide").attr("data");
   background_colo();
});

function Dontactive_personajes(){
  let perosnajes_Id_num          = "../../img/personajes_img_" + $(".slider_img").attr('id').split("g")[1] + ".png";
  let dont_active_personajes_src = $(".slider_img").attr("src", perosnajes_Id_num);
}
