let email = "contact@teamjs.fr";
let motDePasse = "leLundiAuSoleil";

let emailInput = prompt("Veuillez saisir votre adresse e-mail :");
let motDePasseInput = prompt("Veuillez saisir votre mot de passe :");

if ((emailInput == email) && (motDePasse == motDePasseInput)) {
    alert("Bienvenue");
} 
else {
    if ((emailInput != email) && (motDePasseInput != motDePasse)) {
            alert("Toutes les informations sont incorrects")
        }
        else if (emailInput != email) {
            alert("E-mail incorrect");
        } 
        else {
            alert("Mot de passe inccorect");
        }
};

