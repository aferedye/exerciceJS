let age, ancient, lastSalary, indemnity;

age = Number(prompt('Saisissez votre age :'));
ancient = Number(prompt('Saisissez votre ancienneté :'));
lastSalary = Number(prompt('Saisissez votre dernier salaire :'));
indemnity = 0;

if (ancient <= 10) {
    for (let i = 1; i <= ancient; i++) {
        // indemnity = indemnity + (lastSalary / 2);
        indemnity += lastSalary / 2;
    }
} else {
    for (let i = 1; i <= ancient; i++) {
        indemnity = indemnity + (lastSalary);
    }
}

if (age >= 46 && age <= 49) {
    indemnity = indemnity + (lastSalary * 2);
} else if (age >= 50) {
    indemnity = indemnity + (lastSalary * 5);
}

console.log(`Bonjour employé ! Vous avez ${age} est vous faites partie de notre entreprise depuis ${ancient}. Félicitation votre indémnité s'élève à ${indemnity}`);
