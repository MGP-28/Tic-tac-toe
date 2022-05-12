import { buildButton } from '../widgetButton.js'
import { registerNewPlayer } from '../../../../presenter/playerManager.js'

function buildAddPlayerButton(){
    const buttonProperties = {
        text: 'Add new player',
        classes: ['w-full', 'bg-gray-300', 'text-black', 'font-semibold', 'border', 'border-red-500', 'p-2', 'rounded', 
            'hover:font-bold', 'hover:bg-gray-200', 'hover:text-black', 'hover:border-red-500', 'shadow-glow-hover'],
        attributes: [],
        itemsToAppend: []
    }
    const addPlayerButton = buildButton(buttonProperties, (event)=>{
        registerNewPlayer()
    })
    return addPlayerButton
}

export { buildAddPlayerButton }