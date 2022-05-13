import { closePopup } from './closePopup.js'
import { refreshPlayer } from './refreshPlayer.js'
import { selectPlayer } from '../../../presenter/playerManager.js'

function addEventFinishPlayerSelect(){
    document.addEventListener('pop', function (e) {
        closePopup()
        const player = selectPlayer(details.index)
        refreshPlayer(details.playerid, player)
    })
}

export { addEventFinishPlayerSelect }