
function illumina(id) {
	$('#pacchetto-' + id + ' div').animateHighlight('#72bf66', 1000);
}

//------------------------------
//Picker
//------------------------------
jQuery(function() {
	jQuery( "#datepicker,#datepicker2,#datepicker3,#datepicker4,#datepicker5,#datepicker6,#datepicker7,#datepicker8" ).datepicker();
});


//------------------------------
//BG
//------------------------------

jQuery(function($) {
	jQuery( "body" ).addClass("thebg");
		
});



//------------------------------
//Custom select
//------------------------------
jQuery(document).ready(function(){
	jQuery('.mySelectBoxClass').customSelect();

	/* -OR- set a custom class name for the stylable element */
	//jQuery('.mySelectBoxClass').customSelect({customClass:'mySelectBoxClass'});
});

function mySelectUpdate(){
	setTimeout(function (){
		$('.mySelectBoxClass').trigger('update');
	}, 200);
}

$(window).resize(function() {
	mySelectUpdate();
});





//------------------------------
//Niciscroll
//------------------------------
jQuery(document).ready(function() {

	var nice = jQuery("html").niceScroll({
		
		cursorcolor:"#ccc",
		//background:"#fff",	
		cursorborder :"0px solid #fff",			
		railpadding:{top:0,right:0,left:0,bottom:0},
		cursorwidth:"5px",
		cursorborderradius:"0px",
		cursoropacitymin:0,
		cursoropacitymax:0.7,
		boxzoom:true,
		autohidemode:false
	});  
	
	jQuery(".hotelstab").niceScroll({horizrailenabled:false});
	jQuery(".flightstab").niceScroll({horizrailenabled:false});
	jQuery(".vacationstab").niceScroll({horizrailenabled:false});
	jQuery(".carstab").niceScroll({horizrailenabled:false});
	jQuery(".cruisestab").niceScroll({horizrailenabled:false});
	jQuery(".flighthotelcartab").niceScroll({horizrailenabled:false});
	jQuery(".flighthoteltab").niceScroll({horizrailenabled:false});
	jQuery(".flightcartab").niceScroll({horizrailenabled:false});
	jQuery(".hotelcartab").niceScroll({horizrailenabled:false});
	
	jQuery('html').addClass('no-overflow-y');
	
});



	
//------------------------------
//slider parallax effect
//------------------------------
jQuery(document).ready(function($){
var $scrollTop;
var $headerheight;
var $loggedin = false;
	
if($loggedin == false){
  $headerheight = $('.navbar-wrapper2').height() - 20;
} else {
  $headerheight = $('.navbar-wrapper2').height() + 100;
}


$(window).scroll(function(){
  var $iw = $('body').innerWidth();
  $scrollTop = $(window).scrollTop();	   
	  if ( $iw < 992 ) {
	 
	  }
	  else{
	   $('.navbar-wrapper2').css({'min-height' : 110-($scrollTop/2) +'px'});
	  }
  $('#dajy').css({'top': ((- $scrollTop / 5)+ $headerheight)  + 'px' });
  //$(".sboxpurple").css({'opacity' : 1-($scrollTop/300)});
  $(".scrolleffect").css({'top': ((- $scrollTop / 5)+ $headerheight) + 50  + 'px' });
  $(".tp-leftarrow").css({'left' : 20-($scrollTop/2) +'px'});
  $(".tp-rightarrow").css({'right' : 20-($scrollTop/2) +'px'});
});

});


//------------------------------
//Animations for this page
//------------------------------
$(document).ready(function(){
	$('.tip-arrow').css({'bottom':1+'px'});
	$('.tip-arrow').animate({'bottom':-9+'px'},{ duration: 700, queue: false });	
	
	$('.bookfilters').css({'margin-top':-40+'px'});
	$('.bookfilters').animate({'margin-top':0+'px'},{ duration: 1000, queue: false });	
	
	$('.topsortby').css({'opacity':0});
	$('.topsortby').animate({'opacity':1},{ duration: 1000, queue: false });	

	$('.itemscontainer').css({'opacity':0});
	$('.itemscontainer').animate({'opacity':1},{ duration: 1000, queue: false });			
});





//------------------------------
//Scroll animations
//------------------------------
jQuery(window).scroll(function(){            
	var $iw = $('body').innerWidth();
	
	if(jQuery(window).scrollTop() != 0){
		jQuery('.mtnav').stop().animate({top: '0px'}, 500);
		jQuery('.logo').stop().animate({width: '100px'}, 100);
	}       
	else {
		 if ( $iw < 992 ) {
		  }
		  else{
		   jQuery('.mtnav').stop().animate({top: '30px'}, 500);
		  }

		jQuery('.logo').stop().animate({width: '120px'}, 100);		

	}
	

	//Social
	if(jQuery(window).scrollTop() >= 900){
		jQuery('.social1').stop().animate({top:'0px'}, 100);
		
		setTimeout(function (){
			jQuery('.social2').stop().animate({top:'0px'}, 100);
		}, 100);
		
		setTimeout(function (){
			jQuery('.social3').stop().animate({top:'0px'}, 100);
		}, 200);
		
		setTimeout(function (){
			jQuery('.social4').stop().animate({top:'0px'}, 100);
		}, 300);
		
		setTimeout(function (){
			jQuery('.gotop').stop().animate({top:'0px'}, 200);
		}, 400);				
		
	}       
	else {
		setTimeout(function (){
			jQuery('.gotop').stop().animate({top:'100px'}, 200);
		}, 400);	
		setTimeout(function (){
			jQuery('.social4').stop().animate({top:'-120px'}, 100);				
		}, 300);
		setTimeout(function (){
			jQuery('.social3').stop().animate({top:'-120px'}, 100);		
		}, 200);	
		setTimeout(function (){
		jQuery('.social2').stop().animate({top:'-120px'}, 100);		
		}, 100);	

		jQuery('.social1').stop().animate({top:'-120px'}, 100);			

	}
	
	
});	





// Animazione del book e cuore sull'immagine
$(document).ready(function($){
	
	StartAnime2();
	
	$(window).resize(function() {
		StartAnime2();					
	});
	

});

function StartAnime2() {
	var $wlist = $('.listitem2').width();
	var $hlist = $('.listitem2').height();

	$('.liover').css({
		"width":10+"%",
		"height":10+"%",
		"background-color":"#72bf66",
		"position":"absolute",
		"top":$hlist/2+"px", 
		"left":$wlist/2+"px", 
		"opacity":0.0, 
	});
	$('.fav-icon').css({
		"top":$hlist/2-11+"px",
		"left":$wlist+"px",
	});
	$('.book-icon').css({
		"top":$hlist/2-11+"px",
		"left":-25+"px",
	});
	
	$( ".listitem2" )
		.mouseenter(function() {
			$(this).find('.liover').stop().animate({ "left":10+"%","top":10+"%","width":80+"%","height":80+"%","opacity":0.5  });
			$(this).find('.book-icon').stop().animate({ "left":$wlist/2-42+"px" });
			$(this).find('.fav-icon').stop().animate({ "left":$wlist/2+18+"px" });


		})
		.mouseleave(function() {
			$(this).find('.liover').stop().animate({ "left":$wlist/2+"px","top":$hlist/2+"px","width":10+"%","height":10+"%","opacity":0.0  });
			$(this).find('.book-icon').stop().animate({ "left":-25+"px" });
			$(this).find('.fav-icon').stop().animate({ "left":$wlist+"px" });
		
		});	
	
}










