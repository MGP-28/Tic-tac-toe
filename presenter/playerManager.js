import { popupPlayerList, popupAddNewPlayer, popupNewPlayerSuccess, popupNewPlayerFailed } from '../view/components/popup_select_player/popupSelectPlayer.js'
import { activePlayers, registeredPlayers, registerPlayer, removePlayer, changeActivePlayer, isPlayerUnique } from '../store/players.js'

function showPlayerList(playerid){
    popupPlayerList(playerid, registeredPlayers)
}

function selectPlayer(playerid, index){
    const newPlayer = changeActivePlayer(playerid, index)
    //UI - change player displayed
}
function removePlayerFromList(playerid, index){
    removePlayer(index)
    popupPlayerList(playerid, registeredPlayers)
}
function registerNewPlayerPopup(){
    popupAddNewPlayer()
}
function registerNewPlayer(playerName){
    if( registerPlayer(playerName) ) popupNewPlayerSuccess(playerName)
    else popupNewPlayerFailed(playerName)
}

function checkIsPlayerUnique(name){
    if(!isPlayerUnique(name)) throw 'Name already being used!'
}

export { showPlayerList, selectPlayer, removePlayerFromList, registerNewPlayerPopup, registerNewPlayer, checkIsPlayerUnique }