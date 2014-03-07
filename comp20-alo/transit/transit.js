function initialize() {

	var landmark = new google.maps.LatLng(42.4069, -71.1198);

	var myOptions = {
		zoom: 13,
		center: landmark,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}