import { Element } from "./element.js";

export class Service extends Element {
    constructor(t, p, d, dom) {
        super(t, p, d)
        this.domaine = dom
    }

    get domaine() {
        return this.domaine
    }

    set domaine(domaine) {
        this.domaine = domaine
    }
} 