let nbrNote= Number(prompt("Saisissez le nombre de note :"));
let n = document.getElementsByClassName("notes");
n.textContent = nbrNote + " notes :";
let noteAffichage = document.getElementById("noteAffichage");
let totalNotes = 0;
let moyenne = 0;
let noteMax = 0;
let noteMin = 0;

for (let i = 0; i < nbrNote; i++) {
    
    let note = Number(prompt("Saisir les notes :"));
    let li = document.createElement("li");
    noteAffichage.append(li);
    li.textContent = "En note " + (i+1) + ", vous avez saisi " + note + "/20";
    totalNotes = totalNotes + note;
    moyenne = totalNotes / nbrNote;
    noteMax = Math.max(note);
    
    console.log(noteMax)
}