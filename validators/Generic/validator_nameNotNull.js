import { NameEmptyError } from '../../helpers/exceptions/genericException_NameEmpty.js'

class NameValidator{
    static exec(name){
        this.#isEmpty(name)
    }
    static #isEmpty(name){
        if(!name) throw new NameEmptyError()
    }
}

export { NameValidator }