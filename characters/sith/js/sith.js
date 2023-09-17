// background setting
let color;

// active personajes 
let activePerson;

setTimeout(function(){
  color = $(".active_slide").attr("data");
}, 30);

let window_width;
$(window).resize(function(){
    window_width = $(window).width();
    spawn_colo();
    background_colo();
});

$(window).ready(function(){
    link_check();
    $("body").css('background-image', "url('../../main/img/menu_background.jpg')");
    $(window).css("overflow", "hidden");
    window_width = $(window).width();
    $(".show_animation").css("background", "none");
    setTimeout(function(){
       $(".show_animation").fadeOut();
    }, 1000);
    getActive_Personajes();
    setTimeout(function(){
    spawn_colo();
    background_colo();    
  }, 50);

    setTimeout(function(){
      $(".arrow_block").fadeIn(900);
      $(".arrow_block").css("display", "flex");
    }, 300);
});

$(".menu_button, .menu_slide_active").click(function(){

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

$(".back").click(function(){
  $(".back_animation").css("display", "block");
  setTimeout(function(){
     location.href = "../characters.html";
  }, 1000);
  localStorage.setItem("link_href", "0");
})

$(".menu_li_1").click(function(){
 $(".back_animation").css("display", "block");
 let link_href = 1;
 localStorage.setItem("link_href", link_href)
    setTimeout(function(){
    location.href = "../../";
  }, 1000);
});

$(".menu_li_2").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "../../planets/planets.html";
  }, 1000);
});

$(".menu_li_3").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "../characters.html";
  }, 1000);
});

$(".menu_li_4").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "../../films/films.html";
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

// slider

// next planet
$(".right_arrow").click(function(){
  let active_slide_id       = $(".active_slide").attr("id");
  let active_slide_id_num   = active_slide_id.split('g')[1];
  $(".active_slide").removeClass('active_slide');
  $(".active_slide_title").removeClass("active_slide_title");
  $(".more-text-blocks_active").removeClass("more-text-blocks_active");
  let next_active_slide_num = 0;
  for(let i = 0; i<8; i++){
    if(i == active_slide_id_num){
        next_active_slide_num = i;
    }
  }
   
  if(next_active_slide_num == 5) next_active_slide_num = 0;
  let next_active_slide       = "#slider_img" + (next_active_slide_num + 1);
  let next_active_slide_title = "#slide-title" + (next_active_slide_num + 1);
  let next_active_slide_text = "#more-text-block" + (next_active_slide_num + 1);
  $(next_active_slide).addClass("active_slide");
  $(next_active_slide_title).addClass("active_slide_title");
  $(next_active_slide_text).addClass("more-text-blocks_active");


  let active_slide_id_2      = $(".next_active").attr("id");
  let active_slide_id_num_2   = active_slide_id_2.split('g')[1];
  $(".next_active").removeClass('next_active');
  let next_active_slide_num_2 = 0;
  for(let i = 0; i<8; i++){
    if(i == active_slide_id_num_2){
        next_active_slide_num_2 = i;
    }
  }
   
  if(next_active_slide_num_2 == 5) next_active_slide_num_2 = 0;
  let next_active_slide_2 = "#slider_img" + (next_active_slide_num_2 + 1);
  $(next_active_slide_2).addClass("next_active");

  let active_slide_id_3      = $(".prev_active").attr("id");
  let active_slide_id_num_3   = active_slide_id_3.split('g')[1];
  $(".prev_active").removeClass('prev_active');
  let next_active_slide_num_3 = 0;
  for(let i = 0; i<6; i++){
    if(i == active_slide_id_num_3){
        next_active_slide_num_3 = i;
    }
  }
   
  if(next_active_slide_num_3 == 5) next_active_slide_num_3 = 0;
  let next_active_slide_3 = "#slider_img" + (next_active_slide_num_3 + 1);
  $(next_active_slide_3).addClass("prev_active");

  activePerson =  $(".active_slide").attr('id');
  localStorage.setItem("avtive_personajes_sith", activePerson);

  if(active_slide_id_num == 4){
    $("#slider_img4").css("margin-left", "0");
  }else{
    $("#slider_img4").css("margin-left", "-5%");
  }

}); 

// prev planet
$(".left_arrow").click(function(){
  let active_slide_id       = $(".active_slide").attr("id");
  let active_slide_id_num   = active_slide_id.split('g')[1];
  $(".active_slide").removeClass('active_slide');
  $(".active_slide_title").removeClass("active_slide_title");
  $(".more-text-blocks_active").removeClass("more-text-blocks_active");
  let next_active_slide_num = 0;
  for(let i = 0; i<6; i++){
    if(i == active_slide_id_num){
        next_active_slide_num = i;
    }
  }
   
  if(next_active_slide_num == 1) next_active_slide_num = 6;
  let next_active_slide = "#slider_img" + (next_active_slide_num - 1);
  let next_active_slide_title = "#slide-title" + (next_active_slide_num - 1);
  let next_active_slide_text = "#more-text-block" + (next_active_slide_num - 1);
  $(next_active_slide).addClass("active_slide");
  $(next_active_slide_title).addClass("active_slide_title");
  $(next_active_slide_text).addClass("more-text-blocks_active");



  let active_slide_id_2      = $(".next_active").attr("id");
  let active_slide_id_num_2   = active_slide_id_2.split('g')[1];
  $(".next_active").removeClass('next_active');
  let next_active_slide_num_2 = 0;
  for(let i = 0; i<6; i++){
    if(i == active_slide_id_num_2){
        next_active_slide_num_2 = i;
    }
  }
   
  if(next_active_slide_num_2 == 1) next_active_slide_num_2 = 6;
  let next_active_slide_2 = "#slider_img" + (next_active_slide_num_2 - 1);
  $(next_active_slide_2).addClass("next_active");

  let active_slide_id_3      = $(".prev_active").attr("id");
  let active_slide_id_num_3   = active_slide_id_3.split('g')[1];
  $(".prev_active").removeClass('prev_active');
  let next_active_slide_num_3 = 0;
  for(let i = 0; i<6; i++){
    if(i == active_slide_id_num_3){
        next_active_slide_num_3 = i;
    }
  }
   
  if(next_active_slide_num_3 == 1) next_active_slide_num_3 = 6;
  let next_active_slide_3 = "#slider_img" + (next_active_slide_num_3 - 1);
  $(next_active_slide_3).addClass("prev_active");

  activePerson =  $(".active_slide").attr('id');
  localStorage.setItem("avtive_personajes_sith", activePerson);

  if(active_slide_id_num == 1){
    $("#slider_img4").css("margin-left", "0");
  }else{
    $("#slider_img4").css("margin-left", "-5%");
  }
}); 

let active_slide_event_id;
$(window).click(function(event){
    let event_class               = event.target.className;
    let event_class_slide_active         = event_class.indexOf("active_slide");
    let event_class_prev_slide           = event_class.indexOf("prev_active");
    if(event_class_slide_active == 11){
    active_slide_event_id = "#" + event.target.id; 
      active_personajes();
  }
});

$(".more_about_planet p").click(function(){
  active_personajes();
});


$(".arrow").click(function(){
   color = $(".active_slide").attr("data");
   background_colo();
});

function active_personajes(){
  let active_src        = $(".active_slide").attr("src");
  let active_img_scr    = active_src.split('.')[0] + "_active.png";
  $(".active_slide").attr("src", active_img_scr);
  activePerson =  $(".active_slide").attr('id');
  let time;
  if(window_width <= 768) time = 1000;
  else time = 1500;
  setTimeout(function(){
         location.href = "more_sith/" + $(".active_slide").attr("alt") + "/" + $(".active_slide").attr("alt") + ".html";
  }, time);

  localStorage.setItem("avtive_personajes_sith", activePerson);


if(window_width > 768){
    $("body").addClass("active_personajes");
  }else{
    $(".back_animation").css("display", "block");
  }
}

function getActive_Personajes(){
    let localStorage_person_active = localStorage.getItem("avtive_personajes_sith");
    if(localStorage_person_active != undefined || localStorage_person_active != null){

    let first_active_personajes = "#" + localStorage_person_active;
    $(first_active_personajes).addClass("active_slide");
    
    let LSfist_title_active = first_active_personajes.split('g')[1];
    let fist_title_active   = "#slide-title" + LSfist_title_active;
    $(fist_title_active).addClass("active_slide_title");

    let get_firs_prev_active       = first_active_personajes.split("g")[1];
    if(get_firs_prev_active == 1){
       get_firs_prev_active = 5;
    }else{
       get_firs_prev_active -= 1;
    }

   let firs_prev_active = "#slider_img" + get_firs_prev_active;
   $(firs_prev_active).addClass("prev_active");


    let get_firs_next_active       = localStorage_person_active.split("g")[1];
    
 if(get_firs_next_active == 5){
    $("#slider_img4").css("margin-left", "0");
  }else{
    $("#slider_img4").css("margin-left", "-5%");
  }

    for(let i = 0; i<6; i++){
      if(i == get_firs_next_active){
        get_firs_next_active = i;
      }
    }

    if(get_firs_next_active == 5){
       get_firs_next_active = 1;
    }else{
       get_firs_next_active += 1;
    }

   let first_next_active = "#slider_img" + get_firs_next_active;
   $(first_next_active).addClass("next_active");
 }
 else{
  $("#slider_img1").addClass("prev_active");
  $("#slider_img2").addClass("active_slide");
  $("#slider_img3").addClass("next_active");
  $("#slide-title2").addClass("active_slide_title");
 }
}

function link_check(){
  let link_href = localStorage.getItem("link_href");

if(link_href == null || link_href == undefined || link_href == 0){
  $(".show_animation").css("display", "block");
  setTimeout(function(){
      localStorage.setItem("link_href", link_href);
  }, 2000);
}
else{
if(link_href == 1){
  $(".show_animation").css("display", "none");
   link_href = 0;
   localStorage.setItem("link_href", link_href);
}

}
}