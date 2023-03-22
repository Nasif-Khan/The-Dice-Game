<<<<<<< HEAD
document.querySelector(".roll").addEventListener("click", roll);

function roll(){
    var number1 = Math.floor(Math.random()*6)+1;
    var number2 = Math.floor(Math.random()*6)+1;

    var firstDice = "images/dice" + number1 + ".png";
    var secondDice = "images/dice" + number2 + ".png";


    document.querySelectorAll("img")[0].setAttribute("src",firstDice);
    document.querySelectorAll("img")[1].setAttribute("src",secondDice);

    if(number1 > number2){
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
    else if(number2 > number1){
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
=======
var number1 = Math.floor(Math.random()*6)+1;
var number2 = Math.floor(Math.random()*6)+1;

var firstDice = "images/dice" + number1 + ".png";
var secondDice = "images/dice" + number2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",firstDice);
document.querySelectorAll("img")[1].setAttribute("src",secondDice);

if(number1 > number2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(number2 > number1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
>>>>>>> 1cedaf7214f1a772a83e71d65e37d5d560682ed0
}