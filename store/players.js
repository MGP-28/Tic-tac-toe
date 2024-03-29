import { Player } from '../model/player.js'

let registeredPlayers = []

let activePlayers = [
    new Player('slot'),
    new Player('slot')
]

const seeds = [
    new Player('Jonas Pistolas'),
    new Player('José Binoco'),
    new Player('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
]

function seedPlayers(){
    if(registeredPlayers.length == 0) registeredPlayers = seeds
}

/*function getAvailablePlayers(playerid){
    const availablePlayers = registeredPlayers.filter(elem => 
        elem.name != activePlayers[(playerid-1)].name
    )
    return availablePlayers
}*/

function registerPlayer(playerName){
    if(registeredPlayers.find(element => element.name == playerName)) return -1
    registeredPlayers.push( new Player(playerName))
    return (registeredPlayers.length-1)
}

function removePlayer(index){
    registeredPlayers.splice(index, 1)
}

function changeActivePlayer(playerid, index){
    const player = registeredPlayers[index]
    activePlayers[playerid-1] = player
    return player
}

function isPlayerUnique(name){
    for (let player of registeredPlayers) {
        if(player.name.toLowerCase() == name.toLowerCase()) return false
    }
    return true
}

export { activePlayers, registeredPlayers, /*getAvailablePlayers,*/ registerPlayer, removePlayer, changeActivePlayer, seedPlayers, isPlayerUnique }