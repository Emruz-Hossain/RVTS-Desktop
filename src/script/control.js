var destination = "Select Destination";
function showHomePage() {
    $('#main').load('./src/html/home.html');
    if (sidebar_status == "opened")
        sidebar_close();
    setTimeout(function () {
        
        $("#home-destination-text").text(destination);
    }, 100);
}
function showMapPage() {
    $('#main').load('./src/html/map.html');
    if (sidebar_status == "opened")
    sidebar_close();
}
function showWeatherPage() {
    $('#main').load('./src/html/weather.html');
    if (sidebar_status == "opened")
        sidebar_close();
    }
function showSchedulePage() {
    $('#main').load('./src/html/schedule.html');
    if (sidebar_status == "opened")
        sidebar_close();
    }
function showSettingPage() {
    $('#main').load('./src/html/setting.html');
    if (sidebar_status == "opened")
        sidebar_close();
    }
    
 function destinationSelector() {
       var dropdown = document.getElementById("destination-selector");
       var selected = dropdown.options[dropdown.selectedIndex].value;
       destination = selected;
 }

    
showHomePage();