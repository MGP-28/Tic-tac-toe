class NameEmptyError extends Error{
    constructor(name){
        super('Name field is empty')
        this.name = name
    }
}

export { NameEmptyError }