let diametre = Number(prompt("Entrez le diamètre de votre cercle :"));

let perimetre = Math.round(diametre * Math.PI);

let aire = Math.round(Math.PI*Math.pow(diametre/2,2));

console.log(`Le cercle à un périmètre de ${perimetre} et une aire de ${aire}`);
