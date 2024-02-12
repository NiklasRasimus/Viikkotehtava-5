document.addEventListener("DOMContentLoaded", function() {
    var diceImage = document.getElementById("dice");
    diceImage.addEventListener("click", rollDice);
});

function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    var imagePath = "./img/" + randomNumber + ".png";

    var diceImage = document.querySelector("#dice img");
    diceImage.setAttribute("src", imagePath);
}
