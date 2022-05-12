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
        const contentPopup = document.querySelector('#popup-content')
        selectPlayer(contentPopup.getAttribute('playerid'), event.target.parentElement.getAttribute('index'))
    })
    return selectPlayerButton
}

export { buildSelectPlayerButton }