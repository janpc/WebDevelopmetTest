window.onload= function() {
    if (typeof Storage !== "undefined") {
        document.getElementById("demo").innerHTML = "Hola "+sessionStorage.name;
    } else {
        document.getElementById("demo").innerHTML =
        "Sorry, your browser does not support web storage...";
    }
    radioQuestion(0);
};

function radioQuestion(q) {
    document.getElementById("question").innerHTML="<h3>"+questions[q].question+"</h3>";
    let answers = randomArray(questions[q].answers);
    answers.forEach(answer => {
        document.getElementById("question").innerHTML+='<input type="radio" id="a" name="A" value="a" /><label for="a1">'+answer+'</label><br />'
    });
  }


  function randomArray(array){
    for(let i = array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array;
  }