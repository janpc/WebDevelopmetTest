function myFunction() {
    sessionStorage.name = document.getElementById("myTextarea").value;

    if (sessionStorage.name != "") {
      window.location = "form.html";

      
    }
}

function clickCounter() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
      sessionStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML =
      "You have clicked the button " +
      sessionStorage.clickcount +
      " time(s) in this session.";
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support web storage...";
  }
}
