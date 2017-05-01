const scheduleinfo = require('./././config.json');
var DemoData = scheduleinfo.DemoData;
var elem = DemoData[0].split('+');
// document.getElementById("schedule-table").innerHTML = "<tr><th>1</th><th>MV R1</th><th>Dhaka</th><th>Chittagong</th><th>2:00</th><th>23:00</th></tr>";
function setTableContent() {

    var rowElements
    var sl = 1;
    DemoData.forEach(function(element) {
        rowElements = element.split('+');
        $('#schedule-table tr:last').after("<tr><td>" + sl + "</td><td>" + rowElements[0] + "</td><td>" + rowElements[1] + "</td><td>" + rowElements[2] + "</td><td>" + rowElements[3] + "</td><td>" + rowElements[4] + "</td></tr>");
        sl++;
    }, this);    
       

}
setTableContent();

function interActiveSearch() {
    var input, filter, table, tr, td, i;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    table = document.getElementById("schedule-table");
    tr = table.getElementsByTagName("tr");
    tr[1].style.display = "none";
    for (i = 0; i < tr.length; i++)
    {
        td = tr[i].getElementsByTagName("td")[1];
        if (td)
        {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else
                tr[i].style.display = "none";    
        }    
    }    
}