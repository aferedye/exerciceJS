import { Element } from "./element.js";


export class Ihm {
    constructor(formulaire, domProd, domServ){
        this.element = [];
        this.formulaire = formulaire;
        this.domServ = domServ;
        this.domProd = domProd;
    }

    demarrer(){
        this.formulaire.addEventListener("submit",(e) => {
            e.preventDefault();
        })
    }

    ajouter(){
        // Récupérer les champs et créer un contact
        const element = new Element()
        element.title = this.formulaire.querySelector("input[name='titre']").value
        element.price = this.formulaire.querySelector("input[name='prix']").value
        element.desc = this.formulaire.querySelector("input[name='description']").value
        element.stock = this.formulaire.querySelector("input[name='stock']").value
        element.domaine = this.formulaire.querySelector("input[name='domaine']").value
        
        this.element.push(element)
        this.afficher(element)
    }

    switchForm() {
        let radios = this.formulaire.elements['check'];
        let prodInput = this.formulaire.querySelector("input[name='stock']");
        let servInput = this.formulaire.querySelector("input[name='domaine']");

        for(var i = 0; i < radios.length; i++) {
            radios[i].addEventListener('click', function() {
                
                if(this.value == "produit") {
                    servInput.className = 'invisible';
                    prodInput.className = 'visible';
                    // PRODUIT
                    
                } else {
                    servInput.className ='visible';
                    prodInput.className ='invisible';
                    // SERVICE
                    this.tableauHtmlResultat = document.querySelector("#resultServ")
                    
                }
            }    
        )}
        }

    afficher(c){
        // Ajouter un contact à l'affichage HTML
        this.tableauHtmlResultat.innerHTML += `<tr>
        <td>${c.titre}</td>
        <td>${c.prix}</td>
        <td>${c.description}</td>
        <td>${c.stock}</td>
        </tr>
        `

        // this.tableauHtmlResultat.innerHTML = "";
        // this.contacts.forEach(c => {
        //     this.tableauHtmlResultat.innerHTML += `<tr>
        // <td>${c.titre}</td>
        // <td>${c.nom}</td>
        // <td>${c.prenom}</td>
        // <td>${c.dateNaissance}</td>
        // <td>${c.telephone}</td>
        // <td>${c.email}</td>
        // </tr>
        // `
        // })
    }
}