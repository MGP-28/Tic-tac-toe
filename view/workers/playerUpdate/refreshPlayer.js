function refreshPlayer(playerid, player){
    const name = document.querySelector(`#playerTitle${playerid}`).textContent = player.name
    document.querySelector(`#playerWins${playerid}`).textContent = player.winCount
    document.querySelector(`#playerLosses${playerid}`).textContent = player.loseCount
    document.querySelector(`#playerTies${playerid}`).textContent = player.tieCount
    document.querySelector(`#playerForfeits${playerid}`).textContent = player.incompleteGamesCount

    /*
    //icon
    document.querySelector(`#playerTitle${playerid}`).textContent(player.name)
    */
}

export { refreshPlayer }