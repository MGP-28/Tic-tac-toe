import { Player } from '../model/player.js'

let activePlayers = [
    new Player('Add Player 1'),
    new Player('Add Player 2')
]

let registeredPlayers = []

function registerPlayer(player){
    if( registeredPlayers.find(player) ) return false
    registeredPlayers.push(player)
    return true
}

function removePlayer(index){
    registeredPlayers.splice(index, 1)
}

function changeActivePlayer(playerid, index){
    activePlayers[playerid-1] = registeredPlayers[index]
}

export { activePlayers, registeredPlayers, registerPlayer, removePlayer, changeActivePlayer }