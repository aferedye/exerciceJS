let quotientFamilial, partTotal, netImposable, nbrAdulte, nbrEnfant, partAdulte, partEnfant, montantImpot, tranche;

netImposable = Number(prompt("Entrez votre revenu NET imposable :"));
nbrAdulte = Number(prompt("Entrez le nombre d'adulte:"));
nbrEnfant = Number(prompt("Entrez le nombre d'enfant:"));

partAdulte = 1;


partAdulte = partAdulte * nbrAdulte ;

if (nbrEnfant < 3) {
    partEnfant = nbrEnfant * 0.5;
} else {
    partEnfant = 1;
    nbrEnfant = nbrEnfant - 2;
    partEnfant = partEnfant * nbrEnfant;
};

partTotal = partAdulte + partEnfant;
quotientFamilial = netImposable / partTotal;
quotientFamilial = quotientFamilial.toString()

if (netImposable <= 10777) {
    quotientFamilial = quotientFamilial - 10777;
    quotientFamilial.toString();

    switch (quotientFamilial) {
        case :
            
    };
};

if (netImposable > 10777 && netImposable <= 27478) {
    

};
if (netImposable > 27479 && netImposable <= 78570) {
 
};
if (netImposable > 78571 && netImposable <= 168994) {
   
};
if (netImposable > 168995) {
 
};


// switch () {
//     case 'tranche 1':
//         montantImpot = 0
//         console.log('ok')
//         break;
//     case 'tranche 2':
//         montantImpot = (netImposable * 11) /100
//         break;
//     case 'tranche 3':
//         montantImpot = (netImposable * 30) /100
//         break;
//     case 'tranche 4':
//         montantImpot = (netImposable * 41) /100
//         break;
//     case 'tranche 5':
//         montantImpot = (netImposable * 45) /100
//         break;
// }



// console.log(tranche);
// console.log(montantImpot);
