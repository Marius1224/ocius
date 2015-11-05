var modal = false;
var lastSection     = null;
var visitedSections = [];

$(function() {
	$.scrollify({
		section : "section",
	});
});

$.scrollify({
	section : "section",
	sectionName : "section-name",
	easing: "easeInOutElastic",
	scrollSpeed: 750,
	offset : 0,
	scrollbars: true,
	before:function(sectionNumber) {
		var id = $(':focus').attr("id");

		switch (id) {
			case 'contactArea':
			case 'contactName':
			case 'contactEmail':
				return;
				break;
		}

		switch (sectionNumber) {
			case 0:
				$('#calculat1').animate({marginTop: '12%'}, 1200, 'easeInOutElastic');
				$('#calculat2').animate({marginTop: '3%'}, 1100, 'easeOutElastic');
				$('.bonHomme').show("slow");
		    	$('#ecran').animate({marginTop: '-4%'}, 1000, 'easeInOutElastic');
		    	$('#pcRight').animate({marginTop: '8%'}, 1100, 'easeInOutElastic');
		    	$('#tablette').animate({marginLeft: '-2%'}, 1200, 'easeInOutElastic');
		    	$('#carnet').animate({marginLeft: '-2%'}, 1200, 'easeInOutElastic');
		    	$('#clavier').animate({marginLeft: '-3%'}, 1100, 'easeInOutElastic');
		    	$('#ecouteur').animate({marginTop:'1%', "marginRight":"3%"});
		    	$('#blocNote1').animate({marginTop:'6%', "marginRight":"9%"},function(){
		    		$("#blocNote1").rotate({ animateTo:360});
		    	});
		    	$('#blocNote2').animate({marginBottom:'10%', marginLeft: '13%'},function(){
		    		$("#blocNote2").rotate({ animateTo:360});
		    	});

		    	if (lastSection !== null && lastSection !== sectionNumber) {
					rotateUp.init($("#boule1"), 1);
					rotateUp.init($("#boule2"), -1);
					rotateUp.init($("#boule3"), 1);
					rotateUp.init($("#boule4"), -1);
					rotateUp.init($("#boule5"), 1);
					rotateUp.init($("#boule14"), -1);
					rotateUp.init($("#boule7"), 1);
					rotateUp.init($("#boule6"), -1);		
					rotateUp.init($("#boule8"), 1);
					rotateUp.init($("#boule9"), 1);
					rotateUp.init($("#boule10"), -1);
					rotateUp.init($("#boule11"), -1);
					rotateUp.init($("#boule12"), -1);
					rotateUp.init($("#boule13"), -1);
					rotateUp.init($("#boule"), -1);
					rotateUp.init($(".bonHomme"), -1);
		    	}
				break;

			case 1:
				anim.boulesNoFade();
				$('#calculat1').animate({marginTop: '-12%'}, 1000, 'easeInOutElastic');
				$('#calculat2').animate({marginTop: '-3%'}, 1100, 'easeOutElastic');
				$('.bonHomme').show("slow");
		    	$('#ecran').animate({marginTop: '4%'}, 1200, 'easeInOutElastic');
		    	$('#pcRight').animate({marginTop: '-8%'}, 1300, 'easeInOutElastic');
		    	$('#tablette').animate({marginLeft: '2%'}, 1200, 'easeInOutElastic');
		    	$('#carnet').animate({marginLeft: '2%'}, 1000, 'easeInOutElastic');
		    	$('#clavier').animate({marginLeft: '3%'}, 1100, 'easeInOutElastic');
		    	$('#ecouteur').animate({marginTop:'-1%', "marginRight":"-3%"});
		    	$('#blocNote1').animate({marginTop:'-6%', "marginRight":"-9%"},function(){
		    		$("#blocNote1").rotate({ animateTo:360});
		    	});
		    	$('#blocNote2').animate({marginBottom:'0%', marginLeft: '-18%'},function(){
		    		$("#blocNote2").rotate({ animateTo:360});
		    	});

				rotateUp.init($("#map"),-1);
				rotateUp.init($("#contactName"),-1);
				rotateUp.init($("#contactEmail"),1);
				rotateUp.init($("#contactArea"),-1);

				if (visitedSections.indexOf(sectionNumber) != -1) {
					rotateUp.init($("#nuage3"),1);
					rotateUp.init($("#nuage2"),-1);
					rotateUp.init($("#nuage1"),1);
					rotateUp.init($("#bouleNumeroTelephone"),-1);
				}
				break;
		}
	},
	after:function(sectionNumber) {
		var id = $(':focus').attr("id");

		switch (id) {
			case 'contactArea':
			case 'contactName':
			case 'contactEmail':
				return;
				break;
		}
		
		var Y = $(document).scrollTop();

		$('#language').css('visibility', 'visible').zIndex(50000);

		TweenMax.to($('#language'), 0, { y : Y - 100 } );
		TweenMax.to($('#language'), .5, { y : Y + 10 } );

		if (lastSection !== sectionNumber) {
			switch (sectionNumber) {
				case 0 :
				   	if (typeof(emailSent) !== 'undefined' && emailSent === true) {
						emailSent = false;
						anim.bonhomme();
						anim.emailSent();
					} else {
						if (lastSection === null) {
							anim.bonhomme();
							anim.boules();
							anim.brasCellulaire();
							anim.tablette();
						}
					}
					if ($.browser.mobile === true) {
						anim.boulesFadeInOut();
					}
					break;

				case 1 :
					if (modal === false) {
						modal = true;

						var w = window.innerWidth;
						var h = window.innerHeight;
						var o = $("#modal");
						var width  = o.width();
						var height = o.height();
						var posX = w / 2 - width / 2;
						var posY = h / 2 - height / 2;

						TweenMax.to(o, 0, {x: posX, y: posY});
						TweenMax.to(o, 1, {delay: 0.5, opacity: 1, onComplete:function(){
							TweenMax.to(o, 1, {delay: 5, opacity: 0, onComplete:function(){
								o.css({"display":"none"});
							}});
						}});
					}

					anim.bonhommeContact();
					anim.cellRinging();

					if (lastSection === null) {
						anim.bonhomme();
						anim.boules();
					}

					if (visitedSections.indexOf(sectionNumber) == -1) {
						anim.bulleTelephoneContact();
						anim.nuagesContact();
						visitedSections.push(sectionNumber);
					}

					ga('set', {
						page: '/contact',
						title: 'Contact Us'
					});
					break;
			}
			lastSection = sectionNumber;
		}
	},
	afterResize:function() {
		anim.bonhommeContact();
		anim.bonhomme();
		anim.boules();
		anim.bulleTelephoneContact();
		anim.nuagesContact();
	}
});