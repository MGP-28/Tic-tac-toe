import { createHTMLElement, appendElements } from '../../../helpers/dom.js'
import { buildPlayerInfoTab } from '../player_tab/componentPlayerInfoTab.js'
import { buildPlayerStatsTab } from '../player_tab/componentPlayerStatsTab.js'
import { buildPlayerDataLabel } from '../player_tab/componentPlayerDataLabel.js'
import { buildTitle } from '../componentTitle.js'

function buildPlayerSection(){
    //build container
    let classesToAdd = ['h-96']
    const playerDiv = createHTMLElement('div', '', classesToAdd, [{name: 'id', value: 'playerDiv'}])
    //create player info section -> infoDiv
    classesToAdd = ['h-1/2', 'flex']
    const infoDiv = createHTMLElement('div', '', classesToAdd)
    //create player stats section -> statsDiv
    classesToAdd = ['h-1/2', 'text-lg', 'pt-1']
    const statsDiv = createHTMLElement('div', '', classesToAdd)
    //built stats section title
    const titleProperties= {element: 'h2', text: 'History', classes: ['h-6', 'mb-5', 'font-bold']}
    const titleDivProperties = {classes: ['flex', 'justify-center']}
    buildTitle(statsDiv, titleProperties, titleDivProperties)
    //build stats section data div
    classesToAdd = ['flex', 'w-full']
    const statsDataDiv = createHTMLElement('div', '', classesToAdd)
    //build stats section data label
    buildPlayerDataLabel(statsDataDiv)
    //build 2 player tabs into each section
    for (let index = 1; index <= 2; index++) { 
        buildPlayerInfoTab(infoDiv, `Add Player ${index}`, index)
        buildPlayerStatsTab(statsDataDiv, index)
    }
    //append stats data div to stats div
    appendElements(statsDiv, [statsDataDiv])
    //append sections to container
    appendElements(playerDiv, [infoDiv, statsDiv])
    //apend container to main div
    const mainDiv = document.querySelector('#mainDiv')
    appendElements(mainDiv, [playerDiv])
}

export { buildPlayerSection }