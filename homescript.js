function myFunction() {
    sessionStorage.name = document.getElementById("NickName").value;

    if (sessionStorage.name != "") {
      window.location = "form.html";
    }
}

