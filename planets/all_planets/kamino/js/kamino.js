let window_width;
$(window).resize(function(){
    window_width = $(window).width();
    window_Element_Size();
});

$(window).ready(function(){
    window_width = $(window).width();
    window_Element_Size();

    $(".show_animation").css("background", "none");
    setTimeout(function(){
       $(".show_animation").fadeOut();
    }, 1000);
});

let placeFadeIn; 

//menu
let body_scrollTop = 0;

$(".menu_button, .menu_slide_active").click(function(){

  let window_width_menu = $(window).width();
  if(window_width_menu > 768){

  $(".content").addClass("menu_active");
  $(".content").removeClass("menu_normal");
  $(".content").removeClass("menu_normal1");
  $(".menu_close_block, .menu_content, .menu_show_active").fadeIn();
  $(".menu_notshow_active, .scrollButton_show_notActive").css("display", "none");
  $("body, .content").css("overflow", "hidden");
  $(".content").css("height", "100vh");
  $(".conteiner_1").css("position", "fixed");
  $(".conteiner_1").css("perspective", "1500px");
  $(".scrollButton_show_notActive").css("opacity", "0");

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

  setTimeout(function(){
    $(".menu_notshow_active").css("display", "inline-flex");
    if(body_scrollTop >= placeFadeIn){
      $(".scrollButton_show_notActive").css("display", "inline-flex");
    }
  }, 799);
});

$(window).resize(function(){
  if(window_width < 767){
  $(".conteiner_1").css("position", "static");
  $(".conteiner_1").css("perspective", "0px");
  $(".content").addClass("menu_normal");
  $(".content").removeClass("menu_active");
  $(".menu_content").removeClass("mini_menu_active");

  setTimeout(function(){
    $(".scrollButton_show_active").css("display", "none");
    $(".menu_notshow_active").css("display", "inline-flex");
  }, 799);
  }
});

function window_Element_Size(){
 if(window_width > 768){
    let text_size      = window_width / 105  + "px";
    $(".text").css("font-size", text_size);
    let text_width     = window_width / 2.909 + "px"; 
    $(".text").css("width", text_width);
  }else{
    $(".text").css("width", "90%");
    if(window_width < 900 || window_width > 400){
    $(".text").css("font-size", "12px");
  }}
}

$(window).mousemove(function(event){
  if(event.target.id == "import_place_icon"){
     $(".import_place_img_block").css("display", "inline-flex");
  }else{
    if($(".p_1").hasClass("active_p")){
       $(".import_place_img_block").css("display", "inline-flex");
    }
    else{
      $(".import_place_img_block").fadeOut();
    }
  }
});

$(".back").click(function(){
  $(".back_animation").css("display", "block");
  setTimeout(function(){
     location.href = "../../planets.html";
  }, 1000);
})

$(".menu_li_1").click(function(){
 $(".back_animation").css("display", "block");
 let link_href = 1;
 localStorage.setItem("link_href", link_href)
    setTimeout(function(){
    location.href = "../../../";
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
  setTimeout(function(){
    location.href = "../../../films/films.html";
  }, 1000);
});