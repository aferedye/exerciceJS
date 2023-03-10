const affichageTemp = document.getElementById("affichageTemp");
const affichageLive = document.getElementById("affichageLive");
const bouton = document.getElementsByClassName("bouton");

let memoireValeur = "";
let directValeur = "";
let operateur = "";

for (let i = 0; i < bouton.length; i++) {
    bouton[i].addEventListener("click", function () {

        const boutonValeur = this.innerHTML;

        if (!isNaN(boutonValeur)) {
            directValeur += boutonValeur;
            affichageLive.innerHTML = directValeur;

        } else if (boutonValeur === "C") {
            memoireValeur = "";
            directValeur = "";
            operateur = "";
            affichageTemp.innerHTML = "";
            affichageLive.innerHTML = "";

        } else if (boutonValeur === ",") {

            directValeur += ".";
            affichageLive.innerHTML = directValeur;

        } else {
            if (boutonValeur === "=") {
                directValeur = operate(memoireValeur, directValeur, operateur);
                operateur = "";
                memoireValeur = "";

            } else {

                memoireValeur = directValeur;
                directValeur = "";
                operateur = boutonValeur;
            }

            affichageTemp.innerHTML = memoireValeur;
            affichageLive.innerHTML = directValeur;
        }
    });
}


function operate(a, b, operateur) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operateur) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "%":
            return a * b / 100;
        default:
            return "Error";
    }
}

window.addEventListener("keydown", function (e) {

    const keyValue = e.key;


    if (!isNaN(keyValue)) {
        directValeur += keyValue;
        affichageLive.innerHTML = directValeur;

    } else {
        switch (keyValue) {
            case "c":
            case "C":
                memoireValeur = "";
                directValeur = "";
                operateur = "";
                affichageTemp.innerHTML = "";
                affichageLive.innerHTML = "";
                break;
            case ".":
                directValeur += ".";
                affichageLive.innerHTML = directValeur;
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                if (e.key === "=" || e.key === "Enter") {
                    directValeur = operate(memoireValeur, directValeur, operateur);
                    operateur = "";
                    memoireValeur = "";
                } else {
                    memoireValeur = directValeur;
                    directValeur = "";
                    operateur = keyValue;
                }
                affichageTemp.innerHTML = memoireValeur;
                affichageLive.innerHTML = directValeur;
                break;
        }
    }
});
