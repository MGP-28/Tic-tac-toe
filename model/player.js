class Player {
    #name
    #totalGames
    #winCount
    #loseCount
    #tieCount
    #placeholder
    constructor(name){
        this.#name = name
        this.#totalGames = 0
        this.#winCount = 0
        this.#loseCount = 0
        this.#tieCount = 0
        this.#placeholder = (!name) ? true : false
    }
    get name(){
        return this.#name
    }
    get totalGamesCount(){
        return this.#totalGames
    }
    get winCount(){
        return this.#winCount
    }
    get loseCount(){
        return this.#loseCount
    }
    get tieCount(){
        return this.#tieCount
    }
    get incompleteGamesCount(){
        return (this.#totalGames - this.#tieCount - this.#loseCount - this.#winCount)
    }
    addTotalGamesCount(number){
        this.#totalGames = number
    }
    addWinCount(number){
        this.#winCount = number
    }
    addLoseCount(number){
        this.#loseCount = number
    }
    addTieCount(number){
        this.#tieCount = number
    }
    stringuifyObject(){
        const jsonString = JSON.stringify({name: this.#name, totalGames: this.#totalGames, wins: this.#winCount, ties: this.#tieCount, losses: this.#loseCount})
        return jsonString
    }
    isPlaceholder(){
        return this.#placeholder
    }
}

export {Player}