var randomnumber1 = Math.floor(Math.random() * 6)+1;
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomnumber1 + ".png");
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomnumber2 + ".png");
if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 won!";
}
else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 1 won!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}