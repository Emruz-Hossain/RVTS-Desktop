
const config = require('./././config.json');

function startTime() {
    var today = new Date();
    var t = getTime(today.getHours(), today.getMinutes(), today.getSeconds()) +"<br>"+config.DayName[today.getDay()]+ "<br>" + getDate(today.getDate(), today.getMonth(), today.getFullYear());
    document.getElementById('timeDate').innerHTML = t;
    var t = setTimeout(startTime, 500);
}
function getTime(h, m, s) {
    var ext = "";
    if (h > 12)
    {
        h -= 12;    
        ext = "PM";
    }
    else if (h == 12)
    {
        ext = "PM";
    }
    else
    {
        ext = "AM";
    }
    var time = "";
    if (h < 10)
        time += "0" + h;
    else
        time += h;
    time += ":";
    if (m < 10)
        time += "0" + m;
    else
        time += m;
    time+=":"
    if (s < 10)
        time += "0" + s;
    else
        time += s;    
    time += " " + ext;
    return time;

}

function getDate(d, m, y)
{
    var date = d + " " + config.MonthName[m] + " " + y;;
    return date;
}

startTime();

function getTargetVesselInfo(id) {
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP);
    }
    var parameters = "";
    parameters += "?id=" + id;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            $("#vessel-name").text(response.name);
            $("#owner-name").text(response.firstName + " " + response.lastName);
            $("#capacity").text(response.capacity);
        }
    }
    xhttp.open("GET", "http://104.244.120.111/~emruzcom/RVTS-Admin/src/php/RVTS-Desktop_targetVesselInfo.php" + parameters, true);
    xhttp.send();

}


function displayLoadStatus(distance)
{
    var high = 53;
    var low = 28;
    var load = ((high - distance) * 100) / (high - low);
    
    $('#current-load').text("Current Load: " + load + " % of capacity");
                                                                                                        if(load >= 120.0)
    {
        $('#load-status').css("color", "red");
        $('#load-status').text("Emergency");
        setLoadStatus("Emergency", load);
    }    
    else if (load >= 100.0)
    {
        $('#load-status').css("color", "red");
        $('#load-status').text("OVERLOADED");
        setLoadStatus("Overloaded",load);
    }
    else
    {
        
        $('#load-status').css("color", "green");
        $('#load-status').text("SAFE");
        setLoadStatus("Safe",load);
    }
}


function writeToFile(str){
var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fh = fso.OpenTextFile("data.txt", 8, false, 0);
    fh.WriteLine(str);
    fh.Close();
}


var slat = 23.769357;
var slng = 90.381475;
var sload_status = "Safe";
var sload_percentage = 0;
var srunning_status = 1;
var sspeed = 0;
var myID = 25;

function setLoadStatus(lstatus, lpercentage) {
    sload_status = lstatus;
    sload_percentage = lpercentage;
}
// function setGpsInfo(lat, lng, speed) {
//     slat = lat;
//     slng = lng;
//     sspeed = speed;
// }

function updateVesselInfo(id,destination,loadStatus,loadPercentage,latitude,longitude,speed) {
    if (window.XMLHttpRequest) // for new browser
    {
        xhttp = new XMLHttpRequest();
    }
    else    // for old IE
    {
        xhttp = ActiveXObject(Microsoft.XMLHTTP);
    }

    var parameters = "";
    parameters += "?id=" + id;
    parameters += "&destination=" + destination;
    parameters += "&loadStatus=" + loadStatus;
    parameters += "&loadPercentage=" + loadPercentage;
    parameters += "&latitude=" + latitude;
    parameters += "&longitude=" + longitude;
    parameters += "&speed=" + speed;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            console.log(response);
        }
    }
    xhttp.open("GET", "http://104.244.120.111/~emruzcom/RVTS-Admin/src/php/RVTS-Desktop_updateInfo.php" + parameters, true);
    xhttp.send();
    console.log("updated");
}

function sendData()
{
    console.log("Hi i am sendData :)");
    console.log("sendData() called");
    var dropdown = document.getElementById("destination-selector");
    // var destination = dropdown.options[dropdown.selectedIndex].value;
    updateVesselInfo(myId, "N/A", sload_status, sload_percentage, 23.769357, 90.381475, sspeed);
}