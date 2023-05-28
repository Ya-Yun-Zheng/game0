const dataPanel = document.querySelector("#data-panel");
const actionDataPanel = document.querySelector("#action-data-panel");

dataPanel.addEventListener("click", function (event) {
  if (
    event.target.matches(".fa-plus-circle") ||
    event.target.matches(".fa-minus-circle")
  ) {
    const scoreBox = event.target.parentElement.children[1];
    let score = Number(scoreBox.innerText);

    if (event.target.matches(".fa-plus-circle")) {
      score += 1;
    } else {
      score -= 1;
      if (score < 0) {
        score = 0;
      }
    }
    scoreBox.innerText = score;
  }
});

actionDataPanel.addEventListener("click", function (event) {
  if (
    event.target.matches(".fa-plus-circle") ||
    event.target.matches(".fa-minus-circle")
  ) {
    const scoreBox = event.target.parentElement.children[3];
    let score = Number(scoreBox.innerText);

    if (event.target.matches(".fa-plus-circle")) {
      score += 1;
      if (score >= 5) {
        score = 5;
      }
    } else {
      score -= 1;
      if (score < 0) {
        score = 0;
      }
    }
    scoreBox.innerText = score;
  }
});