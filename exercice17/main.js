let chien = [
    {
        nom: "Max",
        race: "berger allemand",
        age: "5"
    },
    {
        nom: "Bernie",
        race: "labrador",
        age: "8"
    }
]

let listChien = document.getElementById("listChien");
let valid = document.getElementById("valid");
let key = 2;

listChien.addEventListener("change", () => {
    let texteOutput = document.getElementById("texte");

    if (listChien.value == 0) {
        texteOutput.textContent = ""
    } else {
        texteOutput.textContent = `Vous avez sélectionner le chien n°${listChien.value}`;
    }
});

// Ajout chien + affichage
valid.addEventListener("click", () => {

    let nomInput = document.getElementById("nom").value;
    let raceInput = document.getElementById("race").value;
    let ageInput = Number(document.getElementById("age").value);

    chien.push({"nom": nomInput, "race": raceInput, "age": ageInput});

    for (; key < chien.length; key++) {
        let option = document.createElement("option");
        option.textContent = String(chien[key].nom);
        option.setAttribute("value", (key + 1));
        listChien.append(option);
    }; 
});

// Listing chien 
for (let i = 0; i < chien.length; i++) {
    let option = document.createElement("option");
    option.textContent = String(chien[i].nom);
    option.setAttribute("value", (i + 1));
    listChien.append(option);
    };

