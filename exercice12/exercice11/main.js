let nbrHabitant = 96809,
    tauxCroissance = 0.89,
    année = 2015;

while (nbrHabitant < 120000) {
    nbrHabitant = nbrHabitant * tauxCroissance;
    année = année++;
};

console.log(`Le nombre d'habitant atteindra ${nbrHabitant} en ${année}`);