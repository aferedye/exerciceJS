let nbr = Number(prompt("Saisir un nombre : ")),
    message = "Liste d'entiers chainés ";

for(let i = 1; i <= nbr/2 + 1; i++) {
    let somme = i;
    let chaine = " "+nbr+ " - "+ i + " ";

    for(let j = i + 1; j <= nbr/2 + 1; j++) {
        somme += j;
        chaine += " + " + j;

        if(somme == nbr) {
            message += ` ${chaine} `;
            break;
        } else if (somme > nbr) {
            break;
        }
    };
};

// while (somme <= nbr) {
//     somme += i;
//     stringResult = `${stringResult} + ${i}`
//     i++;
// }

console.log(message);

