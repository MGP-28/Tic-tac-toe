import { buildButton } from '../widgetButton.js'
import { selectPlayer } from '../../../../presenter/playerManager.js'

function buildSelectPlayerButton(name){
    const buttonProperties = {
        text: name,
        classes: ['w-full', 'h-full', 'flex', 'justify-start', 'overflow-hidden', 'hover:font-semibold'],
        attributes: [],
        itemsToAppend: []
    }
    const selectPlayerButton = buildButton(buttonProperties, (event)=>{
        const popupWindow = document.querySelector('#popup-window')
        //get variables
        const playerid = popupWindow.getAttribute('playerid')
        const index = event.target.parentElement.getAttribute('index')
        //dispatch custom event
        const eventPop = new CustomEvent('pop', {
            detail: {
                playerid: playerid,
                index: index
            }
        })
        document.dispatchEvent(eventPop);
    })
    return selectPlayerButton
}

export { buildSelectPlayerButton }