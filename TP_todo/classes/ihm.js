import { Task } from "./task.js";


export class Ihm {
    constructor(formulaire,tableauHtmlResultat){
        this.tasks = [];
        this.formulaire = formulaire;
        this.tableauHtmlResultat = tableauHtmlResultat;
    }

    demarrer(){
        this.formulaire.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                await this.ajouter()
                console.log("Etape 1 finie !");
                let id = document.querySelectorAll(".eraseTask")
                this.eraseTask(id)
            } catch (error) {
                console.error(error);
            }
        })
    }

    ajouter(){
            // Récupérer les champs et créer une tâche
            const title = this.formulaire.querySelector("input[name='titre']").value
            const content = this.formulaire.querySelector("textarea[name='contenu']").value
            let id = 0

            for (let i = 0; i <= this.tasks.length; i++) {
                id = (i + 1)
            }
            
            const task = new Task(id, title, content)
            this.tasks.push(task)
            

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (true) {
                    resolve(this.afficher(task))
                }
            }, 3000)
        })
        
    }

    afficher(task){
        let statusButton= ""

        if (task._status == true) {
            statusButton = "Finir la tâche"
        } else {
            statusButton = "Reprendre la tâche"
        }
        // Ajouter un contact à l'affichage HTML
        this.tableauHtmlResultat.innerHTML += `<tr>
        <td>${task._id}</td>
        <td>${task._title}</td>
        <td>${task._content}</td>
        <td><button class="eraseTask" data-test="${task._id}">Supprimer</button><button id="completeTask">${statusButton}</button></td>
        </tr>
        `
    }

    researchTask(value) {
        this.tableauHtmlResultat.innerHTML = ""
        for(const i in this.tasks) {
            let task = this.tasks[i]
            if (this.tasks[i]._title == value) {
                let statusButton= ""

                if (task._status == true) {
                    statusButton = "Finir la tâche"
                } else {
                    statusButton = "Reprendre la tâche"
                }

                    // Ajouter un contact à l'affichage HTML
                this.tableauHtmlResultat.innerHTML += `<tr>
                <td>${task._id}</td>
                <td>${task._title}</td>
                <td>${task._content}</td>
                <td><button class="eraseTask" data-test="${task._id}">Supprimer</button><button id="completeTask">${statusButton}</button></td>
                </tr>
                `
            }
            
            // Affiche l'entièreté de l'obj TASK si la recherche ne contient rien 
            if (value == "") {
                this.afficher(this.tasks[i])
            }
        }
    }

    eraseTask(id) {
        for(let xx= 0 ; xx < id.length ; xx++) {
            id.item(xx).addEventListener('click', () => {
                console.log(id.item(xx))
            for(const i in this.tasks) {
                if (id.item(xx).dataset.test == this.tasks[i]._id) {
                    this.tasks.splice((id.item(xx).dataset.test + 1), 1)
                    this.afficher(this.tasks[(i-1)])
                }}
        });
        }
    }}