import { Player } from '../model/player.js'

let registeredPlayers = []

let activePlayers = [
    new Player('slot 1'),
    new Player('slot 2')
]

const seeds = [
    new Player('Jonas Pistolas'),
    new Player('José Binoco'),
    new Player('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
]

function seedPlayers(){
    if(registeredPlayers.length == 0) registeredPlayers = seeds
}

function registerPlayer(player){
    if( registeredPlayers.find(player) ) return false
    registeredPlayers.push(player)
    return true
}

function removePlayer(index){
    registeredPlayers.splice(index, 1)
}

function changeActivePlayer(playerid, index){
    const player = registeredPlayers[index]
    activePlayers[playerid-1] = player
    return player
}

export { activePlayers, registeredPlayers, registerPlayer, removePlayer, changeActivePlayer, seedPlayers }