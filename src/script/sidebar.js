 function sidebar_open() {
            document.getElementById("main").style.marginLeft = "7%";
            document.getElementById("sideBar").style.width = "7%";
            document.getElementById("sideBar").style.display = "block";
            document.getElementById("openNav").style.display = 'none';
        }
        function sidebar_close() {
            document.getElementById("main").style.marginLeft = "0%";
            document.getElementById("sideBar").style.display = "none";
            document.getElementById("openNav").style.display = "inline-block";
        }