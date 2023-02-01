export class Element {
    constructor() {
        this.titre = ""
        this.prix = ""
        this.description = ""
    }

    get title() {
        return this.titre
    }

    set title(t) {
        this.titre = t
    }

    get price() {
        return this.prix
    }

    set price(p) {
        this.prix = p
    }

    get desc() {
        return this.description
    }

    set desc(d) {
        this.description = d
    }
}