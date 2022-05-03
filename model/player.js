class Player {
    #name
    #totalGames
    #winCount
    #loseCount
    #tieCount
    constructor(props){
        const {name, totalGames, winCount, loseCount, tieCount} = props
        this.#name = name
        this.#totalGames = totalGames
        this.#winCount = winCount
        this.#loseCount = loseCount
        this.#tieCount = tieCount
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
    set totalGamesCount(number){
        this.#totalGames = number
    }
    set winCount(number){
        this.#winCount = number
    }
    set loseCount(number){
        this.#loseCount = number
    }
    set tieCount(number){
        this.#tieCount = number
    }
    stringuifyObject(){
        const jsonString = JSON.stringify({name: this.#name, totalGames: this.#totalGames, wins: this.#winCount, ties: this.#tieCount, losses: this.#loseCount})
        return jsonString
    }
}

export {Player}