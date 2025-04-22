const hint = "南国 + 赤い果実";
const answer = "パイナップル";

function showHint() {
  document.getElementById("hintArea").innerText = "ヒント: " + hint;
}

function checkAnswer() {
  const guess = document.getElementById("guess").value.trim();
  if (guess === answer) {
    document.getElementById("result").innerText = "正解！シンクロ率100%！";
  } else {
    document.getElementById("result").innerText = "不正解...もう一度試してね。";
  }
}