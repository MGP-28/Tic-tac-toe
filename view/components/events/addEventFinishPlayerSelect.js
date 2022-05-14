import { closePopup } from '../../workers/closePopup.js'
import { refreshPlayer } from '../../workers/playerUpdate/refreshPlayer.js'
import { selectPlayer } from '../../../presenter/playerManager.js'

function addEventFinishPlayerSelect(){
    document.addEventListener('pop', function (e) {
        closePopup()
        const player = selectPlayer(e.detail.playerid, e.detail.index)
        refreshPlayer(e.detail.playerid, player)
    })
}

export { addEventFinishPlayerSelect }