

var mylocation = { lat: 0, lng: 0};

var myId = 25;
var safeDistance = 20;
function getVesselInfo()
{
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP); 
    }
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status==200)
        {
            var response = JSON.parse(this.responseText);
            var allVesselInfo = response;
            var windowHeight = $(window).height();
            // $("#map").css("height", windowHeight);

            var centerIndx = 0;
            for (var i = 0; i < allVesselInfo.length; i++)
            {
                if (allVesselInfo[i].id == myId)
                {
                    centerIndx = i;
                    break;
                }    
            }
            console.log(centerIndx);
            mylocation.lat = allVesselInfo[centerIndx].lat;
            mylocation.lng = allVesselInfo[centerIndx].lng;
            console.log(mylocation);
            var map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng(mylocation.lat, mylocation.lng),
                zoom: 12
            });
            // google.maps.event.trigger(map, 'resize');

            
            for (var i = 0; i < allVesselInfo.length; i++)
            {
                var vesselInfo = "<div><p class=\"text-center\">"+allVesselInfo[i].name+"<br>Dest: "+allVesselInfo[i].destination+"<br>Lat: "+allVesselInfo[i].lat+"<br>Long: "+allVesselInfo[i].lng+"<br>Speed:"+allVesselInfo[i].speed+"kmph</div>";
                var infowindow = new google.maps.InfoWindow({
                    content: vesselInfo,
                    disableAutoPan: true
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(allVesselInfo[i].lat, allVesselInfo[i].lng),
                    map: map,
                    icon:"./resources/icons/ship1.png",
                    title: allVesselInfo[i].name
                });    
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });
                infowindow.open(map, marker);
            }
            var isLowDistance = 0;
            for (var i = 0; i < allVesselInfo.length; i++)
            {
                if (allVesselInfo[i].id != myId)
                {
                    var otherLocation = { lat: allVesselInfo[i].lat, lng: allVesselInfo[i].lng };
                    var distance = getDistance(mylocation, otherLocation);
                    console.log("dist: " + distance);
                    if (distance < safeDistance)
                    {
                        isLowDistance = 1;
                    }    
                }    
            }
            if (isLowDistance == 1)
            {
                $("#warning-div").css("display", "block");
            }
            else
            {
                $("#warning-div").css("dispaly", "none");
            }    
        }    
    }
    xhttp.open("GET", "http://104.244.120.111/~emruzcom/RVTS-Admin/src/php/RVTS-Desktop_vesselInfo.php", true);
    xhttp.send();
    
}
var rad = function(x) {
  return x * Math.PI / 180;
};

var getDistance = function(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat - p1.lat);
  var dLong = rad(p2.lng- p1.lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; // returns the distance in meter
};

