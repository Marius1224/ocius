boules = [
	{
		name: 'boule',
		x: .36,
		y: .40
	},
	{
		name: 'boule1',	
		x: .85,
		y: .53	
	},
	{
		name: 'boule2',
		x: .64,
		y: .49
	},
	{
		name: 'boule3',
		x: .09,
		y: .28		
	},
	{
		name: 'boule4',
		x: .21,
		y: .42	
		
	},
	{
		name: 'boule5',
		x: .63,
		y: .26
		
	},
	{
		name: 'boule6',
		x: .25,
		y: .80
	},
	{
		name: 'boule7',
		x: .09,
		y: .48
	},
	{
		name: 'boule8',
		x: .75,
		y: .63		
	},
	{
		name: 'boule9',
		x: .75,
		y: .42
	},
	{
		name: 'boule10',
		x: .67,
		y: .76
	},
	{
		name: 'boule11',
		x: .79,
		y: .26
	},
	{
		name: 'boule12',
		x: .36,
		y: .60
	},
	{
		name: 'boule13',
		x: .17,
		y: .60
	},
	{
		name: 'boule14',
		x: .28,
		y: .25
	},
];

var pensees = [
	{
		name: 'pensee_1',
		x: .44,
		y: .2
	},
	{
		name: 'pensee_2',
		x: .34,
		y: .17
	},
	{
		name: 'pensee_3',
		x: .18,
		y: .19
	},

];

var bulleTelephone = [
	{
		name: 'bouleNumeroTelephone',
		x: .15,
		y: .22
	},	
];

var nuages = [
	{
		name : 'nuage1',
		x : .33,
		y : .27
	},
	{
		name : 'nuage2',
		x : .38,
		y : .23
	}
];

var anim = {
	bonhommeContact : function() {
		var w = window.innerWidth;
		var h = window.innerHeight;
		var standard = 1920;
		var scale = w / standard;
			scale = scale < .5 ? .5 : scale;
		var o = $(".bonhommeContactImg");
		TweenMax.to(o, 0.1, {scale:scale, onComplete:function(){
			if (!isMobile.any()) anim.bonhommeCell();
		}});
	},

	boulesFadeInOut : function() {
		for (var i = 0; i < boules.length; i += 1) {
			var o = $("#" + boules[ i ].name);
			var time = Math.random() * (i/3) + 5;

			TweenMax.to( o, time, { opacity : 0, yoyo : true, repeat : -1 });
		}
	},

	boulesNoFade : function() {
		for (var i = 0; i < boules.length; i += 1) {
			var o = $("#" + boules[ i ].name);

			TweenMax.to( o, 0, { opacity : 1 });
		}
	},
	
	bonhomme : function() {
		var w = window.innerWidth;
		var h = window.innerHeight;
		var standard = 1920;
		var scale = w / standard;
			scale = scale < .5 ? .5 : scale;

		bMiddleWidth = $(".bonHomme").width() / 2;
		bMiddleHeight = $(".bonHomme").height() / 2;
		bMiddleWidthContact = $(".bonhommeContactImg").width() / 2;
		bMiddleHeightContact = $(".bonhommeContactImg").height() / 2;

		$(".bonHomme").css('visibility','visible');

		TweenMax.to( $(".bonHomme"), 0, { x : w / 2 - bMiddleWidth, y : h / 2 - bMiddleHeight, scaleX : 0, scaleY: 0 } );
		TweenMax.to( $(".bonHomme"), 1, { scale: scale, ease: Bounce.easeOut, onUpdate : function(){
			bMiddleWidth = $(".bonHomme").width() / 2;
			bMiddleHeight = $(".bonHomme").height() / 2;

			TweenMax.to( $(".bonHomme"), 0, { x : w / 2 - bMiddleWidth, y : h / 2 - bMiddleHeight } );
		} } );
	},

	bulleTelephoneContact : function() {
		var w = window.innerWidth;
		var h = window.innerHeight;
		var standard = 1920;
		var scale = w / standard;
			scale = scale < 1.10 ? 1.10 : scale;

		var xMiddleBonhomme = $(".bonhommeContactImg").position().left;
		var yMiddleBonhomme = $(".bonhommeContactImg").position().top;
		
		for (var i = 0; i < bulleTelephone.length; i += 1) {
			var X = w * bulleTelephone[ i ].x - $("#" + bulleTelephone[ i ].name).width() / 2;
			var Y = h * bulleTelephone[ i ].y - $("#" + bulleTelephone[ i ].name).height() / 2;

			$("#" + bulleTelephone[ i ].name).css('visibility','visible');

			TweenMax.to( $("#" + bulleTelephone[ i ].name), 0, { x : xMiddleBonhomme, y : yMiddleBonhomme, scale : 0 } );
			TweenMax.to( $("#" + bulleTelephone[ i ].name), 1, { delay : 0.25, scale : scale, x : X, y : Y, ease: Bounce.easeOut, onComplete: function(){
				//if (!isMobile.any()) anim.bonhommeCell();
			} } );
		}
	},
	
	nuagesContact : function(){
		$("#cellContact").css({'visibility':'hidden'});

		var w = window.innerWidth;
		var h = window.innerHeight;

		if (window.innerHeight > window.innerWidth) {
			yScale = 2;
		} else {
			yScale = 1;
		}

		var xMiddleBonhomme = $(".bonhommeContactImg").position().left + $(".bonhommeContactImg").width() / 2;
		var yMiddleBonhomme = $(".bonhommeContactImg").position().top  + $(".bonhommeContactImg").width() / 2;

		$(".bonhommeContactImg").css('z-index',100);

		var delay = 0;
		
		for (var i = 0; i < nuages.length; i += 1) {
			TweenMax.to( $("#" + nuages[ i ].name), 0, { x : xMiddleBonhomme - $("#" + nuages[ i ].name).width() / 2, y : yMiddleBonhomme - $("#" + nuages[ i ].name).height() / 2, scaleX : 0, scaleY : 0 } );

			var X = w * nuages[ i ].x - $("#" + nuages[ i ].name).width() / 2;
			var Y = h * nuages[ i ].y - $("#" + nuages[ i ].name).height() / 2;

			$("#" + nuages[ i ].name).css('display','block');
			$("#" + nuages[ i ].name).css('z-index',0);

			TweenMax.to( $("#" + nuages[ i ].name), 1, { delay : delay, scale : 1, x : X, y : Y, ease: Bounce.easeOut } );

			delay += 0.4;
		}

		var contactArea = $("#commentForm");
		var offset      = contactArea.offset();
		var left        = offset.left - 150;
		var top         = 0;

		$("#nuage3").css('display','block');
		$("#nuage3").css('z-index',0);

		TweenMax.to( $("#nuage3"), 0, { scale : 0, x : 0, y : 0, ease: Bounce.easeOut } );
		TweenMax.to( $("#nuage3"), 1, { delay : delay, scaleX : 1, scaleY : yScale, x : left, y : top - 80, ease: Bounce.easeOut } );

	},

	boules : function() {
		var w = window.innerWidth;
		var h = window.innerHeight;
		var standard = 1920;
		var scale = w / standard;
			scale = scale < .5 ? .5 : scale;

		for (var i = 0; i < boules.length; i += 1) {
			var o = $("#" + boules[ i ].name);
			var X = w / 2 - o.width() / 2;
			var Y = h / 2 - o.height() / 2;

			TweenMax.to( o, 0, { x : X, y : Y } );

			o.css({ 'visibility': 'visible'});
		}

		for (var i = 0; i < boules.length; i += 1) {
			var o = $("#" + boules[ i ].name);
			var X = w * boules[ i ].x - o.width() / 2/* + ( 50 * scale ) - Math.random() * (100 * scale)*/;
			var Y = h * boules[ i ].y - o.height() / 2/* + ( 50 * scale ) - Math.random() * (100 * scale)*/;

			TweenMax.to( o, 0, { scale : 0 } );
			TweenMax.to( o, 1, {
				delay : 0.25, scale : scale, x : X, y : Y, ease: Bounce.easeOut, onCompleteParams:[o],
				onComplete: function(o){
					o.zIndex(1000);
				}
			} );
		}
	},

	emailSent : function() {
		var w     = window.innerWidth;
		var h     = window.innerHeight;
		var delay = 0.5;

		var X = w / 2;
		var Y = h / 2;

		TweenMax.to( $("#pensee_1"), 0, { x : X, y : Y, opacity : 0, scaleX : 0, scaleY : 0 } );

		var X = w * pensees[ 0 ].x;
		var Y = h * pensees[ 0 ].y;

		$("#pensee_1").css('visibility', 'visible');

		var w2 = $("#pensee_1").width() / 2;
		var h2 = $("#pensee_1").height() / 2;

		TweenMax.to( $("#pensee_1"), .25, { x : X - w2, y : Y - h2, opacity : .9, scaleX : 1, scaleY : 1, onComplete : function(){
			TweenMax.to( $("#pensee_1"), 1, { delay : 2, opacity : 0 } );

			var X = $("#pensee_1").position().left;
			var Y = $("#pensee_1").position().top;

			TweenMax.to( $("#pensee_2"), 0, { x : X, y : Y, opacity : 0, scaleX : 0, scaleY : 0 } );

			X = w * pensees[ 1 ].x;
			Y = h * pensees[ 1 ].y;
		
			$("#pensee_2").css('visibility', 'visible');

			var w2 = $("#pensee_2").width() /2;
			var h2 = $("#pensee_2").height() /2;

			TweenMax.to( $("#pensee_2"), .25, { x : X - w2, y : Y - h2, opacity : .7, scaleX : 1, scaleY : 1, onComplete : function(){
				TweenMax.to( $("#pensee_2"), 1, { delay : 2, opacity : 0 } );

				var X = $("#pensee_2").position().left;
				var Y = $("#pensee_2").position().top;

				TweenMax.to( $("#pensee_3"), 0, { x : X, y : Y, opacity : 0, scaleX : 0, scaleY : 0 } );

				X = w * pensees[ 2 ].x;
				Y = h * pensees[ 2 ].y;

				$("#pensee_3").css('visibility', 'visible');

				var w2 = $("#pensee_3").width()/2 ;
				var h2 = $("#pensee_3").height()/2 ;

				TweenMax.to( $("#pensee_3"), .25, { x : X - w2, y : Y - h2, opacity : .5, scaleX : .8, scaleY : .8, onComplete : function() {
					TweenMax.to( $("#pensee_3"), 1, { delay : 4, opacity : 0, onComplete : function(){
						anim.boules();
					} } );
				} } );
			}});
		} } );
	},

	brasCellulaire : function(){
		var element = $('#cellImg');

		var animElement = TweenMax.to( element, 0.3, { delay : 2, x : -150, y : -150 , onComplete : function(){
			//animElement.reverse();
		}} );
	},

	tablette : function(){
		var element = $('#tabletteImg');

		var animElement = TweenMax.to( element, 0.5, { delay : 2, y : -200 , onComplete : function(){
			//animElement.reverse();
		}} );
	},

	bonhommeCell : function(){
		var w = window.innerWidth;
		var h = window.innerHeight;
		var standard = 1920;
		var scale = w / standard;
			scale = scale < .5 ? .5 : scale;
		var o       = $(".bonhommeContactImg");
		var cell    = $("#cellContact");
		var X, Y;

		transformMatrix =	o.css("-webkit-transform") ||
							o.css("-moz-transform")    ||
							o.css("-ms-transform")     ||
							o.css("-o-transform")      ||
							o.css("transform");

		if (transformMatrix !== 'none') {
			matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
			X      = matrix[12] || matrix[4];
			Y      = matrix[13] || matrix[5];
		} else {
			p  = o.position();
			X  = p.left;
			Y  = p.top;
		}

		p  = o.position();
		X  = p.left;
		Y  = p.top;

		var bouleWidth  = o.width();
		var bouleHeight = o.height();

		cell.css('visibility', 'visible').zIndex(10000);
		TweenMax.to( cell, 0, { scale : scale, x : X - 100 * scale, y : Y + 80 * scale } );
	},

	qaptcha : function(){
		var w = window.innerWidth;
		var h = window.innerHeight;
		var standard = 1920;
		var scale = w / standard;
			scale = scale < .4 ? .4 : scale;
		var o = $("#qaptcha");

		TweenMax.to(o, 0, {scale:scale});
	},
	
	cellRinging : function(){
		var cell  = $(".bonhommeCell");
		var delay = 3;

		for (var i = 0; i < 30; i += 1) {
			TweenLite.to(cell, .05, {delay : delay, rotation:-2, transformOrigin:"50% 50%"});
			delay += .05
			TweenLite.to(cell, .05, {delay : delay, rotation:1, transformOrigin:"50% 50%"});
			delay += .05
		}
	}
}