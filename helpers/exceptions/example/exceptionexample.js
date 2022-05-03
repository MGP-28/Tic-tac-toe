class EmailEmptyError extends Error{
    constructor(name){
        super('Email field is required')
        this.name = name
    }
}

export {EmailEmptyError}