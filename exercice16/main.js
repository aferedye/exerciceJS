let nbrNote= Number(prompt("Saisissez le nombre de note :"));
let n = document.getElementById("notes");
n.textContent = nbrNote + " notes :";
let noteAffichage = document.getElementById("noteAffichage");
let tabNotes = []


for (let i = 0; i < nbrNote; i++) {
    
    let note = prompt("Saisir les notes :");
    let li = document.createElement("li");
    noteAffichage.append(li);
    li.textContent = "En note " + (i+1) + ", vous avez saisi " + note + "/20";
    
    
    console.log(moyenne);
}