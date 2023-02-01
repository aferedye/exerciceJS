import { Ihm } from "./classes/ihm.js";


const form = document.querySelector("#formulaire");
const result = document.querySelector("#resultTask");

const ihm = new Ihm(form,result);

ihm.demarrer();

document.querySelector("#searchButton").addEventListener('click', async () => {
    const searchInput = document.querySelector('#researchField').value

    try {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            if (true) {
                resolve(ihm.researchTask(searchInput)),
                console.log("Recherche terminée");
            }}, 2000)
        })
        ;
    } catch (error) {
        console.error(error)
    }
    

})
