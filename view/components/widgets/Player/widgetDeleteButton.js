import { buildButton } from '../widgetButton.js'
import { removePlayerFromList } from '../../../../presenter/playerManager.js'

function buildDeleteButton(){
    const buttonProperties = {
        text: 'Delete',
        classes: ['bg-red-700', 'text-white', 'p-2', 'rounded', 'border', 'border-red-700', 'hover:border-white'],
        attributes: [],
        itemsToAppend: []
    }
    const deleteBtn = buildButton(buttonProperties, (event)=>{
        const contentPopup = document.querySelector('#popup-content')
        removePlayerFromList(contentPopup.getAttribute('playerid'), event.target.parentElement.getAttribute('index'))
    })
    return deleteBtn
}

export { buildDeleteButton }