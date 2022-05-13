import { buildPopupPlayerList } from './popupPlayerList.js'
import { buildPopupAddNewPlayer } from './popupNewPlayer.js'
import { buildAddPlayerConfirm } from './popupConfirmNewPlayer.js'

function popupPlayerList(playerid, registeredPlayers){
    buildPopupPlayerList(playerid, registeredPlayers)
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