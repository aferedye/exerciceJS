import { Element } from "./element.js";

export class Produit extends Element {
    constructor(t, p, d, s) {
        super(t, p, d)
        this.stock = s
    }

    get stock() {
        return this.stock
    }

    set stock(stock) {
        this.stock = stock
    }
} 