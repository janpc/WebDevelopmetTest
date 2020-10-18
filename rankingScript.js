ranking = [];
rankingGreaterThan=[];
rankingLessThan=[];
window.onload = function () {
  ranking = JSON.parse(sessionStorage.getItem("ranking"));
  rankingGreaterThan=ranking.slice().sort(greaterThan);
  rankingLessThan=ranking.slice().sort(lessThan);
  showRanking(ranking);
};

function showRanking(rank) {
  let print = "<h1 class='mainTitle'>Ranking</h1> <h3 class='score' >Your Score: "+ranking[ranking.length-1].score+"</h3><table>";
  print += "<tr> <th>Nickname</th> <th>Score</th> </tr>";
  for (i = rank.length - 1; i >= 0; i--) {
    print +=
      "<tr> <td>" +
      rank[i].nick +
      "</td> <td>" +
      rank[i].score +
      "</td> </tr>";
  }
  print += '</table><br><br><button type="button" class="smallButtons" onclick="showRanking(rankingGreaterThan)""> Highest Scores</button> <button type="button" class="smallButtons" onclick="showRanking(rankingLessThan)">Lowest Scores</button><button type="button" class="smallButtons" onclick="showRanking(ranking)"> Last Scores</button><br><br>';

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
