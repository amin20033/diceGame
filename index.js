let var1 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".player1 img")
  .setAttribute("src", "./images/dice" + var1 + ".png");
let var2 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".player2 img")
  .setAttribute("src", "./images/dice" + var2 + ".png");
if (var1 > var2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!!";
} else if (var2 > var1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!!";
} else {
  document.querySelector("h1").innerHTML = "Draw!!";
}
