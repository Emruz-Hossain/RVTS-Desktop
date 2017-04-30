

var map;
var mylocation = { lat: 22.4230000, lng: 91.93940089999996 };
var v1 = { lat: 22.4200000, lng: 91.92040089999996 };
var v2 = { lat: 22.4190000, lng: 91.91090089999996 };
var v3 = { lat: 22.4180000, lng: 91.95940089999996 };
var v4 = { lat: 22.4130000, lng: 91.96940089999996 };
var v5= { lat: 22.380000, lng: 91.88540089999996 };
function initMap() {    
   
    map = new google.maps.Map(document.getElementById('map'),{
        center: mylocation,
        zoom: 14
    });
    var marker = new google.maps.Marker({
        position: mylocation,
        map: map,
       
        title: "MV MARINAE 4\nSpeed: 20km/h\nDestination: Khulna"
    });
    var marker1 = new google.maps.Marker({
        position: v1,
        map: map,
         icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        title: "MV RV 1\nSpeed: 20km/h\nDestination: Khulna"
    });
    var marker2 = new google.maps.Marker({
        position: v2,
        map: map,
         icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        title: "MV RV 2\nSpeed: 20km/h\nDestination: Khulna"
    });
    var marker3 = new google.maps.Marker({
        position: v3,
        map: map,
         icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        title: "MV RV 3\nSpeed: 20km/h\nDestination: Khulna"
    });
    var marker4 = new google.maps.Marker({
        position: v4,
        map: map,
         icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        title: "MV RV 4\nSpeed: 20km/h\nDestination: Khulna"
    });
    var marker5 = new google.maps.Marker({
        position: v5,
        map: map,
         icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        title: "MV RV 5\nSpeed: 20km/h\nDestination: Khulna"
    });

}
