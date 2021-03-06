var ans = "";
var multipleAns = [];
var actualQ = 0;
var correctAnswers = 0;
var userAnswers = [];
var nick = sessionStorage.name;
var barWidth = 0;

window.onload = function () {
  correctAnswers = 0;
  actualQ = 0;
  changeQuestion();
};

function changeQuestion() {
  if (actualQ == 0) {
    barWidth = 0;
  } else if (actualQ < 10) {
    barWidth += 34 / 9;
  } else if (actualQ < 15) {
    barWidth += 33 / 5;
  } else {
    barWidth += 33 / 6;
  }
  animation();
  document.getElementById("mainBar").style.width = barWidth + "%";
  actualQ++;

  if (actualQ < 20) {
    setTimeout(function () {
      if (questions[actualQ].type == "radio") {
        radioQuestion(actualQ);
      } else if (questions[actualQ].type == "checkbox") {
        checkboxQuestion(actualQ);
      } else {
        dropDownQuestion(actualQ);
      }
    }, 501);
  } else {
    let ranking = [];
    if (!sessionStorage.ranking) {
      ranking = [
        {
          nick: nick,
          score: correctAnswers,
          answers: userAnswers,
        },
      ];
    } else {
      ranking = JSON.parse(sessionStorage.getItem("ranking"));
      ranking.push({
        nick: nick,
        score: correctAnswers,
        answers: userAnswers,
      });
    }
    window.sessionStorage.setItem("ranking", JSON.stringify(ranking));
    window.location = "ranking.html";
  }
}

//--------------print diferent tyes----------------------
function radioQuestion(q) {
  let print = "<h3 class='question'>" + questions[q].question + "</h3><form>";
  let randomAnswers = questions[q].answers.slice();
  randomAnswers = randomArray(randomAnswers);
  randomAnswers.forEach((answer) => {
    print +=
      '<input type="radio" id="a" name="answer" class="radio" onclick="changeAns(this.value)" value="' +
      answer +
      '"/><label class="answer">' +
      answer +
      "</label><br />";
  });
  print +=
    '<input type="button" class="button" onclick="checkAnswer(' +
    q +
    ')" value="Next" /> </form>';

  document.getElementById("question").innerHTML = print;
}

function checkboxQuestion(q) {
  let print = "<h3 class='question'>" + questions[q].question + "</h3><form>";
  let randomAnswers = questions[q].answers.slice();
  randomAnswers = randomArray(randomAnswers);
  randomAnswers.forEach((answer) => {
    print +=
      '<input type="checkbox" name="answer" class="checkbox" onclick="changeMultipleAnswers(this.value)" value="' +
      answer +
      '"/><label class="answer">' +
      answer +
      "</label><br />";
  });
  print +=
    '<input type="button" class="button" onclick="checkAnswer(' +
    q +
    ')" value="Next" /> </form>';

  document.getElementById("question").innerHTML = print;
}

function dropDownQuestion(q) {
  let print =
    "<h3 class='question'>" +
    questions[q].question +
    "</h3><form><select class='dropDown' id='mySelect'>";
  let randomAnswers = questions[q].answers.slice();
  randomAnswers = randomArray(randomAnswers);

  randomAnswers.forEach((answer) => {
    print += '<option value="' + answer + '">' + answer + "</option>";
  });
  print +=
    '</select> <br><input type="button" class="button" onclick="checkAnswer(' +
    q +
    ')" value="Next" /> </form>';

  document.getElementById("question").innerHTML = print;
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
  if (actualQ == 0) {
    userAnswers = [];
  }
  if (questions[q].type == "drop-down") {
    changeAns(document.getElementById("mySelect").value);
  }
  if (questions[q].correctAnswers == 1) {
    if (questions[q].answers[0] == ans) {
      correctAnswers++;
    } else {
    }
    userAnswers.push(ans);
    ans == "";
  } else if (questions[q].correctAnswers == 2) {
    if (
      (questions[q].answers[0] == multipleAns[0] &&
        questions[q].answers[1] == multipleAns[1]) ||
      (questions[q].answers[0] == multipleAns[1] &&
        questions[q].answers[1] == multipleAns[0])
    ) {
      correctAnswers++;
    } else {
    }
    userAnswers.push(multipleAns);
    multipleAns = [];
  } else {
  }

  document.getElementById("question").innerHTML += "";

  changeQuestion();
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

//-------animation------------
function animation() {
  document.getElementById("question").className = "";
  setTimeout(function () {
    document.getElementById("question").className = "hideAndShow";
  }, 1);
}
