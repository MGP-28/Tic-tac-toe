import { Player } from '../model/player.js'

activePlayers = [
    new Player('Add Player 1'),
    new Player('Add Player 2')
]

registedPlayers = []

function registerPlayer(player){
    registedPlayers.push(player)
}

function removePlayer(index){
    registedPlayers.splice(index, 1)
}

function changeActivePlayer(id){
    
}

export { registerPlayer, removePlayer, changeActivePlayer }