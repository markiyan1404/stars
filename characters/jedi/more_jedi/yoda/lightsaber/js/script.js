let window_width;

let click_colo = false;

$(window).resize(function(){
  window_width = $(window).width();
  window_resizeWidth();
});

frame.onresize = function(){
  window_width = $(window).width();
  window_resizeWidth();
}

$(window).ready(function(){
    $(window).css("overflow", "hidden");
    window_width = $(window).width();
    $(".show_animation").css("background", "none");
    setTimeout(function(){
       $(".show_animation").fadeOut();
       $(".colo_figur").addClass("figur_ready");
    }, 1000);
    setTimeout(function(){
       $(".active_lightsaber").fadeIn(900);
       setTimeout(function(){
        $(".colo_active_texts1").addClass("colo_active_text_active");
        click_colo = true;
       }, 1200); 
       $(".colo_figur1").addClass("colo_figur_active");
    }, 600); 

if(window_width > 768){
  second_colo_position();
}
});

$(".menu_button").click(function(){

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
  }
  if(window_width > 768 && $(".content").hasClass("menu_normal1")){
    $(".menu_content").fadeOut(0);
  }
});

$(".back").click(function(){
 let link_href = 1;
$(".back_animation").css("display", "block");
  setTimeout(function(){
     location.href = "../yoda.html";
  }, 1000);
 localStorage.setItem("link_href", link_href);
});

$(".menu_li_1").click(function(){
 $(".back_animation").css("display", "block");
 let link_href = 1;
 localStorage.setItem("link_href", link_href)
    setTimeout(function(){
    location.href = "../../../../../";
  }, 1000);
});

$(".menu_li_2").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "../../../../../planets/planets.html";
  }, 1000);
});

$(".menu_li_3").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "../../../../characters.html";
  }, 1000);
});

$(".menu_li_4").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "../../../../../films/films.html";
  }, 1000);
});

// active colo

$(".colo_figur").click(function(event){
  if(click_colo == true){
    $(".colo_active_texts").removeClass("colo_active_text_active");
    $(".colo_figur").removeClass("colo_figur_active")
    let active_colo        = event.target.className;
    let active_num         = (active_colo.split("r")[2]).split(" ")[0];
    let active_text        = ".colo_active_texts" + active_num;
    let active_colo_figoor = ".colo_figur" + active_num;
    $(active_text).addClass("colo_active_text_active");
    $(active_colo_figoor).addClass("colo_figur_active");
  }
}); 

function second_colo_position(){
  let colo_position   = $(".colo_figur2").position();
  let colo_position_2 = $(".colo_figur1").position();
  $(".colo_active_texts2").css("top", colo_position.top/1.1);
  $(".colo_active_texts2").css("left", colo_position.left/3.2);

  $(".colo_active_texts1").css("top", colo_position_2.top/1.14);
  $(".colo_active_texts1").css("left", colo_position_2.left*1.1);
};

styleUnfined = () => {
    $(".colo_active_texts2, .colo_active_texts1").css("margin-left", "auto");
    $(".colo_active_texts2, .colo_active_texts1").css("left", "auto");
 }

function window_resizeWidth(){
  window_width = $(window).width();
  styleUnfined();
  if(window_width >= 768){second_colo_position();}
  if(window_width <= 768 && window_width > 501){
    $(".colo_active_texts1").css("top", "");
    $(".colo_active_texts1").css("left", "");
    $(".colo_active_texts2").css("top", "");
    $(".colo_active_texts2").css("left", "");
    $(".colo_active_texts1").css("margin-left", "");
    $(".colo_active_texts2").css("margin-left", "");
  }
  if(window_width < 501 && window_width > 0){
    $(".colo_active_texts2").css("margin-left", "0");
    $(".colo_active_texts1, .colo_active_texts2").css("top", "");
  }
}