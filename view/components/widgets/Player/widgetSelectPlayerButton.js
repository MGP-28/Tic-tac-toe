import { buildButton } from '../widgetButton.js'
import { popEvent } from '../../../workers/newPopEvent.js'

function buildSelectPlayerButton(name, event = true){
    const buttonProperties = {
        text: name,
        classes: ['w-full', 'h-full', 'flex', 'justify-start', 'items-center', 'overflow-hidden', 'hover:font-semibold'],
        attributes: [],
        itemsToAppend: []
    }
    let eventFunction = null
    if(event){
        eventFunction = (event) => {
            const popupWindow = document.querySelector('#popup-window')
            //get variables
            const playerid = popupWindow.getAttribute('playerid')
            const index = event.target.parentElement.getAttribute('index')
            //dispatch custom event
            const eventPop = popEvent(playerid, index)
            document.dispatchEvent(eventPop);
        }
    }
    return buildButton(buttonProperties, eventFunction)
}

export { buildSelectPlayerButton }