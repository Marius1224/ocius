
window.onload = function () {
			
	styles = [

		{
			featureType: "landscape",
			"elementType": "geometry.fill",
			stylers: [

				{ 
					"color": "#403935" 
				},
				{
					"saturation": 6.5
				},
				{
					"lightness": 0
				},
				{
					"gamma": 0
				}

			]

		},{

			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"hue": "0.67"
				},
				{
					"saturation": 100
				},
				{
					"lightness": 70
				},
				{
					"gamma": 0.1
				}
			]

		},{

			featureType: "natural",

			stylers: [

				{ hue: 'green' },
				{ "saturation": -33 }

			]

		},{

			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [
				{
					"weight": 2
				},						
				{
					"hue": "0.11"
				},
				{
					"saturation": 100
				},
				{
					"lightness": 40
				},
				{
					"gamma": 0.5
				}
			]

		},{
			"featureType": "road.arterial",
			"elementType": "all",
			"stylers": [
				{
					"weight": 1.5
				},
				{
					"hue": "0.11"
				},
				{
					"saturation": 100
				},
				{
					"lightness": 60
				},
				{
					"gamma": 0.15
				}
			]
		},{
			"featureType": "road.local",
			"elementType": "all",
			"stylers": [
				{
					"hue": "0.11"
				},
				{
					"saturation": 100
				},
				{
					"lightness": 68
				},
				{
					"gamma": 0.15
				}
			]
		},{

			featureType: "building",

			elementType: "labels",

			stylers: [

				{ hue: '#ff0066' }

			]

		},{
			"featureType": "poi.park",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},{

			"featureType": "poi.park", //points of interest

			"elementType": "all",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"hue": 0.33
				},
				{
					"saturation": 33
				},
				{
					"lightness": 59
				},
				{
					"gamma": 0.15
				}
			]

		}

	];
}

		
	var latlng=new google.maps.LatLng(45.6421250, -73.500265);
	var mapOcius;	
	
	function initialize() {
		var mapProp = {
			center : latlng,
			zoom : 15,
			mapTypeId : google.maps.MapTypeId.ROADMAP,
			mapTypeControl: true,
			mapTypeControlOptions: {
			  style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			  position: google.maps.ControlPosition.RIGHT_TOP,
			  mapTypeIds: [
				google.maps.MapTypeId.ROADMAP,
				google.maps.MapTypeId.SATELLITE
			  ],
			},
			disableDefaultUI : true,			
			styles : styles,
			scrollwheel : false,
			disableDoubleClickZoom : false,
			backgroundColor : "#606060",
			streetViewControl : true,
			draggable: true,
			zoomControl : true
		};
		
		mapOcius=new google.maps.Map(document.getElementById("map"), mapProp);
		
		
		//alert(mapOcius.mapTypeControlOptions.mapTypeIds);

		marker=new MarkerWithLabel({
			position : latlng,
			icon: 'objets/bonhomme_blanc_carte50.png',
			animation:google.maps.Animation.BOUNCE,
			title: '12085 rue René Lévesque, Montreal (QC) H1B 5L7 Canada'
		});
		/*var couleurBonhomme;
		couleurBonhomme = mapOcius.mapTypeControlOptions.mapTypeIds[1];
		if (mapOcius.mapTypeControlOptions.mapTypeIds == 'satellite') {
			
			marker.setOptions ({
				icon : 'bonhomme_orange_map.png'
			});
		};
		marker.setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function () {
			marker.setAnimation(null);
		}, 1200); 
		mapOcius.addListener('click', startBounce);
		mapOcius.addListener('click', stopBounce);*/
		
		marker.setMap(mapOcius);
		
	}
	google.maps.event.addDomListener(window, 'load', initialize);

	/*function startBounce() {
		if (marker.getAnimation() !== null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	}
	function stopBounce() {
		if (marker.getAnimation() !== null) {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		} else {
			marker.setAnimation(null);
		}
	}*/
	
	
$(document).ready(function() {
	$('#map').click(function () {
		mapOcius.setOptions({
			scrollwheel : true
		});
	});
	
	$( "#map" ).mouseleave(function() {
		mapOcius.setOptions({
			scrollwheel : false
		}); 
	});
});                  
	
	
	
	