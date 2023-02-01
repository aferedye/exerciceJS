export class Task {
    constructor(id, title, content, status = true) {
        this._id = id
        this._title = title
        this._content = content
        this._status = status
    }

    // get id() {
    //     return this._id
    // }

    get title() {
        return this._id
    }

    // get content() {
    //     return this._id
    // }

    // get status() {
    //     return this._id
    // }

    // set id(value) {
    //     this._id = value
    // }

    // set title(value) {
    //     this._title = value
    // }

    // set content(value) {
    //     this._content = value
    // }

    // set status(value) {
    //     this._status = value
    // }
    
}