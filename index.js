window.addEventListener("load", () => {
    diceGame();
});

function diceGame() {
    var button = document.getElementById("btn");

    button.addEventListener("click", function () {

        var heading = document.querySelector('.heading');
        var resultOne = document.querySelector('.result-1');
        var resultTwo = document.querySelector('.result-2');
        var resultDraw = document.querySelector('.result-3');

        var allDice = document.querySelectorAll(
            ".left-dice-1, .left-dice-2, .left-dice-3, .left-dice-4, .left-dice-5, .left-dice-6, .right-dice-1, .right-dice-2, .right-dice-3, .right-dice-4, .right-dice-5, .right-dice-6"
        );

        allDice.forEach(function (dice) {
            dice.classList.add("hidden");
        });

        var leftNumber = Math.floor(Math.random() * 6) + 1;
        var rightNumber = Math.floor(Math.random() * 6) + 1;

        var leftDiceToShow = document.querySelector(".left-dice-" + leftNumber);
        leftDiceToShow.classList.remove("hidden");
        shakeDice(leftDiceToShow);

        var rightDiceToShow = document.querySelector(".right-dice-" + rightNumber);
        rightDiceToShow.classList.remove("hidden");
        shakeDice(rightDiceToShow);

        if (rightNumber > leftNumber) {
            heading.classList.add("hidden");
            resultTwo.classList.remove("hidden");
            resultOne.classList.add("hidden");
            resultDraw.classList.add("hidden");
        }
        else if (leftNumber > rightNumber) {
            heading.classList.add("hidden");
            resultOne.classList.remove("hidden");
            resultTwo.classList.add("hidden");
            resultDraw.classList.add("hidden");
        } else {
            heading.classList.add("hidden");
            resultDraw.classList.remove("hidden");
            resultOne.classList.add("hidden");
            resultTwo.classList.add("hidden");
        }
    });
}

function shakeDice(diceElement) {
    diceElement.style.transform = "rotate(-5deg)";
    setTimeout(() => {
        diceElement.style.transform = "rotate(5deg)";
        setTimeout(() => {
            diceElement.style.transform = "rotate(-3deg)";
            setTimeout(() => {
                diceElement.style.transform = "rotate(3deg)";
                setTimeout(() => {
                    diceElement.style.transform = "rotate(0)";
                }, 50);
            }, 50);
        }, 50);
    }, 50);
}

