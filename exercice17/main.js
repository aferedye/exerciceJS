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


let valid = document.getElementById("valid");

valid.addEventListener("click", () => {
    let nomInput = document.getElementById("nom").value;
    let raceInput = document.getElementById("race").value;
    let ageInput = document.getElementById("age").value;

    chien.push({"nom": nomInput, "race": raceInput, "age": ageInput});
    

});

console.table(chien);
