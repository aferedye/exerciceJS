let hauteur = Number(prompt("Saisissez la hauteur du triangle :"));
let longueur = Number(prompt("Saisissez la longueur du triangle :"));

let result = Math.pow(hauteur, 2) + Math.pow(longueur, 2);
let hypotenuse = Math.sqrt(result);

console.log(`L'hypoténuse du triangle rectangle est : ${hypotenuse}`);