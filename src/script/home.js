
const config = require('./././config.json');
function startTime() {
    var today = new Date();
    var t = getTime(today.getHours(), today.getMinutes(), today.getSeconds()) + "<br>" + getDate(today.getDate(), today.getMonth(), today.getFullYear());
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
