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
let nbrNote = [... matieres];
        nbrNote = matieres.length;

for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i].nom + " " + etudiants[i].prenom);

    let matieres = etudiants[i].matieres;

    for (let key in matieres) {
        console.table(key + " : " + matieres[key]);
        // let nbrNote = Object.keys(matieres).length;

        for (let j = 0; j < nbrNote; j++) {
            console.log(j);
        }

        
        
    }

}