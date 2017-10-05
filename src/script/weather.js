const $ = require('jquery');
const weatherinfo = require('./config.json');

function setDays() {    
    
    var today = new Date();
    var dayno = today.getDay();
    console.log(dayno);
    
    $(".forecast-item-holder .forecast-day .col-1").text(weatherinfo.DayName[dayno]);
    dayno++;
    if (dayno >= 7)
        dayno = 1;    

    $(".forecast-item-holder .forecast-day .col-2").text(weatherinfo.DayName[dayno]);
    dayno++;
    if (dayno > 7)
        dayno = 1;    

    $(".forecast-item-holder .forecast-day .col-3").text(weatherinfo.DayName[dayno]);
    dayno++;
    if (dayno > 7)
        dayno = 1;    

    $(".forecast-item-holder .forecast-day .col-4").text(weatherinfo.DayName[dayno]);
    dayno++;
    if (dayno > 7)
        dayno = 1;    

    $(".forecast-item-holder .forecast-day .col-5").text(weatherinfo.DayName[dayno]);
    dayno++;
    if (dayno > 7)
        dayno = 1;    
}

function setIcon()
{
    var iconno = 0;
    $(".forecast-item-holder .forecast-icon .col-1").html("<i class=\"wi " + weatherinfo.Icons[iconno] + "\"></i>");
    iconno++;
    $(".forecast-item-holder .forecast-icon .col-2").html("<i class=\"wi " + weatherinfo.Icons[iconno] + "\"></i>");
    iconno++;
    $(".forecast-item-holder .forecast-icon .col-3").html("<i class=\"wi " + weatherinfo.Icons[iconno] + "\"></i>");
    iconno++;
    $(".forecast-item-holder .forecast-icon .col-4").html("<i class=\"wi " + weatherinfo.Icons[iconno] + "\"></i>");
    iconno++;
    $(".forecast-item-holder .forecast-icon .col-5").html("<i class=\"wi " + weatherinfo.Icons[iconno] + "\"></i>");
    iconno++;
}

function setTemp() {
    var sl = 0;
    $(".forecast-item-holder .forecast-temp .col-1 .temp").text(weatherinfo.Temp[sl++]);
    $(".forecast-item-holder .forecast-temp .col-2 .temp").text(weatherinfo.Temp[sl++]);
    $(".forecast-item-holder .forecast-temp .col-3 .temp").text(weatherinfo.Temp[sl++]);
    $(".forecast-item-holder .forecast-temp .col-4 .temp").text(weatherinfo.Temp[sl++]);
    $(".forecast-item-holder .forecast-temp .col-5 .temp").text(weatherinfo.Temp[sl++]);
    
}

function setTempDetails() {
    var sl = 0;
    $(".forecast-item-holder .forecast-details .col-1").text(weatherinfo.TempDetails[sl++]);
    $(".forecast-item-holder .forecast-details .col-2").text(weatherinfo.TempDetails[sl++]);
    $(".forecast-item-holder .forecast-details .col-3").text(weatherinfo.TempDetails[sl++]);
    $(".forecast-item-holder .forecast-details .col-4").text(weatherinfo.TempDetails[sl++]);
    $(".forecast-item-holder .forecast-details .col-5").text(weatherinfo.TempDetails[sl++]);
}
function load_weather_content() {   
setDays();
setIcon();
setTemp();
setTempDetails();
}