let window_width;
$(window).resize(function(){
    window_width = $(window).width();
  if(window_width > 768){
    videoIcon_generator();
  }
});

$(window).ready(function(){
    window_width = $(window).width();

  if(window_width > 768){
    videoIcon_generator();
  }

$("body").addClass("classic_load");

let link_href = localStorage.getItem("link_href");
let smoke_timeShow;

if(link_href == null || link_href == undefined){
  $(".show_animation").css("display", "none");
  setTimeout(function(){
      link_href = 1; 
      localStorage.setItem("link_href", link_href);
  }, 1000);
  smoke_timeShow = 900;
}
else{
if(link_href == 1){
  smoke_timeShow = 900;
  $(".show_animation").css("display", "block");
  $("body").removeClass("classic_load");
      setTimeout(function(){
       $(".show_animation").fadeOut();
    }, 1000);
}
else{
  smoke_timeShow = 3100;
  $(".loader").css("display", "flex");
}
  
   link_href = 0;
   localStorage.setItem("link_href", link_href);
}

$(".content").css("display", "none");
setTimeout(function(){
$(".content").fadeIn(300);
$(".menu_notshow_active").css("display", "flex");
  setTimeout(function(){
  $("body").css("background-image", "url('main/img/menu_background.jpg')");
  }, 900);
}, 100);

if(window_width > 768){
  setTimeout(function(){
  $(".window_1_main_img_2").fadeIn();
}, smoke_timeShow);
}else{
   $(".window_1_main_img_2").css("display", "none");
}
});

$(window).resize(function(){
  window_width_img = $(window).width();
  if(window_width_img > 768){
  $(".window_1_main_img_2").css("display", "inline");
  $(".window_1_main_img_2").fadeIn();
}else{
   $(".window_1_main_img_2").fadeOut();
}
});

//menu
let body_scrollTop = 0;

let body_scrollTop_old = 0;

$(".menu_button, .footer_cta").click(function(){

  let window_width_menu = $(window).width();
  if(window_width_menu > 768){

	$(".content").addClass("menu_active");
	$(".content").removeClass("menu_normal");
  $(".content").removeClass("menu_normal1");
	$(".menu_close_block, .menu_content, .menu_show_active").fadeIn();
   if(body_scrollTop >= placeFadeIn){$(".scrollButton_show_active").css("display", "block");}
	$(".menu_notshow_active, .scrollButton_show_notActive").css("display", "none");
	$("body, .content").css("overflow", "hidden");
	$(".content").css("height", "100vh");
	$(".conteiner_1").css("position", "fixed");
	$(".conteiner_1").css("perspective", "1500px");
  $(".scrollButton_show_notActive").css("opacity", "0");
  if(window_width > 768){
    body_scrollTop_old = body_scrollTop;
    document.getElementById("main-content").style.top = -body_scrollTop + "px"; // весь контент буде підніматись на кількість проскролених пікселів
  }

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
  $("body").css("overflow", "auto");
  $("body").css("overflow-x", "hidden");
  $(".content").addClass("menu_normal");
  $(".conteiner_1").css("position", "static");


  setTimeout(() => {
    $(".conteiner_1").css("perspective", "0px");
    $(".content").removeClass("menu_active");
    $(".menu_content").removeClass("mini_menu_active");
  }, 1200);

   	 $(".menu_close_block, .menu_content").fadeOut();
     setTimeout(function(){
     $(".scrollButton_show_notActive").css("opacity", "1");
    }, 300);

	setTimeout(function(){
		$(".content").css("height", "auto");
		$(".menu_show_active, .scrollButton_show_active").css("display", "none");
		$(".menu_notshow_active").css("display", "inline-flex");
    if(body_scrollTop >= placeFadeIn && window_width > 768){
      $(".scrollButton_show_notActive").css("display", "inline-flex");
    }
    if(window_width > 768){
    testFunction();
		document.getElementById("main-content").style.top = body_scrollTop + "px";
  }
	}, 799);
});

$(window).resize(function(){
  if(window_width < 768){
      $("body").css("overflow", "auto");
  $("body").css("overflow-x", "hidden");
  $(".conteiner_1").css("position", "static");
  $(".conteiner_1").css("perspective", "0px");
  $(".content").addClass("menu_normal1");
  $(".content").removeClass("menu_active");
  $(".menu_content").removeClass("mini_menu_active");
  $(".menu_close_block").css("display", "none");

  setTimeout(function(){
    $(".content").css("height", "auto");
    $(".menu_show_active, .scrollButton_show_active").css("display", "none");
    $(".menu_notshow_active").css("display", "inline-flex");
    if(body_scrollTop >= placeFadeIn && window_width > 768){
      $(".scrollButton_show_notActive").css("display", "inline-flex");
    }
  //   if(window_width > 768){
  //   testFunction();
  //   document.getElementById("main-content").style.top = body_scrollTop + "px"; // ОСЬ ЗВІДКИ ВЕДЕТЬСЯ ПЕРЕНОС НА 0 ПРОКРУЧЕНЬ!!!!!!
  // } 
  }, 799);
  }
  if(window_width > 768 && $(".content").hasClass("menu_normal1")){
    $(".menu_content").fadeOut(0);
    $(".menu_close_block").css("display", "none");
  }

});


$("body").on("scroll", function() {
   body_scrollTop = $('body').scrollTop();
});

function testFunction(){
	$("body").animate({scrollTop: body_scrollTop_old}, 0);
}

// scrollButton to top
$(".scrollTopButton").click(function(){
    $("body").animate({scrollTop: 0}, 1000);
});

let placeFadeIn; 

$("body").on("scroll", function() {
  placeFadeIn = parseInt( $(".window_2").offset().top + 1500);
  body_scrollTop = $('body').scrollTop();
  if(window_width >= 768){
  if(body_scrollTop >= placeFadeIn){
    $(".scrollButton_show_notActive").fadeIn();
  }else{
    $(".scrollButton_show_notActive").fadeOut();
  }
}
});

//sctollTop
  let scrollAmount;
$(".wrapper").click(function(){
  let window_width_scrollTop = $(window).width();
  if(window_width_scrollTop <= 500){scrollAmount = $("body").scrollTop() + parseInt( $(".window_2").offset().top - 25);}
  if(window_width_scrollTop > 500){scrollAmount  = $("body").scrollTop() + parseInt( $(".window_2").offset().top)}
  setTimeout(function(){
  $("body").animate({scrollTop: scrollAmount}, 800);
}, 100);
});

//titles sizes
let titleFz = 110;
let yearsFz = 190;

$(window).resize(function(){
  let window_width = $(window).width();
    if(window_width > 768) titleSize();
    if(window_width > 450 && window_width < 768){
      $(".window_2_title").css("font-size", 60+"px");
    }
    if($(window_width > 768)){
    if($(".menu_content").hasClass("mini_menu_active")){
       $(".content").addClass("menu_active");
       $(".content").removeClass("menu_normal");
       $(".menu_close_block, .menu_content, .menu_show_active").css("display", "block");
       $(".menu_notshow_active").css("display", "none");
       $("body, .content").css("overflow", "hidden");
       $(".content").css("height", "100vh");
       $(".conteiner_1").css("position", "fixed");
       $(".conteiner_1").css("perspective", "1500px");
       body_scrollTop_old = body_scrollTop;
       document.getElementById("main-content").style.top = -body_scrollTop + "px"; // весь контент буде підніматись на кількість проскролених пікселів
    }
  }
});

$(window).ready(function(){
  let window_width = $(window).width();
  if(window_width > 768) titleSize();
  if(window_width > 450 && window_width < 768){
    $(".window_2_title").css("font-size", 60+"px");
  }
});

$(".transport_block").click(function(){
	$(".transport_block").removeClass("active_holo_block");
    let holo_src    = $(this).attr("data");
    let get_holo_id = $(this).attr("id");	
    $(".hologram_img").attr("src", holo_src);
    let holo_id     = '#' + get_holo_id;
    $(holo_id).addClass("active_holo_block")

});


// loader 
$(".white_window").fadeOut(800);

setTimeout(function(){

let speed = 2000;
$(".skillbar").each(function(){
    $(this).find('.skillbar-bar').animate({
        width:$(this).attr("data-percent")
    }, speed);
});

$(".count").each(function(){
   $(this).prop("test",0).animate({
   	test: $(this).attr("data")
 }, {
 	duration: speed,
 	easing: 'swing',
 	step:function(now){
 		$(this).text(Math.ceil(now));
 	}
 	});
});

setTimeout(function(){
     $(".loader").fadeOut();
}, speed+150);

}, 400);

function titleSize(){
      let window_width = $(window).width();
    if(window_width > 768){
    let newTitleFz = (window_width / titleFz) * 6
    let newYearsFz = (window_width / yearsFz) * 16

    $(".window_2_title").css("font-size", newTitleFz+"px");
    $(".window_2_title").css("line-height", newTitleFz+"px");
    $(".film_year").css("font-size", newYearsFz+"px");
  }
  if(window_width > 400 && window_width < 768){
    $(".film_year").css("font-size", 70+"px");
  }

  if(window_width < 400){
    $(".film_year").css("font-size", 50+"px");
  }
}

function yearsPosition(){
    let window_width = $(window).width();
    let position = 0;
    if(window_width >= 1900){position  = 702;}
    if(window_width >= 768 && window_width < 1000){position    = 320;}
    if(window_width >= 600 && window_width < 768){position     = window_width/1.35;}
    if(window_width >= 450 && window_width < 600){position     = (window_width/1.25)-100;}
    if(window_width >= 350 && window_width < 450){position     = (window_width/1.15)-100;}
    if(window_width >= 0 && window_width < 350){position     = (window_width/1.05)-100;}
    $(".film_year").css("margin-top", position+"px");
}

$(".menu_li_2").click(function(){
 $(".back_animation").css("display", "block");
    setTimeout(function(){
    location.href = "planets/planets.html";
  }, 1000);
});

$(".menu_li_3").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "characters/characters.html";
  }, 1000);
});

$(".menu_li_4").click(function(){
 $(".back_animation").css("display", "block");
  setTimeout(function(){
    location.href = "films/films.html";
  }, 1000);
});

$(".watch_button").mouseover(function(){
    $(".film_image_2").css("transform", "scale(1.03)");
});

$(".watch_button").mouseout(function(){
    $(".film_image_2").css("transform", "scale(1)");
});

$(".watch_button").click(function(){
   $(".video_block").fadeIn();
   $(".video_block").css("display", "flex");
   $(".video").fadeIn();
   $(this).fadeOut();
});

$(".video_block").click(function(){
   $(this).fadeOut();
    var leg=$('.video').attr("src");
    $('.video').attr("src",leg);
    $(".watch_button").fadeIn();
});

function videoIcon_generator(){
  let video_size_height = window_width / 76 + "px solid #FFF";
  let video_size_width  = window_width / 128 + "px solid transparent";
  $(".watch_button_icon").css("border", video_size_width);
  $(".watch_button_icon").css("border-left", video_size_height);
}


$(".remove_button").click(function(){
   $(".pashalca").fadeOut();
   $("body").css("overflow-y", "auto");
}); 

//Пасхалка
let aboutMe = '';
let codeEn = "tar";
let codeUa = "ефк";


$(document).on("keydown", startCollect);

function startCollect(e){
   if(e.key == "s" || e.key == "і" || e.key == "ы"){
     $(document).off("keydown", startCollect);
     $(document).on("keydown", collectSymbol);
   }
}

function collectSymbol(e){
  if(e.key == codeEn || aboutMe == codeUa){
    stopCollect();
  }else{
       aboutMe+=e.key;
       if(aboutMe == codeEn || aboutMe == codeUa){
        $(".pashalca").fadeIn();
        $(".pashalca").css("display", "flex");
        $("body").css("overflow", "hidden");
        stopCollect();
       }
  }
}
function stopCollect(){
  aboutMe = '';
  $(document).off("keydown", startCollect);
  $(document).off("keydown", collectSymbol);
}
