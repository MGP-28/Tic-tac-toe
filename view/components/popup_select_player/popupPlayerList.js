import { appendElements } from '../../../helpers/dom.js'
import { buildPopup } from '../componentPopup.js'

function buildPopupPlayerList(playerid, registeredPlayers){    
    //properties to apply to popup container
    const containerProperties = {
        classes: ['absolute', 'w-full', 'h-full', 'transparent', 'flex', 'justify-content', 'items-center'], 
        attributes: [], 
        itemsToAppend: []
    }
    //build popup
    const popup = buildPopup(containerProperties)
    //properties to apply to player list inside popup
    const listProperties = {

    }
    containerProperties = {

    }
    //append to top div of UI
    const topDiv = document.querySelector('#topDiv')
    appendElements(topDiv, popup)
}

export { buildPopupPlayerList }