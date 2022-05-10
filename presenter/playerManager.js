import { popupPlayerList, popupAddNewPlayer, popupNewPlayerSuccess, popupNewPlayerFailed } from '../view/components/componentPopupSelectPlayer.js'
import { activePlayers, registeredPlayers, registerPlayer, removePlayer, changeActivePlayer } from '../store/players.js'

function showPlayerList(playerid){
    popupPlayerList(playerid, registeredPlayers)
}

function selectPlayer(playerid, index){
    const newPlayer = changeActivePlayer(playerid, index)
    //UI CHANGES TO PLAYER HERE
}

function removePlayerFromList(index){
    removePlayer(index)
    popupPlayerList(playerid, registeredPlayers)
}

function registerNewPlayer(){
    popupAddNewPlayer()
}

function registerPlayerToGame(player){
    if( registerPlayer(player) ) popupNewPlayerSuccess()
    else popupNewPlayerFailed()
}

export { showPlayerList, selectPlayer, removePlayerFromList, registerNewPlayer, registerPlayerToGame }