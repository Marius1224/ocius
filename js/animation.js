var animObjects = {};

var rotateUp = {
	init : function(o, factor){
			var X = o.position().left;
			var Y = o.position().top;

			var random = Math.random() * 50 - 25;

			if (TweenMax.isTweening( o ) === false && typeof animObjects[o[0].id] == "undefined") {
				animObjects[o[0].id] = true;

				if (factor > 0) {
					TweenMax.to(o, .5, {delay:.25,bezier:[{left:random, top:0}, {left:0, top:random}, {left:-random, top:0}, {left:0, top:-random}], onComplete:function(){
						TweenMax.to(o, .1, {left:0, top: 0, onComplete:function() {
							TweenMax.to(o, .1, {left:0, top:-random/2, onComplete:function() {
								TweenMax.to(o, .1, {left:0, top:0, ease:Bounce.easeOut, onComplete:function(){
									delete animObjects[o[0].id];
								}});
							}});
						}});
					}});
				} else {
					TweenMax.to(o, .5, {delay:.25,bezier:[{left:0, top:-random}, {left:-random, top:0}, {left:0, top:random},{left:random, top:0}], onComplete:function(){
						TweenMax.to(o, .1, {left:0, top: 0, onComplete:function() {
							TweenMax.to(o, .1, {left:0, top:random/2, onComplete:function() {
								TweenMax.to(o, .1, {left:0, top:0, ease:Bounce.easeOut, onComplete:function(){
									delete animObjects[o[0].id];
								}});
							}});
						}});
					}});
				}
			}
		}
};	