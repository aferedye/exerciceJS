let prixHT = parseFloat(prompt("Entrez le prix hors taxe :"));
let montantTVA = parseFloat(prompt("Entrez le montant de la TVA :"));

let prixTTC = prixHT + (prixHT / 100 * montantTVA);
let prixArrondi = prixTTC.toFixed(2);

console.log(`Le prix du produit est de : ${prixArrondi} TTC, la valeur de la TVA est de ${montantTVA}%`)
