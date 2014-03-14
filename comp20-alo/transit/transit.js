var stationList = [{"line":"Blue","station":"Wonderland","lat":"42.41342","lng":"-70.991648"},
{"line":"Blue","station":"Revere Beach","lat":"42.40784254","lng":"-70.99253321"},
{"line":"Blue","station":"Beachmont","lat":"42.39754234","lng":"-70.99231944"},
{"line":"Blue","station":"Suffolk Downs","lat":"42.39050067","lng":"-70.99712259"},
{"line":"Blue","station":"Orient Heights","lat":"42.386867","lng":"-71.00473599999999"},
{"line":"Blue","station":"Wood Island","lat":"42.3796403","lng":"-71.02286539000001"},
{"line":"Blue","station":"Airport","lat":"42.374262","lng":"-71.030395"},
{"line":"Blue","station":"Maverick","lat":"42.36911856","lng":"-71.03952958000001"},
{"line":"Blue","station":"Aquarium","lat":"42.359784","lng":"-71.051652"},
{"line":"Blue","station":"State Street","lat":"42.358978","lng":"-71.057598"},
{"line":"Blue","station":"Government Center","lat":"42.359705","lng":"-71.05921499999999"},
{"line":"Blue","station":"Bowdoin","lat":"42.361365","lng":"-71.062037"},
{"line":"Orange","station":"Oak Grove","lat":"42.43668","lng":"-71.07109699999999"},
{"line":"Orange","station":"Malden Center","lat":"42.426632","lng":"-71.07411"},
{"line":"Orange","station":"Wellington","lat":"42.40237","lng":"-71.077082"},
{"line":"Orange","station":"Sullivan","lat":"42.383975","lng":"-71.076994"},
{"line":"Orange","station":"Community College","lat":"42.373622","lng":"-71.06953300000001"},
{"line":"Orange","station":"North Station","lat":"42.365577","lng":"-71.06129"},
{"line":"Orange","station":"Haymarket","lat":"42.363021","lng":"-71.05829"},
{"line":"Orange","station":"State Street","lat":"42.358978","lng":"-71.057598"},
{"line":"Orange","station":"Downtown Crossing","lat":"42.355518","lng":"-71.060225"},
{"line":"Orange","station":"Chinatown","lat":"42.352547","lng":"-71.062752"},
{"line":"Orange","station":"Tufts Medical","lat":"42.349662","lng":"-71.063917"},
{"line":"Orange","station":"Back Bay","lat":"42.34735","lng":"-71.075727"},
{"line":"Orange","station":"Mass Ave","lat":"42.341512","lng":"-71.083423"},
{"line":"Orange","station":"Ruggles","lat":"42.336377","lng":"-71.088961"},
{"line":"Orange","station":"Roxbury Crossing","lat":"42.331397","lng":"-71.095451"},
{"line":"Orange","station":"Jackson Square","lat":"42.323132","lng":"-71.099592"},
{"line":"Orange","station":"Stony Brook","lat":"42.317062","lng":"-71.104248"},
{"line":"Orange","station":"Green Street","lat":"42.310525","lng":"-71.10741400000001"},
{"line":"Orange","station":"Forest Hills","lat":"42.300523","lng":"-71.113686"},
{"line":"Red","station":"Alewife","lat":"42.395428","lng":"-71.142483"},
{"line":"Red","station":"Davis","lat":"42.39674","lng":"-71.121815"},
{"line":"Red","station":"Porter Square","lat":"42.3884","lng":"-71.11914899999999"},
{"line":"Red","station":"Harvard Square","lat":"42.373362","lng":"-71.118956"},
{"line":"Red","station":"Central Square","lat":"42.365486","lng":"-71.103802"},
{"line":"Red","station":"Kendall/MIT","lat":"42.36249079","lng":"-71.08617653"},
{"line":"Red","station":"Charles/MGH","lat":"42.361166","lng":"-71.070628"},
{"line":"Red","station":"Park Street","lat":"42.35639457","lng":"-71.0624242"},
{"line":"Red","station":"Downtown Crossing","lat":"42.355518","lng":"-71.060225"},
{"line":"Red","station":"South Station","lat":"42.352271","lng":"-71.05524200000001"},
{"line":"Red","station":"Broadway","lat":"42.342622","lng":"-71.056967"},
{"line":"Red","station":"Andrew","lat":"42.330154","lng":"-71.057655"},
{"line":"Red","station":"JFK/UMass","lat":"42.320685","lng":"-71.052391"},
{"line":"Red","station":"Savin Hill","lat":"42.31129","lng":"-71.053331"},
{"line":"Red","station":"Fields Corner","lat":"42.300093","lng":"-71.061667"},
{"line":"Red","station":"Shawmut","lat":"42.29312583","lng":"-71.06573796000001"},
{"line":"Red","station":"Ashmont","lat":"42.284652","lng":"-71.06448899999999"},
{"line":"Red","station":"North Quincy","lat":"42.275275","lng":"-71.029583"},
{"line":"Red","station":"Wollaston","lat":"42.2665139","lng":"-71.0203369"},
{"line":"Red","station":"Quincy Center","lat":"42.251809","lng":"-71.005409"},
{"line":"Red","station":"Quincy Adams","lat":"42.233391","lng":"-71.007153"},
{"line":"Red","station":"Braintree","lat":"42.2078543","lng":"-71.0011385"}];
const red_forkPt = 43;
const red_End = 47;
var rodeo;
var tIcon = 'resources/t_marker.png';
var landmark = new google.maps.LatLng(42.4069, -71.1198);
var myOptions = {
	zoom:13,
	center: landmark,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map;
coordsList = [];
forkList = [];
var infowindow = new google.maps.InfoWindow();

function initialize() {
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	rodeo = new XMLHttpRequest();
	rodeo.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);

	rodeo.onreadystatechange = dataReady_rodeo;
	rodeo.send(null);
}

function dataReady_rodeo() {
	if(rodeo.readyState == 4 && rodeo.status == 200) {
		rodeoData = JSON.parse(rodeo.responseText);
		var color = rodeoData.line;
		renderMarkers(color);
		drawLine(color);
	}
	else if(rodeo.readyState == 4 && rodeo.status == 500) {
	}
}


function renderMarkers(color) {
	for(i = 0; i < stationList.length; i++) {
		if(stationList[i].line.toLowerCase() == color) {
			createMarker(i, color);
		}
	}
}

function createMarker(i, color) {
	var stationPos = new google.maps.LatLng(stationList[i].lat, stationList[i].lng);
	var marker = new google.maps.Marker({
		position: stationPos,
		title: stationList[i].station,
		icon: tIcon,
	});
	marker.setMap(map);

	var content = "<strong>" + stationList[i].station + "</strong>" + '<table id="schedule"><tr><th>Line</th><th>Trip #</th><th>Direction</th><th>Time Remaining</th></tr>';
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(content);
		infowindow.open(map, this);
	});
	for(j = 0; j < rodeoData.schedule.length; j++) {
		var sched = rodeoData.schedule[j];
		for(k = 0; k < sched.Predictions.length; k++) {
			var pred = sched.Predictions[k];
			if(pred.Stop == stationList[i].station) {
				content += "<tr><td>" + color + "</td>";
				content += "<td>" + sched.TripID + "</td>";
				content += "<td>" + sched.Destination + "</td>";
				var mins = Math.floor(pred.Seconds/60);
				var secs = pred.Seconds - mins*60;
				if(mins < 10) {
					mins = "0" + mins;
				}
				if(secs < 10) {
					secs = "0" + secs;
				}
				content += "<td>" + mins + ":" + secs + "</td>";
			}
		}
	}

	//Dealing with red line split for polyline
	if(i <= red_End) {
		coordsList.push(stationPos);
	}
	else {
		forkList.push(stationPos);
	}
}

function drawLine(color) {
	var line = new google.maps.Polyline({
	    path: coordsList,
	    geodesic: true,
	    strokeColor: color,
	    strokeWeight: 3
  	});
	line.setMap(map);
	if (color == "red") {
		drawFork(color);
	}
}

function drawFork(color) {
	forkList.unshift(new google.maps.LatLng(stationList[red_forkPt].lat, stationList[red_forkPt].lng));
	var line = new google.maps.Polyline({
	    path: forkList,
	    geodesic: true,
	    strokeColor: color,
	    strokeWeight: 3
  	});
	line.setMap(map);
}