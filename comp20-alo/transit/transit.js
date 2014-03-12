function initialize() {

	xhr = new XMLHttpRequest();
			xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);

	//use when rendering stations
	//scheduleData = JSON.parse(xhr.responseText);
	//pt new google.maps.LatLng(//get lat and lng from csv file)
	//markers.push(new google.maps.Marker({position: pt, title: "South Station", icon: tico}));

	//use geolocation here
	var landmark = new google.maps.LatLng(42.4069, -71.1198);
	var markers = [];
	/*
	function getMyLocation() {
		if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
			navigator.geolocation.getCurrentPosition(function(position) {
				myLat = position.coords.latitude;
				myLng = position.coords.longitude;
				renderMap();
			});
		}
		else {
			alert("Geolocation is not supported by your web browser.  What a shame!");
		}
	}
	*/

	var myOptions = {
		zoom: 13,
		center: landmark,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	function drawBlue {
		pt = new google.maps.LatLng(42.374262, -71.030395);
		markers.push(new google.maps.Marker({position: pt, title: "Airport"}));
	}

	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}