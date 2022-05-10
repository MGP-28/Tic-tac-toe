import { showPlayerList } from '../../../../presenter/playerManager.js'

function avatarClickEvent(event){
    const playerid = (event.target.getAttribute('playerid')) ? event.target.getAttribute('playerid') : event.target.parentElement.getAttribute('playerid')
    showPlayerList(playerid)
}

export { avatarClickEvent }