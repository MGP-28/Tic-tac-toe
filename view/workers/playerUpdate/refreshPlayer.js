import { assignSymbol } from '../../components/widgets/gameSimbol.js'

function refreshPlayer(playerid, player){
    document.querySelector(`#playerTitle${playerid}`).textContent = player.name
    document.querySelector(`#playerWins${playerid}`).textContent = player.winCount
    document.querySelector(`#playerLosses${playerid}`).textContent = player.loseCount
    document.querySelector(`#playerTies${playerid}`).textContent = player.tieCount
    document.querySelector(`#playerForfeits${playerid}`).textContent = player.incompleteGamesCount
    changeIcon(playerid)
}

function changeIcon(playerid){
    const icon = document.querySelector(`#playerIcon${playerid}`)
    if(icon) {
        const iconParent = icon.parentElement
        iconParent.textContent = ''
        assignSymbol(iconParent, playerid)
    }
}

export { refreshPlayer }