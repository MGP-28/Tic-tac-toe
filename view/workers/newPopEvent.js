function popEvent(playerid, index){
    const popEvent = new CustomEvent('pop', {
        detail: {
            playerid: playerid,
            index: index
        }
    })
    return popEvent
}

export { popEvent }