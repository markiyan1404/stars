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
    location.href = "../";
  }, 1000);
});

$(".menu_li_2").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "../planets/planets.html";
  }, 1000);
});

$(".menu_li_3").click(function(){
 $(".back_animation").css("display", "block");
 let link_href = 1;
 localStorage.setItem("link_href", link_href)
    setTimeout(function(){
    location.href = "../characters/characters.html";
  }, 1000);
});

let active_img;

// slider
function getActive_Personajes(){
    let localStorage_person_active = localStorage.getItem("film_active_slide");
    if(localStorage_person_active != undefined || localStorage_person_active != null){

    let first_active_personajes = "#" + localStorage_person_active;
    active_img = first_active_personajes;
    $(first_active_personajes).addClass("active_slide");
    
    let LSfist_title_active = first_active_personajes.split('g')[1];
    let fist_title_active   = "#slide-title" + LSfist_title_active;
    $(fist_title_active).addClass("active_slide_title");

    let get_firs_prev_active       = first_active_personajes.split("g")[1];
    if(get_firs_prev_active == 1){
       get_firs_prev_active = 9;
    }else{
       get_firs_prev_active -= 1;
    }

   let firs_prev_active = "#slider_img" + get_firs_prev_active;
   $(firs_prev_active).addClass("prev_active");


    let get_firs_next_active       = localStorage_person_active.split("g")[1];
   
    for(let i = 0; i<10; i++){
      if(i == get_firs_next_active){
        get_firs_next_active = i;
      }
    }

    if(get_firs_next_active == 9){
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
};

getActive_Personajes();

// slider

$(window).ready(function(){

let localStorage_person_active = localStorage.getItem("film_active_slide");
if(localStorage_person_active != undefined || localStorage_person_active != null){
let part_num = localStorage.getItem("film_active_slide").split('g')[1];
$(".part_num").text(part_num + "/9");
}else{
  part_num = 1;
  $(".part_num").text(part_num + "/9");
}
});

// next planet
$(".right_arrow").click(function(){
  let active_slide_id       = $(".active_slide").attr("id");
  let active_slide_id_num   = active_slide_id.split('g')[1];
  $(".active_slide").removeClass('active_slide');
  $(".active_slide_title").removeClass("active_slide_title");
  $(".more-text-blocks_active").removeClass("more-text-blocks_active");
  let next_active_slide_num = 0;
  for(let i = 0; i<10; i++){
    if(i == active_slide_id_num){
        next_active_slide_num = i;
    }
  }
  
 if(next_active_slide_num < 9){ 
 part_num = next_active_slide_num + 1;
}else{
  part_num = 1;
}

  if(next_active_slide_num == 9) next_active_slide_num = 0;
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
  for(let i = 0; i<10; i++){
    if(i == active_slide_id_num_2){
        next_active_slide_num_2 = i;
    }
  }
   
  if(next_active_slide_num_2 == 9) next_active_slide_num_2 = 0;
  let next_active_slide_2 = "#slider_img" + (next_active_slide_num_2 + 1);
  $(next_active_slide_2).addClass("next_active");

  let active_slide_id_3      = $(".prev_active").attr("id");
  let active_slide_id_num_3   = active_slide_id_3.split('g')[1];
  $(".prev_active").removeClass('prev_active');
  let next_active_slide_num_3 = 0;
  for(let i = 0; i<10; i++){
    if(i == active_slide_id_num_3){
        next_active_slide_num_3 = i;
    }
  }
   $(".part_num").text(part_num + "/9");
  if(next_active_slide_num_3 == 9) next_active_slide_num_3 = 0;
  let next_active_slide_3 = "#slider_img" + (next_active_slide_num_3 + 1);
  $(next_active_slide_3).addClass("prev_active");

  activePerson =  $(".active_slide").attr('id');
  localStorage.setItem("film_active_slide", activePerson);

 active_img = "#" + activePerson; 
}); 

// prev planet
$(".left_arrow").click(function(){
  let active_slide_id       = $(".active_slide").attr("id");
  let active_slide_id_num   = active_slide_id.split('g')[1];
  $(".active_slide").removeClass('active_slide');
  $(".active_slide_title").removeClass("active_slide_title");
  $(".more-text-blocks_active").removeClass("more-text-blocks_active");
  let next_active_slide_num = 0;
  for(let i = 0; i<10; i++){
    if(i == active_slide_id_num){
        next_active_slide_num = i;
    }
  }

   if(next_active_slide_num > 1){ 
 part_num = next_active_slide_num - 1;
}else{
  part_num = 9;
}
   
  if(next_active_slide_num == 1) next_active_slide_num = 10;
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
  for(let i = 0; i<10; i++){
    if(i == active_slide_id_num_2){
        next_active_slide_num_2 = i;
    }
  }
   
  if(next_active_slide_num_2 == 1) next_active_slide_num_2 = 10;
  let next_active_slide_2 = "#slider_img" + (next_active_slide_num_2 - 1);
  $(next_active_slide_2).addClass("next_active");

  let active_slide_id_3      = $(".prev_active").attr("id");
  let active_slide_id_num_3   = active_slide_id_3.split('g')[1];
  $(".prev_active").removeClass('prev_active');
  let next_active_slide_num_3 = 0;
  for(let i = 0; i<10; i++){
    if(i == active_slide_id_num_3){
        next_active_slide_num_3 = i;
    }
  }
   
  $(".part_num").text(part_num + "/9"); 
  if(next_active_slide_num_3 == 1) next_active_slide_num_3 = 10;
  let next_active_slide_3 = "#slider_img" + (next_active_slide_num_3 - 1);
  $(next_active_slide_3).addClass("prev_active");

  activePerson =  $(".active_slide").attr('id');
  localStorage.setItem("film_active_slide", activePerson);

  active_img = "#" + activePerson;
}); 

$(".back").click(function(){
  $(".slider_img ").removeClass("active_slideMore");
  $(".btn-cont").css("display", "block");
  $(".menu, .content_title").fadeIn();
  if(window_width >= 768){
    $(".background-border").fadeIn();
  }    
  $("body").addClass("notActive_big_slide");
  $("body").removeClass("active_big_slide_text");
  $("body").removeClass("active_big_slide");
});
 
$(".btn-cont").click(function(){
    let active_slide_alt  = $(".active_slide").attr("alt");
    let active_slide_href = "more_films/" + active_slide_alt + "/"  + "film.html";
    $(".back_animation").css("display", "block");
    setTimeout(function(){
    location.href = active_slide_href;
  }, 1000);

    localStorage.setItem("film_active_slide", activePerson);
});


$(".slider_img").click(function(){
    let this_id = "#" + $(this).attr('id');
    if(this_id == active_img){
    let active_slide_alt  = $(".active_slide").attr("alt");
    let active_slide_href = "more_films/" + active_slide_alt + "/"  + "film.html";
    $(".back_animation").css("display", "block");
    setTimeout(function(){
    location.href = active_slide_href;
  }, 1000);

    localStorage.setItem("film_active_slide", activePerson);
  }
});

