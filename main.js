
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (true) {
       // Typical action to be performed when the document is ready:       
       let data = JSON.parse(xhttp.response)
       document.getElementById("display").innerHTML =  data.userName;
    }
};
xhttp.open("GET", "http://localhost:3000/", true);
xhttp.send();
