import { createHTMLElement, appendElements } from '../../helpers/dom.js'
import { buildWidgetPlayerTab } from './widgets/widgetPlayerTab.js'

function buildPlayerSection(id){
    //build container
    let classesToAdd = ['h-96']
    const playerDiv = createHTMLElement('div', '', classesToAdd, [{name: 'id', value: 'playerDiv'}])
    //player name and avatar section -> infoDiv
    classesToAdd = ['h-1/2', 'flex']
    const infoDiv = createHTMLElement('div', '', classesToAdd)
    buildWidgetPlayerTab(infoDiv, `Add Player ${id}`, id)
    //stats section -> statsDiv
    classesToAdd = ['h-1/2', 'flex', 'text-lg', 'pt-1']
    const statsDiv = createHTMLElement('div', '', classesToAdd)
    //append items to container
    appendElements(playerDiv, [infoDiv, statsDiv])
    //apend container to main div
    const mainDiv = document.querySelector('#mainDiv')
    appendElements(mainDiv, [playerDiv])
}

export { buildPlayerSection }