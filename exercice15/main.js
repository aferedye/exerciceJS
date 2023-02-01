let etudiants = [ 
    { 
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
]; 

let somme = 0;
let nbrNote= 0 ;
let moyenne= 0 ;

for (let i = 0; i < etudiants.length; i++) {
    console.log("############ DEBUT ETUDIANT ############")
    console.log(etudiants[i].nom + " " + etudiants[i].prenom);

    let matieres = etudiants[i].matieres;

    for (let key in matieres) {
        console.log(key + " : " + matieres[key] + " / 20");

        somme += matieres[key];   
        nbrNote++ ;
       

    }

    moyenne = somme / nbrNote;

    console.log(`La moyenne est de ${moyenne.toFixed(2)}`)
    somme = 0;
    nbrNote = 0;
    console.log("############ FIN ETUDIANT ############");
}