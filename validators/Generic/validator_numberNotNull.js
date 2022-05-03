import { NumberNullError } from '../../helpers/exceptions/generic/Exception_numberNotNull.js'

class NumberNotNullValidator{
    static exec(number){
        this.#isNull(number)
    }
    static #isNull(number){
        if(!number) throw new NumberNullError(number)
    }
}

export { NumberNotNullValidator }