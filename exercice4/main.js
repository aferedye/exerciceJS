let longueurCarre = Number(prompt("Entrez la longueur d'un carré :"));
let longueurRectangle = Number(prompt("Entrez la longueur du rectangle :"));
let largeurRectangle = Number(prompt("Entrez la largeur du rectangle :"))

let perimetreCarre = longueurCarre * 4;
let perimetreRectangle = (longueurRectangle + largeurRectangle) * 2;
let aireCarre = longueurCarre * longueurCarre;
let aireRectangle = longueurRectangle * largeurRectangle;

console.log(`Pour le carré son périmètre est égal à ${perimetreCarre} et son aire à ${aireCarre}`);
console.log(`Pour le rectangle son périmètre est égal à ${perimetreRectangle} et son aire à ${aireRectangle}`);

