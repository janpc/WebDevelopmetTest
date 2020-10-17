var ans = "";
var multipleAns = [];
var actualQ=0;
window.onload = function () {
  if (typeof Storage !== "undefined") {
    document.getElementById("demo").innerHTML = "Hola " + sessionStorage.name;
  } else {
    document.getElementById("demo").innerHTML =
      "Sorry, your browser does not support web storage...";
  }
  changeQuestion();
};
function changeQuestion(){
    if(questions[actualQ].type=="radio"){
        radioQuestion(actualQ);
    }
    else if((questions[actualQ].type=="checkbox")){
        checkboxQuestion(actualQ);
    }
    else{
        dropDownQuestion(actualQ);
    }
}

//--------------print diferent tyes----------------------
function radioQuestion(q) {
    let print =
    "<h3>" + questions[q].question + "</h3><form>";
  let randomAnswers = questions[q].answers.slice();
  randomAnswers = randomArray(randomAnswers);
  randomAnswers.forEach((answer) => {
    print +=
      '<input type="radio" id="a" name="answer" onclick="changeAns(this.value)" value="' +
      answer +
      '"/><label>' +
      answer +
      "</label><br />";
  });
  print +=
    '<input type="button" onclick="checkAnswer(' +
    q +
    ')" value="Next" /> </form>';

    document.getElementById("question").innerHTML=print;
}

function checkboxQuestion(q) {
    let print =
    "<h3>" + questions[q].question + "</h3><form>";
  let randomAnswers = questions[q].answers.slice();
  randomAnswers = randomArray(randomAnswers);
  randomAnswers.forEach((answer) => {
    print +=
      '<input type="checkbox" name="answer" onclick="changeMultipleAnswers(this.value)" value="' +
      answer +
      '"/>' +
      answer +
      "<br />";
  });
  print+=
    '<input type="button" onclick="checkAnswer(' +
    q +
    ')" value="Next" /> </form>';

    document.getElementById("question").innerHTML=print;
}

function dropDownQuestion(q) {
    let print=
    "<h3>" + questions[q].question + "</h3><form><select id='mySelect'>";
  let randomAnswers = questions[q].answers.slice();
  randomAnswers = randomArray(randomAnswers);

  randomAnswers.forEach((answer) => {
    print +=
      '<option value="' +
      answer +
      '">' +
      answer +
      "</option>";
  });
    print+=
    '<input type="button" onclick="checkAnswer(' +
    q +
    ')" value="Next" /> </select> </form>';

   document.getElementById("question").innerHTML=print;
}

//--------------check answer-----------------------------
function changeAns(answer) {
  ans = answer;
}

function changeMultipleAnswers(answer) {
  if (multipleAns.length > 0) {
    var isInside = false;
    for (var i = 0; i < multipleAns.length; i++) {
      if (multipleAns[i] === answer) {
        multipleAns.splice(i, 1);
        isInside = true;
      }
    }
    if (!isInside) {
      multipleAns.push(answer);
    }
  } else {
    multipleAns.push(answer);
  }
}

function checkAnswer(q) {
    if(questions[q].type=="drop-down"){
        changeAns(document.getElementById("mySelect").value);
    }
  if (questions[q].correctAnswers == 1) {
    if (questions[q].answers[0] == ans) {
      alert("Correct answer");
    } else {
      alert("Wrong answer");
    }
  } else if (questions[q].correctAnswers == 2) {
    if (
      (questions[q].answers[0] == multipleAns[0] &&
        questions[q].answers[1] == multipleAns[1]) ||
      (questions[q].answers[0] == multipleAns[1] &&
        questions[q].answers[1] == multipleAns[0])
    ) {
      alert("Correct answer");
    } else {
      alert("Wrong answer");
    }
  } else {
    alert("Wrong answer");
  }

  document.getElementById("question").innerHTML += "";
  actualQ++;
  changeQuestion();
  //alert(questions[q].answers[0]);
  //alert(ans);
}

//------------ random array order-----------------------
function randomArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
