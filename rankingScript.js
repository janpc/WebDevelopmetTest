ranking = [];
rankingGreaterThan=[];
rankingLessThan=[];
window.onload = function () {
  ranking = JSON.parse(sessionStorage.getItem("ranking"));
  rankingGreaterThan=ranking.slice().sort(greaterThan);
  rankingLessThan=ranking.slice().sort(lessThan);
  alert(rankingLessThan[0]);
  showRanking();
};

function showRanking() {
  let print = "<h1>Ranking</h1> <h3>Your Score: "+ranking[ranking.length-1].score+"</h3><table>";
  print += "<tr> <th>Nickname</th> <th>Score</th> </tr>";
  for (i = ranking.length - 1; i >= 0; i--) {
    print +=
      "<tr> <td>" +
      ranking[i].nick +
      "</td> <td>" +
      ranking[i].score +
      "</td> </tr>";
  }
  print += '</table><br><br><button type="button" onclick="showRankingGreaterThan()"> Highest Scores</button> <button type="button" onclick="showRankingLessThan()"> Lowest Scores</button><br><br>';

  document.getElementById("ranking").innerHTML = print;
}
function showRankingLessThan() {
    let print = "<h1>Ranking</h1> <h3>Your Score: "+ranking[ranking.length-1].score+"</h3><table>";
    print += "<tr> <th>Nickname</th> <th>Score</th> </tr>";
    for (i = rankingLessThan.length - 1; i >= 0; i--) {
      print +=
        "<tr> <td>" +
        rankingLessThan[i].nick +
        "</td> <td>" +
        rankingLessThan[i].score +
        "</td> </tr>";
    }
    print += '</table><br><br><button type="button" onclick="showRankingGreaterThan()"> Highest Scores</button> <button type="button" onclick="showRanking()"> Last Scores</button><br><br>';
  
    document.getElementById("ranking").innerHTML = print;
  }

  function showRankingGreaterThan() {
    let print = "<h1>Ranking</h1> <h3>Your Score: "+ranking[ranking.length-1].score+"</h3><table>";
    print += "<tr> <th>Nickname</th> <th>Score</th> </tr>";
    for (i = rankingGreaterThan.length - 1; i >= 0; i--) {
      print +=
        "<tr> <td>" +
        rankingGreaterThan[i].nick +
        "</td> <td>" +
        rankingGreaterThan[i].score +
        "</td> </tr>";
    }
    print += '</table><br><br> <button type="button" onclick="showRanking()"> Last Scores</button> <button type="button" onclick="showRankingLessThan()"> Lowest Scores</button><br><br>';
  
    document.getElementById("ranking").innerHTML = print;
  }

function lessThan(a, b) {
  return b.score - a.score;
}

function greaterThan(a, b) {
    return a.score - b.score;
  }

function retry() {
  window.location = "homepage.html";
}
