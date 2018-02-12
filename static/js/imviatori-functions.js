var isMobile 	= /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

jQuery(function() {
	jQuery('input[type=date]').attr('type', 'text');
	jQuery( ".datepicker" ).datepicker({
		dateFormat: 'yy-mm-dd',
		minDate: '+2d'
	});
});


if(jQuery(".imviatori-slider").length){
	jQuery(".imviatori-slider").owlCarousel({
		loop				  : true,
		items				  : 1,
		animateOut			  : 'fadeOut',
		animateIn			  : 'fadeIn',
		autoplay 			  : true,
		autoplayHoverPause    : false,
		autoplayTimeout		  : 3000,
		autoplaySpeed		  : 3000,
		dots				  : false,
		nav					  : false
	});
}

if(jQuery(".why-imviatori-slider").length){
	jQuery(".why-imviatori-slider").owlCarousel({
		loop				  : true,
		items				  : 1,
		animateOut			  : 'fadeOut',
		animateIn			  : 'fadeIn',
		autoplay 			  : true,
		autoplayHoverPause    : false,
		autoplayTimeout		  : 5000,
		autoplaySpeed		  : 5000,
		dots				  : false,
		nav 				  : true,
		navText 			  : ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
	});
}

if (jQuery('.reviews-slider').length) {
	jQuery('.reviews-slider').owlCarousel({
		items				  : 1,
		center				  : false,
		animateOut			  : 'fadeOut',
		animateIn			  : 'fadeIn',
		loop				  : true,
		dots				  : false,
		navSpeed 			  : 1000,
		nav 				  : true,
		autoHeight			  : true,
		navText 			  : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	});
}

if (jQuery('.experiences-carousel').length) {
	jQuery('.experiences-carousel').owlCarousel({
		items				  : 3,
		center				  : false,
		animateOut			  : 'fadeOut',
		animateIn			  : 'fadeIn',
		loop				  : true,
		dots				  : false,
		navSpeed 			  : 1000,
		nav 				  : true,
		margin				  : 20,
		navText 			  : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        991:{
	            items:3
	        }
	    }
	});
}

if (jQuery('.ui.accordion').length) {
	jQuery('.ui.accordion').accordion();
}

if (jQuery('.select2').length) {
	jQuery('.select2').select2();
}
/*Sticky Sidebar*/
/*if(jQuery(".sticky").length){
	if(!isMobile){
		var length = jQuery('.sticky').height() - jQuery('.sticky-sidebar').height() + jQuery('.sticky').offset().top;

		jQuery(window).scroll(function () {
			var deviceWidth		= jQuery( window ).width();
		    var scrollSticky 	= jQuery(this).scrollTop();
		    var height 			= jQuery('.sticky-sidebar').height() + 'px';

			if(deviceWidth > 991) {
			    if (scrollSticky < jQuery('.sticky').offset().top) {
			        jQuery('.sticky-sidebar').css({
			            'position': 'absolute',
			            'top': '0'
			        });
			    } else if (scrollSticky > length) {
			        jQuery('.sticky-sidebar').css({
			            'position': 'absolute',
			            'bottom': '0',
			            'top': 'auto'
			        });
			    } else {
			        jQuery('.sticky-sidebar').css({
			            'position': 'fixed',
			            'top': '12rem',
			            'height': height
			        });
			    }
			}else{

			}
		});
	}
}*/

jQuery(window).scroll(function() {
    var scroll 	= jQuery(window).scrollTop();
    var isGhost	= parseInt(jQuery("#ghost-bar").val()) || 0;

    if(isGhost == 1){
	    if (scroll > 0) {
	    	jQuery("header").removeClass("ghost-bar");
	    } else {
	    	jQuery("header").addClass("ghost-bar");
	    }
	}
});

/*Scroll to Section*/
jQuery(function() {
	jQuery('a[href*="#"]:not([href="#"])').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      		var target 		= jQuery(this.hash);
      		target 			= target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
      		var menuOffset 	= target[0].id == 'partners' ? -200 : 100;

      		if (target.length) {
        		jQuery('html, body').animate({
          			scrollTop: target.offset().top - menuOffset
        		}, 1000);

        		return false;
      		}
    	}

    	//event.preventDefault();
  	});
});

if(jQuery(".gallery").length){
	jQuery(".gallery").lightGallery({
		thumbnail:true,
		selector: '.gallery-item-a'
	});
}

jQuery("#suscribe-form").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
    },
    messages: {
        email: "Ingrese un dirección de correo válida",
    }
});

/*Submit Form*/
jQuery("#suscribe-form").submit(function(e) {
  	if(jQuery(this).valid()){
    	jQuery("#loader").show();
      	jQuery.ajax({
        	type  : "POST",
        	url   : "/backend/suscribe.php",
        	dataType: 'json',
        	encode  : true,
        	data  : jQuery(this).serialize(),
        	success : function(data){
            	jQuery("#loader").hide();
          		if(data.success){
            		jQuery("#suscribe-form")[0].reset();
            		swal(
              			'Gracias!',
              			'Se ha suscrito correctamente a Imviatori.',
              			'success'
            		);
            		registrationPixel();
          		}else{
            		swal({
            			title: 'Ups!',
            			type: 'error',
              			text: 'Parece que hubo un error, inténtalo de nuevo.',
            			timer: 2000
          			})
          		}
        	},
            error   : function() {
                jQuery("#loader").hide();
                swal({
                    title: 'Ups!',
                    type: 'error',
                    text: 'Parece que hubo un error, inténtalo de nuevo.',
                    timer: 2000
                })
            }
      	});
      	e.preventDefault();
  	}
});

function registrationPixel(){
	fbq('track', 'CompleteRegistration', {
		value: 5.00,
		currency: 'MXN'
	});
}

jQuery(document).ready(function(){
	jQuery(".pay-method").click(function(){
		var method = jQuery(this).data("method");
		jQuery("#payMethod").val(method);
	});

	var psExpType = jQuery("#ps_exp_type").val();

	if(psExpType){
		jQuery('#et-' + psExpType).prop("checked", true);
		jQuery("input[name=exp_type]").trigger("change");
	}
});

jQuery(document).on("change", "input[name=exp_type]", function(){
	var i 		= 0;
	var filter 	= "";
	jQuery(".experience-card-wrap").hide();

	jQuery('input[name=exp_type]:checked').each(function() {
		filter += "." + jQuery(this).val();
		i++;
	});

	jQuery(".experience-card-wrap" + filter).show();
});

function createExperienceMap(map, mapId, mapInfo){
	map.lat 		= Number(map.lat);
	map.lng 		= Number(map.lng);

	var gMap 		= new google.maps.Map(document.getElementById(mapId), {
		zoom		: 15,
		center 		: {lat: map.lat, lng: map.lng},
		mapTypeId	: 'terrain',
		scrollwheel	: false
	});

	/*var experienceCircle	= new google.maps.Circle({
		strokeColor: '#9a247a',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#9a247a',
        fillOpacity: 0.35,
        map: gMap,
        center: {lat: map.lat, lng: map.lng},
        radius: 100
	});*/

	var experienceArea 	= {
		strokeColor: "#9a247a",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#9a247a",
		fillOpacity: 0.35,
	    path: google.maps.SymbolPath.CIRCLE,
	    scale: 35
	};

	var latLng 			= new google.maps.LatLng(map.lat, map.lng);
	var experienceMarker= new google.maps.Marker({
		icon		: experienceArea,
		position	: latLng
	});
	var experienceInfo	= new google.maps.InfoWindow({
		content		: mapInfo
	});

	experienceMarker.setMap(gMap);
	experienceInfo.open(gMap, experienceMarker);
}

function createExperienceCalendar(operableDays){
	var days = JSON.parse(operableDays);

	jQuery( ".datepicker" ).datepicker('destroy');
	jQuery( ".datepicker" ).datepicker({
		dateFormat: 'yy-mm-dd',
		minDate: '+2d',
		beforeShowDay: function(date){
			var day = date.getDay();

    		if(jQuery.inArray(day, days) !== -1){
    			return [true];
    		}else{
    			return [false];
    		}
		}
	});
}

/* Evento de Catas 2017
var eventModal = jQuery('[data-remodal-id=em-imviatori]').remodal({hashTracking: false});*/

jQuery(document).ready(function(){
	var experienceId = parseInt(jQuery("#experienceId").val()) || 0;

	/* Evento de Catas 2017
	if(jQuery(".event-modal").length){
		setTimeout(function() {
			eventModal.open();
		}, 500);
	}*/

	if(experienceId == 536){
		jQuery( ".datepicker" ).datepicker('destroy');
		jQuery( ".datepicker" ).datepicker({
			dateFormat: 'yy-mm-dd',
			minDate: '2017-09-02',
			beforeShowDay: function(date){
				var stringDate = jQuery.datepicker.formatDate('yy-mm-dd', date);
        		if(stringDate == '2017-09-02'){
        			return [true];
        		}else{
        			return [false];
        		}
    		}
		});
	}
});

jQuery(document).on('opened', '.remodal', function () {
	jQuery(".event-art").hide();
});

jQuery(document).on('closed', '.remodal', function (e) {
	jQuery(".event-art").show();
});

jQuery(document).on('click', '#close-art', function(e){
	jQuery(".event-art").hide();
});

jQuery(document).on('click', '.btn-trigger-booking', function(){
	jQuery(".datepicker").focus().datepicker("show");
});

if(jQuery(".fixed-subscribe-box").length){
	jQuery(window).scroll(function() {
		var scroll 	= jQuery(window).scrollTop();

		if (scroll > 50) {
	    	jQuery(".fixed-subscribe-box").show();
	    } else {
	    	jQuery(".fixed-subscribe-box").hide();
	    }
	});
}

if(jQuery("#instafeed").length){
	var feed = new Instafeed({
		get: 'user',
		userId: 3297774716,
		accessToken: '3297774716.bbbbfec.d0d23a41402d4ac7bc8ab52f71eafd07',
		sortBy: 'most-recent',
		limit: 8,
		resolution: 'standard_resolution',
		template: '<div class="box-img cover-cc-bg" style="background-image:url({{image}});"><a target="_blank" href="{{link}}"><div class="flex flex-v-center flex-h-center likes"><i class="fa fa-heart" aria-hidden="true"> </i>&nbsp; {{likes}}</div></a></div>'
	});
	feed.run();
}
