import { popupPlayerList, popupAddNewPlayer, popupNewPlayerSuccess, popupNewPlayerFailed } from '../view/components/popup_select_player/popupIndex.js'
import { activePlayers, registeredPlayers, registerPlayer, removePlayer, changeActivePlayer, isPlayerUnique } from '../store/players.js'
import { addEventFinishPlayerSelect } from '../view/components/events/addEventFinishPlayerSelect.js'

function showPlayerList(playerid){
    addEventFinishPlayerSelect()
    popupPlayerList(playerid, registeredPlayers)
}

function selectPlayer(playerid, index){
    const newPlayer = changeActivePlayer(playerid, index)
    return newPlayer
}

function removePlayerFromList(playerid, index){
    removePlayer(index)
    popupPlayerList(playerid, registeredPlayers)
}

function registerNewPlayerPopup(){
    popupAddNewPlayer()
}

function registerNewPlayer(playerName){
    const index = registerPlayer(playerName)
    if( index >= 0) popupNewPlayerSuccess(playerName, index)
    else popupNewPlayerFailed(playerName)
}

function checkIsPlayerUnique(name){
    if(!isPlayerUnique(name)) throw 'Name already being used!'
}

export { showPlayerList, selectPlayer, removePlayerFromList, registerNewPlayerPopup, registerNewPlayer, checkIsPlayerUnique }