import { buildPopupPlayerList } from './popupPlayerList.js'
import { buildPopupAddNewPlayer } from './popupNewPlayer.js'

const body = document.querySelector('body')

function popupPlayerList(playerid, registeredPlayers){
    buildPopupPlayerList(playerid, registeredPlayers)
}

function popupAddNewPlayer(){
    buildPopupAddNewPlayer()
}

function popupNewPlayerSuccess(){
    
}

function popupNewPlayerFailed(){
    
}

export { popupPlayerList, popupAddNewPlayer, popupNewPlayerSuccess, popupNewPlayerFailed }