import { createHTMLElement } from '../../../../helpers/dom.js'
import { buildButton } from '../widgetButton.js'
import { selectPlayer } from '../../../../presenter/playerManager.js'

function buildAddPlayerConfirmPopup(parent, playerName, index) {
    //build container
    const outterContainer = createHTMLElement('div','',['w-4/5', 'flex', 'flex-col', 'items-center', 'gap-5'])
    //build icon
    const icon = createHTMLElement('i','',['fa-regular', 'fa-circle-check', 'text-red-100', 'text-8xl'])
    outterContainer.append(icon)
    //build inner container to hold text
    const textContainer = createHTMLElement('div','',['w-full', 'flex', 'flex-col', 'items-center', 'gap-1'])
    //build text
    ////player name
    const title = createHTMLElement('h1', playerName, ['text-red-200', 'text-2xl', 'text-semibold', 'max-w-full', 'truncate'])
    textContainer.append(title)
    ////message
    const message = createHTMLElement('h2', 'is now a player!', ['text-white', 'text-1xl'])
    textContainer.append(message)
    outterContainer.append(textContainer)
    //build save button
    const buttonProperties = {
        classes: ['w-full', 'bg-gray-300', 'text-black', 'font-semibold', 'border', 'border-red-500', 'p-2', 'rounded', 
        'hover:font-bold', 'hover:bg-gray-200', 'hover:text-black', 'hover:border-red-500', 'shadow-glow-hover'],
        attributes: [],
        itemsToAppend: [],
        text: 'Nice!'
    }
    const button = buildButton(buttonProperties, () => {
        //playerid + index
        const playerid = document.querySelector('#popup-window').getAttribute('playerid')
        const eventPop = new CustomEvent('pop', {
            detail: {
                playerid: playerid,
                index: index
            }
        })
        document.dispatchEvent(eventPop);
    })
    outterContainer.append(button)
    parent.append(outterContainer)
}

export { buildAddPlayerConfirmPopup }