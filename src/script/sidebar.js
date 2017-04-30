var sidebar_status = "closed";

function sidebar_control() {
    if (sidebar_status == "closed")
        sidebar_open();
    else
        sidebar_close();   
} 
function sidebar_open() {
            document.getElementById("main").style.marginLeft = "7%";
            document.getElementById("sideBar").style.width = "7%";
            document.getElementById("sideBar").style.display = "block";
            sidebar_status = "opened";
        }
function sidebar_close() {
            document.getElementById("main").style.marginLeft = "0%";
            document.getElementById("sideBar").style.display = "none";
            sidebar_status = "closed";
    
        }