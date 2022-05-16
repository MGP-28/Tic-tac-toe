import { buildPopupPlayerList } from './popupPlayerList.js'
import { buildPopupAddNewPlayer } from './popupNewPlayer.js'
import { buildAddPlayerConfirm } from './popupConfirmNewPlayer.js'

function popupPlayerList(playerid, activePlayers, registeredPlayers){
    buildPopupPlayerList(playerid, activePlayers, registeredPlayers)
}

function popupAddNewPlayer(){
    buildPopupAddNewPlayer()
}

function popupNewPlayerSuccess(playerName, index){
    buildAddPlayerConfirm(playerName, index)
}

function popupNewPlayerFailed(){
    //
}

export { popupPlayerList, popupAddNewPlayer, popupNewPlayerSuccess, popupNewPlayerFailed }