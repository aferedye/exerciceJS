let commande;

commande = prompt("Que voulez vous ? 1 Eau , 2 Jus d'orange , 3 Limonade , 4 Café , 5 Thé");


commande = commande.split(/\s+/).splice();

console.log(commande)

switch(commande) {
    case commande[0]:
        commande = "Eau";
        break;
    case [1]:
        commande = commande + "Jus d'orange";
        break;
    case 3:
        commande = commande + "Limonade";
        break;
    case 4:
        commande = commande + "Café";
        break;
    case 5:
        commande = commande + "Thé";
        break;
}

console.log(commande)