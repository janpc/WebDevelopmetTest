window.onload= function() {
    if (typeof Storage !== "undefined") {
        document.getElementById("demo").innerHTML = "Hola "+sessionStorage.name;
    } else {
        document.getElementById("demo").innerHTML =
        "Sorry, your browser does not support web storage...";
    }
};