class NumberNullError extends Error{
    constructor(name){
        super('Number is null -> ' + name)
        this.name = name
    }
}

export { NumberNullError }